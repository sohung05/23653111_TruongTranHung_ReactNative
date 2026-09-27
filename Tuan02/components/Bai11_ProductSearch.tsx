import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";
import { PRODUCT_SEARCH_API } from "./api";

type Product = {
  id: number;
  title: string;
  price: number;
};

type ProductResponse = {
  products: Product[];
};

export default function Bai11_ProductSearch() {
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async (keyword: string, limit: number) => {
    const response = await fetch(
      `${PRODUCT_SEARCH_API}?q=${keyword}&limit=${limit}`
    );

    const data = await response.json();

    setProducts((data as ProductResponse).products);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>
        Bài 11 - Tìm sản phẩm
      </Text>

      <TextInput
        placeholder="Nhập tên sản phẩm"
        value={keyword}
        onChangeText={setKeyword}
        style={{
          borderWidth: 1,
          padding: 10,
          marginTop: 20,
          marginBottom: 10,
        }}
      />

      <Button
        title="Tìm kiếm"
        onPress={() => fetchProducts(keyword, 10)}
      />

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={{ marginTop: 15 }}>
            {item.title} - ${item.price}
          </Text>
        )}
      />
    </View>
  );
}