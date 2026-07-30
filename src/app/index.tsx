import ZUIBlueButton from '@/client/components/buttons/blue-button';
import ZUIAnalogStick from '@/components/ui/analog-stick';
import ZUIArrowButtonsBlock from '@/components/ui/arrow-buttons-block';
import ConfirmButton from '@/components/ui/confirm-button';
import LabeledTextInput from '@/components/ui/labeled-text-input';
import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  return (
    <Stack.Screen
      options={{
        headerShown: false,
      }}
    >
      <View style={[styles.container, {paddingTop: insets.top}]}>
        <Text style={styles.label}>Zero UI</Text>
        <View style={styles.contentBlock}>
          <ZUIAnalogStick maxValue={50} minValue={-50} size={20} defaultValue={undefined}/>
          <ZUIArrowButtonsBlock/>
          <ZUIBlueButton/>
          <LabeledTextInput label='MC IP Address'/>
          <LabeledTextInput label='Port'/>
          <ConfirmButton onPress={()=>{}}/>
        </View>
      </View>
    </Stack.Screen>
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
    fontStyle: "italic",
  },
  contentBlock: {
    gap: 20,
    width: "90%",
    maxWidth: 400,
    alignSelf: "center",
    alignItems: "center",
  }
});
