import { memo, useCallback } from "react";
import { Pressable } from "react-native";
import { createAnimatedComponent, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

const AnimatedPressable = createAnimatedComponent(Pressable);

function ZUIPressableScale({ children, style }: any) {
  const val = useSharedValue(1);
  const leftAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: val.value }],
  }));

  const onPressIn = useCallback(() => {
    val.value = withSpring(0.8);
  }, []);

  const onPressOut = useCallback(() => {
    val.value = withSpring(1);
  }, []);

  return (
    <AnimatedPressable style={[style, leftAnimatedStyle]}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      {children}
    </AnimatedPressable>
  );
};

export default memo(ZUIPressableScale);