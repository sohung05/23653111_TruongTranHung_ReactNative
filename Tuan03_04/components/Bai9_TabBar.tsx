import React from "react";
import { View, Text } from "react-native";

export default function Bai9_TabBar() {
  return (
    <View
      style={{
        flex: 1,
        position: "relative",
      }}
    >

      {/* Nội dung màn hình */}
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Nội dung màn hình</Text>
      </View>

      {/* Thanh Tab Bar */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 80,
          borderWidth: 2,
          borderColor: "blue",
          borderStyle: "dashed",
          flexDirection: "row",
          backgroundColor: "white",
        }}
      >

        {/* Trang chủ */}
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: 45,
              height: 30,
              borderWidth: 1,
              borderColor: "blue",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>•</Text>
          </View>

          <Text>Trang chủ</Text>
        </View>

        {/* Danh mục */}
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: 45,
              height: 30,
              borderWidth: 1,
              borderColor: "blue",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>•</Text>
          </View>

          <Text>Danh mục</Text>
        </View>

        {/* Giỏ hàng */}
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: 45,
              height: 30,
              borderWidth: 1,
              borderColor: "blue",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>•</Text>
          </View>

          <Text>Giỏ hàng</Text>
        </View>

        {/* Tài khoản */}
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: 45,
              height: 30,
              borderWidth: 1,
              borderColor: "blue",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>•</Text>
          </View>

          <Text>Tài khoản</Text>
        </View>

      </View>

    </View>
  );
}