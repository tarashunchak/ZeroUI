import { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
import { createAnimatedComponent, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

const AnimatedView = createAnimatedComponent(View);

function vectorLength(x: number, y: number): number {
  return Math.sqrt(x * x + y * y);
};

interface ZUIAnalogStickParams {
  minValue: number;
  maxValue: number;
  size: number;
  defaultValue: number | undefined;
};

export default function ZUIAnalogStick(props: ZUIAnalogStickParams) {
  const translationX = useSharedValue<number>(props.defaultValue ?? 0);
  const translationY = useSharedValue<number>(props.defaultValue ?? 0);
  const scale = useSharedValue<number>(1);

  const cutToRadius = useCallback((pos: number) => {
    const tmpPos = vectorLength(translationX.value, translationY.value);
    console.warn("POS: ", tmpPos);
    if (tmpPos <= 50)
      return pos;
    return pos - 1;
  }, [translationX, translationY]);

  const translationBordersCheck = useCallback((value: number) => {
    return Math.min(Math.max(value, props.minValue), props.maxValue);
  }, [props]);

  const animatedStyle = useAnimatedStyle(() => {
    //console.log(`X: ${translationX.value} =-= Y: ${translationY.value}`);
    return ({
      transform: [
        { translateX: translationX.value },
        { translateY: translationY.value },
        { scale: scale.value },
      ],
      cursor: "grabbing",
    });
  });

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      translationX.value = withSpring((event.x - 50) % 51);
      translationY.value = withSpring((event.y - 50) % 51);
    }).onEnd(() => {
      translationX.value = withSpring(props.defaultValue ?? 0);
      translationY.value = withSpring(props.defaultValue ?? 0);
      scale.value = withSpring(1);
    }).onStart(() => {
      scale.value = withSpring(0.95);
    });

  return (
    <View style={styles.container}>
      <GestureHandlerRootView>
        <GestureDetector gesture={panGesture}>
          <AnimatedView style={[styles.stick, animatedStyle]} />
        </GestureDetector>
      </GestureHandlerRootView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 100,
    maxHeight: 140,
    aspectRatio: 1,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 999,
    padding: "2%",
    backgroundColor: "rgba(100, 100, 100, 0.4)"
  },
  stick: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 999,
    touchAction: "none",
    cursor: "grab",
    borderColor: "gray",
    borderWidth: 5,
  },
});