import { memo } from "react";
import { StyleSheet, View } from "react-native";
import PressableScale from "./pressable-scale";

interface Params {
};

const Row = memo(() => (
  <View style={styles.row}>
    <PressableScale style={styles.numberBtn} />
    <PressableScale style={styles.numberBtn} />
    <PressableScale style={styles.numberBtn} />
  </View>
));

const Plus = memo(() => (
  <PressableScale style={styles.plusBtn} />
))

export default function ZUINumPad(params: Params) {
  const { } = params;
  return (
    <View style={styles.container}>
      <Row />
      <Row />
      <Row />
      <View style={{
        flexDirection: "row",
        gap: "1%",
      }}>
        <Plus />
        <Plus />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: "1%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "1%",
  },
  numberBtn: {
    padding: 20,
    backgroundColor: "white",
  },
  plusBtn: {
    width: "70%",
    height: 40,
    backgroundColor: "white",
  },
});