import { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import ZUIPressableScale from "./pressable-scale";

interface ZUIArrowButtonProps {
  text: string;
};

export const ZUIArrowButton = memo(({ text }: ZUIArrowButtonProps) => {
  return (
    <ZUIPressableScale style={styles.button}>
      <Text>{text}</Text>
    </ZUIPressableScale>
  );
});

export default function ZUIArrowButtonsBlock() {
  return (
    <View style={styles.container}>
      <ZUIArrowButton text="Left" />
      <View style={styles.column}>
        <ZUIArrowButton text="Up" />
        <ZUIArrowButton text="Down" />
      </View>
      <ZUIArrowButton text="Right" />
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