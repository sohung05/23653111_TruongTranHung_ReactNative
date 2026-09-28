import React from "react";
import { View, Text } from "react-native";

export default function BookDetailScreen({ route }: any) {

  const bookId = route.params.bookId;

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
      }}
    >

      <Text style={{ fontSize: 20 }}>
        Chi tiết sách
      </Text>

      <View
        style={{
          width: 120,
          height: 150,
          backgroundColor: "lightgray",
          marginTop: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Ảnh sách</Text>
      </View>

      <Text style={{ marginTop: 20 }}>
        Mã sách: {bookId}
      </Text>

      <Text>
        Tên sách: Lập trình React Native
      </Text>

      <Text>
        Giá: 120000 đ
      </Text>

    </View>
  );
}