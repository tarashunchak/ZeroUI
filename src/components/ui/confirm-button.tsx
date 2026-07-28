import { Pressable, StyleSheet, Text } from "react-native";

interface Props {
  onPress: (_:any) => any;
};

export default function ConfirmButton({onPress}: Props) {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>Confirm</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 40,
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