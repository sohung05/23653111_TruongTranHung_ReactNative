import { View, Text, Button } from "react-native";
import { useState } from "react";

type Gender = "male" | "female" | "other";

export default function GenderSelector() {
  const [gender, setGender] = useState<Gender>("male");

  return (
    <View>
      <Text>Giới tính: {gender}</Text>

      <Button
        title="Nam"
        onPress={() => setGender("male")}
      />

      <Button
        title="Nữ"
        onPress={() => setGender("female")}
      />

      <Button
        title="Khác"
        onPress={() => setGender("other")}
      />
    </View>
  );
}