import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { PRODUCT_PAGE_API } from "./api";

type Product = {
  id: number;
  title: string;
  price: number;
};

interface ApiResponse<T> {
  data: T[];
  total: number;
  page: number;
}

type ProductResponse = {
  products: Product[];
  total: number;
};

export default function Bai14_Pagination() {
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);

  const getProducts = async () => {
    const response = await fetch(
      `${PRODUCT_PAGE_API}?limit=10&skip=0`
    );

    const data = await response.json();

    const result: ApiResponse<Product> = {
      data: (data as ProductResponse).products,
      total: (data as ProductResponse).total,
      page: 1,
    };

    setProducts(result.data);
    setTotal(result.total);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>
        Bài 14 - Pagination
      </Text>

      <Text style={{ marginTop: 15 }}>
        Tổng sản phẩm: {total}
      </Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={{ marginTop: 15 }}>
            {item.id}. {item.title}
          </Text>
        )}
      />
    </View>
  );
}