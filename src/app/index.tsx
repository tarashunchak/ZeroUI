import ZUIBlueButton from '@/client/components/buttons/blue-button';
import ZUIArrowButtonsBlock from '@/components/ui/arrow-buttons-block';
import ConfirmButton from '@/components/ui/confirm-button';
import LabeledTextInput from '@/components/ui/labeled-text-input';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Zero UI</Text>
      <View style={styles.contentBlock}>
        <ZUIArrowButtonsBlock/>
        <ZUIBlueButton/>
        <LabeledTextInput label='MC IP Address'/>
        <LabeledTextInput label='Port'/>
        <ConfirmButton onPress={()=>{}}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    gap: 80
  },
  label: {
    fontSize: 56,
    color: "white",
    fontWeight: "bold",
  },
  contentBlock: {
    gap: 20,
    width: "80%",
    maxWidth: 400,
    alignSelf: "center",
    alignItems: "center",
  }
});
