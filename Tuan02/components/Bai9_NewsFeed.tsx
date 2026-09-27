import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { TODO_API } from "./api";

type Post = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function Bai9_NewsFeed() {
  const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = async () => {
    const response = await fetch(TODO_API);
    const data = await response.json();

    setPosts(data as Post[]);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>
        Bài 9 - News Feed
      </Text>

      <FlatList
        data={posts}
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