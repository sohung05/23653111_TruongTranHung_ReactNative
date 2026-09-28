import React from "react";
import { View, Text } from "react-native";

export default function Bai1_Header() {
  return (
    <View
      style={{
        height: 120,
        borderWidth: 2,
        borderColor: "blue",
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Ô bên trái */}
      <View
        style={{
          width: 220,
          height: 55,
          backgroundColor: "lightgray",
        }}
      />

      {/* Khung bên phải */}
      <View
        style={{
          width: 210,
          height: 65,
          borderWidth: 1,
          borderColor: "blue",
          borderStyle: "dashed",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {/* Ô Tìm */}
        <View
          style={{
            width: 60,
            height: 32,
            borderWidth: 1,
            borderColor: "blue",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Tìm</Text>
        </View>

        {/* Ô Giỏ hàng */}
        <View
          style={{
            width: 75,
            height: 32,
            borderWidth: 1,
            borderColor: "blue",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Giỏ hàng</Text>
        </View>
      </View>
    </View>
  );
}