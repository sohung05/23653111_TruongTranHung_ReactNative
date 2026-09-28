import React from "react";
import { View, ScrollView } from "react-native";

import Bai1_Header from "../components/Bai1_Header";
import Bai2_BookCard from "../components/Bai2_BookCard";

export default function Challenge1_Gio1() {
  return (
    <View style={{ flex: 1 }}>
      <Bai1_Header />

      <View style={{ flex: 1 }}>
        <ScrollView>
          <Bai2_BookCard />
          <Bai2_BookCard />
          <Bai2_BookCard />
          <Bai2_BookCard />
          <Bai2_BookCard />
        </ScrollView>
      </View>
    </View>
  );
}