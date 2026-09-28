import React from "react";
import { View, Text } from "react-native";

export default function Bai2_BookCard() {
  return (
    <View style={{ padding: 20 }}>

      <Text style={{ textAlign: "center", marginBottom: 10 }}>
        BookCard
      </Text>

      {/* Khung BookCard */}
      <View
        style={{
          width: 450,
          height: 165,
          borderWidth: 2,
          borderColor: "blue",
          borderStyle: "dashed",
          padding: 15,
          flexDirection: "row",
          alignItems: "flex-start",
        }}
      >

        {/* Ảnh bìa */}
        <View
          style={{
            width: 80,
            height: 110,
            backgroundColor: "lightgray",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Ảnh bìa</Text>
        </View>

        {/* Phần thông tin */}
        <View
          style={{
            flex: 1,
            height: 110,
            marginLeft: 20,
            borderWidth: 1,
            borderColor: "green",
            borderStyle: "dashed",
            padding: 10,
            justifyContent: "space-between",
          }}
        >

          {/* Tên sách */}
          <View
            style={{
              height: 25,
              borderWidth: 1,
              borderColor: "blue",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Tên sách</Text>
          </View>

          {/* Tác giả */}
          <View
            style={{
              width: 210,
              height: 25,
              borderWidth: 1,
              borderColor: "blue",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Tác giả</Text>
          </View>

          {/* Giá */}
          <View
            style={{
              width: 110,
              height: 25,
              borderWidth: 1,
              borderColor: "green",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Giá</Text>
          </View>

        </View>
      </View>
    </View>
  );
}