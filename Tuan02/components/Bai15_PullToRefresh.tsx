import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";

import { PRODUCT_PAGE_API } from "./api";

type Product = {
  id: number;
  title: string;
  price: number;
};

type ProductResponse = {
  products: Product[];
};

export default function Bai15_PullToRefresh() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const getProducts = async () => {
    const response = await fetch(
      `${PRODUCT_PAGE_API}?limit=10&skip=0`
    );

    const data = await response.json();

    setProducts((data as ProductResponse).products);
  };

  useEffect(() => {
    getProducts().finally(() => {
      setLoading(false);
    });
  }, []);

  const refreshData = async () => {
    setRefreshing(true);

    await getProducts();

    setRefreshing(false);
  };

  if (loading) {
    return (
      <View style={{ padding: 20 }}>
        <ActivityIndicator size="large" />

        <Text style={{ marginTop: 10 }}>
          Đang tải dữ liệu...
        </Text>
      </View>
    );
  }

  return (
    <View style={{ padding: 20, flex: 1 }}>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>
        Bài 15 - Pull To Refresh
      </Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        refreshing={refreshing}
        onRefresh={refreshData}
        renderItem={({ item }) => (
          <Text style={{ marginTop: 15 }}>
            {item.title} - ${item.price}
          </Text>
        )}
      />
    </View>
  );
}