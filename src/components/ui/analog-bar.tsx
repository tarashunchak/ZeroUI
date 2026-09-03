import { StyleSheet, View } from "react-native";
import { createAnimatedComponent, useAnimatedStyle, useSharedValue } from "react-native-reanimated";

interface Params {
  minVal: number;
  maxVal: number;
  gap: number;
  color: string | number;
};

const AnimatedView = createAnimatedComponent(View);

export default function ZUIAnalogBar(params: Params) {
  const val = useSharedValue<number>(0);
  const animatedStyle = useAnimatedStyle(() => ({

  }));

  return (
    <View>
      <AnimatedView style={[styles.container, animatedStyle]}>
      </AnimatedView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    width: "100%",
    height: 40,
  },
  bar: {
  },
});