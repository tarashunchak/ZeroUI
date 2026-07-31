import { StyleSheet, View } from "react-native";
import { Gesture, GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";
import { createAnimatedComponent, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

const AnimatedView = createAnimatedComponent(View);

function vectorLength(x: number, y: number){
  return Math.sqrt(x*x + y*y);
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

  const animatedStyle = useAnimatedStyle(() => {
    //console.log(`X: ${translationX.value} =-= Y: ${translationY.value}`);
    return ({
      transform: [
        { translateX: Math.min(Math.max(translationX.value, props.minValue - 20), props.maxValue + 20) % vectorLength(translationX.value, translationY.value) },
        { translateY: Math.min(Math.max(translationY.value, props.minValue - 20), props.maxValue + 20) % vectorLength(translationX.value, translationY.value) },
        { scale: scale.value },
      ],
      cursor: "grabbing",
    });
  });

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      translationX.value = withSpring(event.x);
      translationY.value = withSpring(event.y);
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
    borderWidth: 1,
    borderRadius: 999,
    padding: "2%",
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