import React, { useState } from "react";
import { View, Text, Button } from "react-native";

type CustomError = {
  message: string;
};

export default function Bai12_ApiError() {
  const [errorMessage, setErrorMessage] = useState("");

  const getData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/abcxyz"
      );

      if (!response.ok) {
        throw new Error("API không tồn tại");
      }

      const data = await response.json();

      console.log(data);
    } catch (error) {
      const customError = error as CustomError;

      setErrorMessage(customError.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>
        Bài 12 - API Error
      </Text>

      <Text style={{ marginVertical: 20 }}>
        Nhấn nút để gọi API sai
      </Text>

      <Button title="Gọi API" onPress={getData} />

      {errorMessage !== "" && (
        <Text style={{ marginTop: 20, color: "red", fontSize: 18 }}>
          Lỗi: {errorMessage}
        </Text>
      )}
    </View>
  );
}