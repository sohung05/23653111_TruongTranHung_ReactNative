import { View, Text } from "react-native";

import UserCard from "./components/Bai1_UserCard";
import Counter from "./components/Bai2_Counter";
import TodoList from "./components/Bai3_TodoList";
import MyButton from "./components/Bai4_MyButton";
import LiveInput from "./components/Bai5_LiveInput";
import LoadingContainer from "./components/Bai6_LoadingContainer";
import GenderSelector from "./components/Bai7_GenderSelector";
import AppButton from "./components/Bai8_AppButton";
import BookListWithLoading from "./components/Bai9_HOC";
import BookCard from "./components/Bai10_BookCard";

export default function App() {

  // ===== BÀI 1 =====
  // return (
  //   <UserCard
  //     name="Truong Hung"
  //     age={21}
  //     isAdmin={true}
  //   />
  // );

  // ===== BÀI 2 =====
  // return <Counter />;

  // ===== BÀI 3 =====
  // return <TodoList />;

  // ===== BÀI 4 =====
  // return (
  //   <MyButton
  //     label="Bấm vào đây"
  //     onPress={() => {}}
  //   />
  // );

  // ===== BÀI 5 =====
  // return <LiveInput />;

  // ===== BÀI 6 =====
  // return (
  //   <LoadingContainer isLoading={false}>
  //     <Text>Dữ liệu đã tải xong!</Text>
  //   </LoadingContainer>
  // );

  // ===== BÀI 7 =====
  // return <GenderSelector />;

  // ===== BÀI 8 =====
  // return (
  //   <View style={{ padding: 20 }}>
  //     <AppButton
  //       title="Thêm vào giỏ hàng"
  //       variant="primary"
  //       size="medium"
  //       onPress={() => {}}
  //     />

  //     <AppButton
  //       title="Xem chi tiết"
  //       variant="outline"
  //       size="medium"
  //       onPress={() => {}}
  //     />

  //     <AppButton
  //       title="Xóa sách"
  //       variant="danger"
  //       size="small"
  //       onPress={() => {}}
  //     />
  //   </View>
  // );

  // ===== BÀI 9 =====
  // return (
  //   <BookListWithLoading
  //     isLoading={false}
  //     isError={false}
  //     errorMessage=""
  //   />
  // );

  // ===== BÀI 10 =====
  return (
    <View style={{ padding: 20 }}>
      <BookCard
        book={{
          title: "React Native",
          price: 150000,
          image: "https://via.placeholder.com/100",
        }}
      >
        <BookCard.Cover />
        <BookCard.Title />
        <BookCard.Price />
        <BookCard.FavoriteButton />
      </BookCard>
    </View>
  );
}