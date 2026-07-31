import { StyleSheet, Text } from "react-native";
import ZUIPressableScale from "./pressable-scale";

interface Props {
  onPress: (_: any) => any;
};

export default function ConfirmButton({ onPress }: Props) {
  return (
    <ZUIPressableScale
      style={styles.container}
      onPress={onPress}
    >
      <Text style={styles.text}>Confirm</Text>
    </ZUIPressableScale>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 40,
    maxHeight: 52,
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  }
});