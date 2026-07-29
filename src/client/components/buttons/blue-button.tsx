import { Pressable, Text } from "react-native";
import { ZUIButtonParams } from "./base";

const _default: ZUIButtonParams = {  
  text: "Button",
  width: 120,
  height: 40,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "blue",
  borderRadius: 6,
};

const _textStyle = {
  color: "white"
};

export default function ZUIBlueButton(params: ZUIButtonParams | any){
  return(
    <Pressable style={[_default, params]}>
      <Text style={_textStyle}>{params.text}</Text>
    </Pressable>
  );
};