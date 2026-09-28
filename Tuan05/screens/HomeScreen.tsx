import React from "react";
import { View, Text, ScrollView } from "react-native";
import BookCard from "../components/BookCard";

export default function HomeScreen({ navigation }: any) {
  const books = [
    {
      id: 1,
      name: "Lập trình Java",
      price: 100000,
    },
    {
      id: 2,
      name: "React Native cơ bản",
      price: 120000,
    },
    {
      id: 3,
      name: "TypeScript cơ bản",
      price: 90000,
    },
    {
      id: 4,
      name: "Lập trình Python",
      price: 110000,
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 60,
          borderWidth: 2,
          borderColor: "blue",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>BookStore</Text>
      </View>

      <ScrollView>
        <Text
          style={{
            fontSize: 20,
            margin: 10,
          }}
        >
          Danh sách sách
        </Text>

        <BookCard book={books[0]} navigation={navigation} />
        <BookCard book={books[1]} navigation={navigation} />
        <BookCard book={books[2]} navigation={navigation} />
        <BookCard book={books[3]} navigation={navigation} />
      </ScrollView>
    </View>
  );
}