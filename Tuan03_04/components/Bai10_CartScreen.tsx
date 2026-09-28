import React from "react";
import { View, Text, ScrollView } from "react-native";

export default function Bai10_CartScreen() {
  return (
    <View
      style={{
        flex: 1,
        position: "relative",
      }}
    >

      {/* Danh sách sản phẩm */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 180 }}
      >

        {/* Sản phẩm 1 */}
        <View
          style={{
            height: 70,
            borderWidth: 1,
            borderColor: "blue",
            margin: 5,
            padding: 8,
            flexDirection: "row",
            alignItems: "center",
          }}
        >

          <View
            style={{
              width: 35,
              height: 45,
              backgroundColor: "lightgray",
              borderWidth: 1,
              borderColor: "blue",
            }}
          />

          <View
            style={{
              flex: 1,
              marginLeft: 10,
            }}
          >
            <Text>Tên sản phẩm</Text>
            <Text>Số lượng: 1</Text>
            <Text>100.000đ</Text>
          </View>

          <View
            style={{
              width: 55,
              height: 35,
              borderWidth: 1,
              borderColor: "green",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Xóa</Text>
          </View>

        </View>


        {/* Sản phẩm 2 */}
        <View
          style={{
            height: 70,
            borderWidth: 1,
            borderColor: "blue",
            margin: 5,
            padding: 8,
            flexDirection: "row",
            alignItems: "center",
          }}
        >

          <View
            style={{
              width: 35,
              height: 45,
              backgroundColor: "lightgray",
              borderWidth: 1,
              borderColor: "blue",
            }}
          />

          <View
            style={{
              flex: 1,
              marginLeft: 10,
            }}
          >
            <Text>Tên sản phẩm</Text>
            <Text>Số lượng: 2</Text>
            <Text>200.000đ</Text>
          </View>

          <View
            style={{
              width: 55,
              height: 35,
              borderWidth: 1,
              borderColor: "green",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Xóa</Text>
          </View>

        </View>


        {/* Sản phẩm 3 */}
        <View
          style={{
            height: 70,
            borderWidth: 1,
            borderColor: "blue",
            margin: 5,
            padding: 8,
            flexDirection: "row",
            alignItems: "center",
          }}
        >

          <View
            style={{
              width: 35,
              height: 45,
              backgroundColor: "lightgray",
              borderWidth: 1,
              borderColor: "blue",
            }}
          />

          <View
            style={{
              flex: 1,
              marginLeft: 10,
            }}
          >
            <Text>Tên sản phẩm</Text>
            <Text>Số lượng: 1</Text>
            <Text>150.000đ</Text>
          </View>

          <View
            style={{
              width: 55,
              height: 35,
              borderWidth: 1,
              borderColor: "green",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Xóa</Text>
          </View>

        </View>


        {/* Sản phẩm 4 */}
        <View
          style={{
            height: 70,
            borderWidth: 1,
            borderColor: "blue",
            margin: 5,
            padding: 8,
            flexDirection: "row",
            alignItems: "center",
          }}
        >

          <View
            style={{
              width: 35,
              height: 45,
              backgroundColor: "lightgray",
              borderWidth: 1,
              borderColor: "blue",
            }}
          />

          <View
            style={{
              flex: 1,
              marginLeft: 10,
            }}
          >
            <Text>Tên sản phẩm</Text>
            <Text>Số lượng: 1</Text>
            <Text>120.000đ</Text>
          </View>

          <View
            style={{
              width: 55,
              height: 35,
              borderWidth: 1,
              borderColor: "green",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Xóa</Text>
          </View>

        </View>


        {/* Tạm tính */}
        <View
          style={{
            height: 70,
            borderWidth: 2,
            borderColor: "blue",
            margin: 5,
            padding: 10,
          }}
        >
          <Text>Tạm tính: 570.000đ</Text>
          <Text>Phí vận chuyển: 30.000đ</Text>
        </View>


        {/* Thanh toán */}
        <View
          style={{
            height: 70,
            borderWidth: 2,
            borderColor: "blue",
            margin: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Thanh toán: 600.000đ</Text>
        </View>

      </ScrollView>


      {/* Thanh Tab Bar */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 65,
          backgroundColor: "white",
          borderWidth: 2,
          borderColor: "blue",
          flexDirection: "row",
        }}
      >

        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Trang chủ</Text>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Danh mục</Text>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Giỏ hàng</Text>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Tài khoản</Text>
        </View>

      </View>

    </View>
  );
}