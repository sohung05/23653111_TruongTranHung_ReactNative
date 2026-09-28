import React from "react";
import { View, Text } from "react-native";

export default function Bai3_CategoryChips() {
  return (
    <View style={{ padding: 20 }}>

      <Text style={{ textAlign: "center", marginBottom: 10 }}>
        Category Chips
      </Text>

      <View
        style={{
          width: 310,
          borderWidth: 2,
          borderColor: "blue",
          borderStyle: "dashed",
          padding: 15,
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 8,
        }}
      >

        {/* Văn học */}
        <View
          style={{
            width: 75,
            height: 30,
            borderWidth: 1,
            borderColor: "blue",
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Văn học</Text>
        </View>

        {/* Kinh tế */}
        <View
          style={{
            width: 75,
            height: 30,
            borderWidth: 1,
            borderColor: "blue",
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Kinh tế</Text>
        </View>

        {/* Thiếu nhi */}
        <View
          style={{
            width: 75,
            height: 30,
            borderWidth: 1,
            borderColor: "blue",
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Thiếu nhi</Text>
        </View>

        {/* Truyện tranh */}
        <View
          style={{
            width: 75,
            height: 30,
            borderWidth: 1,
            borderColor: "blue",
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Truyện tranh</Text>
        </View>

        {/* Ngoại ngữ */}
        <View
          style={{
            width: 75,
            height: 30,
            borderWidth: 1,
            borderColor: "blue",
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Ngoại ngữ</Text>
        </View>

        {/* Lịch sử */}
        <View
          style={{
            width: 75,
            height: 30,
            borderWidth: 1,
            borderColor: "blue",
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Lịch sử</Text>
        </View>

      </View>
    </View>
  );
}