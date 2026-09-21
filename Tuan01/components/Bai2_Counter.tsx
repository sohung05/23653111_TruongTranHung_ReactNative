import { View, Text, Button } from "react-native";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const tang = () => {
    setCount(count + 1);
  };

  const giam = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <View>
      <Text>Giá trị: {count}</Text>

      <Button title="Tăng" onPress={tang} />
      <Button title="Giảm" onPress={giam} />
    </View>
  );
}