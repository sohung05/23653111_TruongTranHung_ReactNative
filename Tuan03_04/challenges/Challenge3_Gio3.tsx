import React from "react";
import { View, Text } from "react-native";

export default function Challenge3_Gio3() {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        position: "relative",
      }}
    >

      <Text style={{ textAlign: "center", marginBottom: 10 }}>
        Book Grid + Badge
      </Text>

      {/* Khung lưới */}
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

          {/* Ảnh + Badge */}
          <View
            style={{
              height: 90,
              backgroundColor: "lightgray",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Text>Ảnh</Text>

            <View
              style={{
                position: "absolute",
                top: 5,
                left: 5,
                backgroundColor: "red",
                padding: 5,
              }}
            >
              <Text style={{ color: "white", fontSize: 10 }}>
                -20%
              </Text>
            </View>
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
              position: "relative",
            }}
          >
            <Text>Ảnh</Text>

            <View
              style={{
                position: "absolute",
                top: 5,
                left: 5,
                backgroundColor: "red",
                padding: 5,
              }}
            >
              <Text style={{ color: "white", fontSize: 10 }}>
                -20%
              </Text>
            </View>
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
              position: "relative",
            }}
          >
            <Text>Ảnh</Text>

            <View
              style={{
                position: "absolute",
                top: 5,
                left: 5,
                backgroundColor: "red",
                padding: 5,
              }}
            >
              <Text style={{ color: "white", fontSize: 10 }}>
                -20%
              </Text>
            </View>
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
              position: "relative",
            }}
          >
            <Text>Ảnh</Text>

            <View
              style={{
                position: "absolute",
                top: 5,
                left: 5,
                backgroundColor: "red",
                padding: 5,
              }}
            >
              <Text style={{ color: "white", fontSize: 10 }}>
                -20%
              </Text>
            </View>
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


        {/* Sách 5 */}
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
              position: "relative",
            }}
          >
            <Text>Ảnh</Text>

            <View
              style={{
                position: "absolute",
                top: 5,
                left: 5,
                backgroundColor: "red",
                padding: 5,
              }}
            >
              <Text style={{ color: "white", fontSize: 10 }}>
                -20%
              </Text>
            </View>
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


        {/* Sách 6 */}
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
              position: "relative",
            }}
          >
            <Text>Ảnh</Text>

            <View
              style={{
                position: "absolute",
                top: 5,
                left: 5,
                backgroundColor: "red",
                padding: 5,
              }}
            >
              <Text style={{ color: "white", fontSize: 10 }}>
                -20%
              </Text>
            </View>
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


      {/* Nút giỏ hàng nổi */}
      <View
        style={{
          position: "absolute",
          bottom: 24,
          right: 20,
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: "blue",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 9 }}>
          Giỏ hàng
        </Text>

        {/* Số sản phẩm */}
        <View
          style={{
            position: "absolute",
            top: -5,
            right: -5,
            width: 20,
            height: 20,
            borderRadius: 10,
            backgroundColor: "red",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 12 }}>
            4
          </Text>
        </View>

      </View>

    </View>
  );
}