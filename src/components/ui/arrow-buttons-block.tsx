import { memo, useCallback } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { createAnimatedComponent, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

const AnimatedPressable = createAnimatedComponent(Pressable);

interface ZUIArrowButtonProps{
  text: string;
};

export const ZUIArrowButton = memo(({text}: ZUIArrowButtonProps)=>{
  const val = useSharedValue(1);
  const leftAnimatedStyle = useAnimatedStyle(()=>({
    transform: [{scale: val.value}],
  }));

  const onPressIn = useCallback(()=>{
    val.value = withSpring(0.8);
  }, []);

  const onPressOut = useCallback(()=>{
    val.value = withSpring(1);
  }, []);

  return (
  <AnimatedPressable style={[styles.button, leftAnimatedStyle]} 
    onPressIn={onPressIn}
    onPressOut={onPressOut}
  >
    <Text>{text}</Text>
  </AnimatedPressable>
  );
});

export default function ZUIArrowButtonsBlock(){
  return (
    <View style={styles.container}>
      <ZUIArrowButton text="Left"/>
      <View style={styles.column}>
        <ZUIArrowButton text="Up"/>
        <ZUIArrowButton text="Down"/>
      </View>
      <ZUIArrowButton text="Right"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexDirection: "row",
    minHeight: 90,
    maxHeight: 170,
    aspectRatio: 1,
  },
  button: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 40,
    maxHeight: 80,
    minWidth: 40,
    maxWidth: 80,
    aspectRatio: 1,
    padding: "1%",
    margin: "2%",
    borderRadius: 6,
  },
  row: {
  },
  column: {
    justifyContent: "space-between"
  },
});