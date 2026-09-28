import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function BookCard({ book, navigation }: any) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("BookDetail", {
          bookId: book.id,
        })
      }
    >

      <View
        style={{
          height: 100,
          borderWidth: 1,
          borderColor: "blue",
          margin: 5,
          padding: 10,
          flexDirection: "row",
        }}
      >

        {/* Ảnh */}
        <View
          style={{
            width: 60,
            height: 75,
            backgroundColor: "lightgray",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Ảnh</Text>
        </View>

        {/* Thông tin */}
        <View
          style={{
            marginLeft: 10,
          }}
        >
          <Text>{book.name}</Text>

          <Text>
            {book.price} đ
          </Text>
        </View>

      </View>

    </TouchableOpacity>
  );
}