import { useCallback } from "react";
import { Animated, LayoutChangeEvent, Pressable, StyleSheet } from "react-native";
import { createAnimatedComponent, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

const AnimatedPressable = createAnimatedComponent(Pressable);

interface Layout {
  start?: any;
  end?: any;
  state?: boolean;
};

interface Props {
  orientation: "vertical" | "horizontal" | "v" | "h";
};

export default function ZUIToggleButton(props: Props) {
  const layout = useSharedValue<Layout>({});
  const isVertical: boolean = (props.orientation === "v" || props.orientation === "vertical");
  const indicatorPos = useSharedValue<number>(0);
  const backgroundOpacity = useSharedValue<number>(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: !isVertical ? indicatorPos.value : 0},
      { translateY: isVertical ? indicatorPos.value : 0},
      //{ scaleX: indicatorState.value ? 1.3 : 1 }
    ]
  }));

  const animatedBackground = useAnimatedStyle(() => ({
    opacity: backgroundOpacity.value,
  }));

  const onPress = useCallback(() => {
    const val = layout.value;
    indicatorPos.value = withSpring(val?.state ? 0 : val?.end - 44)
    const tmp = layout.value;
    backgroundOpacity.value = withSpring(val.state ? 100 : 0);

    layout.value = {
      start: tmp?.start,
      end: tmp?.end,
      state: !tmp?.state,
    };
  }, [layout?.value?.state, backgroundOpacity.value]);

  const onLayout = useCallback((e: LayoutChangeEvent) => {
    layout.value = {
      start: e.nativeEvent.layout.x,
      end: e.nativeEvent.layout.width,
      state: false,
    };
  }, []);

  return (
    <Animated.View
      style={[styles.container, animatedBackground]}
      onLayout={onLayout}
    >
      <AnimatedPressable style={[styles.indicator, animatedStyle]} onPress={onPress} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 999,
    borderColor: "white",
    borderWidth: 2,
    height: 40,
    width: 80,
    padding: 2,
    backgroundColor: "transparent",
  },
  indicator: {
    borderRadius: 18,
    height: "100%",
    width: "50%",
    backgroundColor: "cyan",
  },
});