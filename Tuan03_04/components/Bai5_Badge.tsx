import React from "react";
import { View, Text } from "react-native";

export default function Bai5_Badge() {
  return (
    <View style={{ padding: 20 }}>

      <Text style={{ textAlign: "center", marginBottom: 10 }}>
        Badge
      </Text>

      {/* Ảnh bìa */}
      <View
        style={{
          width: 225,
          height: 130,
          backgroundColor: "lightgray",
          borderWidth: 2,
          borderColor: "blue",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
        }}
      >

        <Text>Ảnh bìa sách</Text>

        {/* Badge */}
        <View
          style={{
            position: "absolute",
            top: 6,
            left: 6,
            backgroundColor: "red",
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white" }}>
            -20%
          </Text>
        </View>

      </View>
    </View>
  );
}