import { StyleSheet, Text, TextInput, View } from "react-native";

interface Props {
  label: string;
};

export default function LabeledTextInput({label}: Props){
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.textInput} cursorColor={"white"}>
      </TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  textInput: {
    minHeight: 40,
    maxHeight: 52,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderColor: "white",
    borderWidth: 0.5,
    borderRadius: 8,
    color: "white",
    paddingHorizontal: 5,
  },
  label: {
    color: "white",
    fontSize: 16,
  },
});