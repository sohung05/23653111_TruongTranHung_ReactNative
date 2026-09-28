import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function CustomTabBar({ state, navigation }: any) {
  return (
    <View
      style={{
        height: 70,
        borderWidth: 2,
        borderColor: "blue",
        flexDirection: "row",
      }}
    >

      {/* Trang chủ */}
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("Home")}
      >
        <View
          style={{
            width: 45,
            height: 25,
            borderWidth: 1,
            borderColor: "blue",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>•</Text>
        </View>

        <Text>Trang chủ</Text>
      </TouchableOpacity>


      {/* Danh mục */}
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("Category")}
      >
        <View
          style={{
            width: 45,
            height: 25,
            borderWidth: 1,
            borderColor: "blue",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>•</Text>
        </View>

        <Text>Danh mục</Text>
      </TouchableOpacity>


      {/* Giỏ hàng */}
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("Cart")}
      >
        <View
          style={{
            width: 45,
            height: 25,
            borderWidth: 1,
            borderColor: "blue",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>•</Text>
        </View>

        <Text>Giỏ hàng</Text>
      </TouchableOpacity>


      {/* Tài khoản */}
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("Account")}
      >
        <View
          style={{
            width: 45,
            height: 25,
            borderWidth: 1,
            borderColor: "blue",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>•</Text>
        </View>

        <Text>Tài khoản</Text>
      </TouchableOpacity>

    </View>
  );
}