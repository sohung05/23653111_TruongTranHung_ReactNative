import { View, Text, TextInput } from "react-native";
import { useState } from "react";

export default function LiveInput() {
  const [text, setText] = useState("");

  const handleChangeText = (value: string) => {
    setText(value);
  };

  return (
    <View>
      <TextInput
        placeholder="Nhập nội dung"
        value={text}
        onChangeText={handleChangeText}
      />

      <Text>Số ký tự: {text.length}</Text>
    </View>
  );
}