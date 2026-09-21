import { View, Text } from "react-native";
import { useState } from "react";

interface Todo {
  id: string;
  title: string;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "Học React Native" },
    { id: "2", title: "Làm bài tập" },
    { id: "3", title: "Nấu cơm" },
  ]);

  return (
    <View>
      <Text>Danh sách việc cần làm:</Text>

      {todos.map((item) => (
        <Text key={item.id}>- {item.title}</Text>
      ))}
    </View>
  );
}
