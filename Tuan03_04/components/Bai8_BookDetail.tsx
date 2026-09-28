import React from "react";
import { SafeAreaView, View, Text, ScrollView } from "react-native";

export default function Bai8_BookDetail() {
  return (
    <SafeAreaView style={{ flex: 1 }}>

      {/* Phần nội dung */}
      <ScrollView style={{ flex: 1 }}>

        {/* Ảnh sách */}
        <View
          style={{
            height: 150,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 100,
              height: 120,
              backgroundColor: "lightgray",
              borderWidth: 1,
              borderColor: "blue",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Ảnh sách</Text>
          </View>
        </View>

        {/* Thông tin sách */}
        <View
          style={{
            margin: 10,
            borderWidth: 2,
            borderColor: "blue",
            padding: 10,
          }}
        >

          {/* Tên sách */}
          <View
            style={{
              height: 30,
              borderWidth: 1,
              borderColor: "blue",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 10,
            }}
          >
            <Text>Tên sách</Text>
          </View>

          {/* Tác giả + giá */}
          <View
            style={{
              width: 150,
              height: 30,
              borderWidth: 1,
              borderColor: "green",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 10,
            }}
          >
            <Text>Tác giả - Giá</Text>
          </View>

          {/* Mô tả */}
          <View
            style={{
              height: 30,
              borderWidth: 1,
              borderColor: "gray",
              marginBottom: 8,
            }}
          />

          <View
            style={{
              height: 30,
              borderWidth: 1,
              borderColor: "gray",
              marginBottom: 8,
            }}
          />

          <View
            style={{
              height: 30,
              borderWidth: 1,
              borderColor: "gray",
              marginBottom: 8,
            }}
          />

          <View
            style={{
              height: 30,
              borderWidth: 1,
              borderColor: "gray",
            }}
          />

        </View>

      </ScrollView>

      {/* Nút thêm vào giỏ */}
      <View
        style={{
          height: 55,
          borderWidth: 2,
          borderColor: "blue",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Thêm vào giỏ</Text>
      </View>

    </SafeAreaView>
  );
}