import { View, Text } from "react-native";

interface UserCardProps {
  name: string;
  age: number;
  isAdmin: boolean;
}

export default function UserCard({ name, age, isAdmin }: UserCardProps) {
  return (
    <View>
      <Text>Tên: {name}</Text>
      <Text>Tuổi: {age}</Text>

      {isAdmin ? (
        <Text>Quyền: Admin</Text>
      ) : (
        <Text>Quyền: Thành viên</Text>
      )}
    </View>
  );
}