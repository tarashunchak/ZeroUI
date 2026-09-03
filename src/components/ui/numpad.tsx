import { StyleSheet, View } from "react-native";
import PressableScale from "./pressable-scale";

export default function ZUINumPad(){
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <PressableScale style={styles.numberBtn}/>
        <PressableScale style={styles.numberBtn}/>
        <PressableScale style={styles.numberBtn}/>
      </View>
      <View style={styles.row}>
        <PressableScale style={styles.numberBtn}/>
        <PressableScale style={styles.numberBtn}/>
        <PressableScale style={styles.numberBtn}/>
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
});