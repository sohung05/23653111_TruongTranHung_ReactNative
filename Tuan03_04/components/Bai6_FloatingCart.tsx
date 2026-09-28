import React from "react";
import { View, Text } from "react-native";

export default function Bai6_FloatingCart() {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
      }}
    >

      <Text style={{ textAlign: "center", marginBottom: 10 }}>
        Floating Cart Button
      </Text>

      {/* Khung màn hình */}
      <View
        style={{
          width: 185,
          height: 260,
          borderWidth: 2,
          borderColor: "blue",
          borderRadius: 10,
          backgroundColor: "pink",
          padding: 10,
          position: "relative",
        }}
      >

        {/* Ô 1 */}
        <View
          style={{
            height: 28,
            borderWidth: 1,
            borderColor: "blue",
            backgroundColor: "lightgray",
            marginBottom: 10,
          }}
        />

        {/* Ô 2 */}
        <View
          style={{
            height: 28,
            borderWidth: 1,
            borderColor: "blue",
            backgroundColor: "lightgray",
            marginBottom: 10,
          }}
        />

        {/* Ô 3 */}
        <View
          style={{
            height: 28,
            borderWidth: 1,
            borderColor: "blue",
            backgroundColor: "lightgray",
            marginBottom: 10,
          }}
        />

        {/* Ô 4 */}
        <View
          style={{
            height: 28,
            borderWidth: 1,
            borderColor: "blue",
            backgroundColor: "lightgray",
          }}
        />

        {/* Nút giỏ hàng */}
        <View
          style={{
            position: "absolute",
            bottom: 24,
            right: 20,
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: "blue",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 10 }}>
            Giỏ hàng
          </Text>

          {/* Số lượng */}
          <View
            style={{
              position: "absolute",
              top: -5,
              right: -5,
              width: 20,
              height: 20,
              borderRadius: 10,
              backgroundColor: "red",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 12 }}>
              4
            </Text>
          </View>

        </View>

      </View>
    </View>
  );
}