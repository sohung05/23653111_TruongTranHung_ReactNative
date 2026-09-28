import React from "react";
import { View, Text } from "react-native";

export default function Challenge2_Gio2() {
  return (
    <View style={{ padding: 20 }}>

      <Text style={{ textAlign: "center", marginBottom: 10 }}>
        Book Grid 3 cột
      </Text>

      {/* Khung ngoài */}
      <View
        style={{
          width: 400,
          borderWidth: 2,
          borderColor: "blue",
          borderStyle: "dashed",
          padding: 10,
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 10,
        }}
      >

        {/* Sách 1 */}
        <View
          style={{
            width: 120,
            height: 150,
            borderWidth: 1,
            borderColor: "blue",
            padding: 8,
          }}
        >
          <View
            style={{
              height: 90,
              backgroundColor: "lightgray",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Ảnh</Text>
          </View>

          <View
            style={{
              height: 25,
              borderWidth: 1,
              borderColor: "green",
              marginTop: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Tên - Giá</Text>
          </View>
        </View>

        {/* Sách 2 */}
        <View
          style={{
            width: 120,
            height: 150,
            borderWidth: 1,
            borderColor: "blue",
            padding: 8,
          }}
        >
          <View
            style={{
              height: 90,
              backgroundColor: "lightgray",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Ảnh</Text>
          </View>

          <View
            style={{
              height: 25,
              borderWidth: 1,
              borderColor: "green",
              marginTop: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Tên - Giá</Text>
          </View>
        </View>

        {/* Sách 3 */}
        <View
          style={{
            width: 120,
            height: 150,
            borderWidth: 1,
            borderColor: "blue",
            padding: 8,
          }}
        >
          <View
            style={{
              height: 90,
              backgroundColor: "lightgray",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Ảnh</Text>
          </View>

          <View
            style={{
              height: 25,
              borderWidth: 1,
              borderColor: "green",
              marginTop: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Tên - Giá</Text>
          </View>
        </View>

        {/* Sách 4 */}
        <View
          style={{
            width: 120,
            height: 150,
            borderWidth: 1,
            borderColor: "blue",
            padding: 8,
          }}
        >
          <View
            style={{
              height: 90,
              backgroundColor: "lightgray",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Ảnh</Text>
          </View>

          <View
            style={{
              height: 25,
              borderWidth: 1,
              borderColor: "green",
              marginTop: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Tên - Giá</Text>
          </View>
        </View>

      </View>
    </View>
  );
}