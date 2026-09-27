import React from "react";
import { View, Text } from "react-native";

type Product = {
  id: number;
  name: string;
  price: number;
};

type User = {
  id: number;
  name: string;
};

function filterList<T extends { name: string }>(
  list: T[],
  keyword: string
): T[] {
  return list.filter((item) =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );
}

export default function Bai13_FilteredList() {
  const products: Product[] = [
    { id: 1, name: "iPhone", price: 1000 },
    { id: 2, name: "Samsung", price: 800 },
    { id: 3, name: "Laptop", price: 1200 },
  ];

  const users: User[] = [
    { id: 1, name: "Hung" },
    { id: 2, name: "Nam" },
    { id: 3, name: "An" },
  ];

  const productResult = filterList(products, "phone");
  const userResult = filterList(users, "an");

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>
        Bài 13 - Filter Generic
      </Text>

      <Text style={{ marginTop: 20 }}>
        Sản phẩm:
      </Text>

      {productResult.map((item) => (
        <Text key={item.id}>
          {item.name}
        </Text>
      ))}

      <Text style={{ marginTop: 20 }}>
        Người dùng:
      </Text>

      {userResult.map((item) => (
        <Text key={item.id}>
          {item.name}
        </Text>
      ))}
    </View>
  );
}