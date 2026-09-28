import React from "react";
import { SafeAreaView, View, Text, ScrollView } from "react-native";

import Bai1_Header from "./Bai1_Header";
import Bai3_CategoryChips from "./Bai3_CategoryChips";
import Bai4_BookGrid from "./Bai4_BookGrid";

export default function Bai7_HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>

      {/* Header cố định */}
      <Bai1_Header />

      {/* Nội dung có thể cuộn */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 80 }}
      >

        <Bai3_CategoryChips />

        <Bai4_BookGrid />

      </ScrollView>

      {/* Nút giỏ hàng */}
      <View
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: "blue",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 9 }}>
          Giỏ hàng
        </Text>

        {/* Số sản phẩm */}
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

    </SafeAreaView>
  );
}