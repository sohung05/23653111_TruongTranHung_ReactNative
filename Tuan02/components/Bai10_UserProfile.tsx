import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { USER_API } from "./api";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export default function Bai10_UserProfile() {
  const [user, setUser] = useState<User | null>(null);

  const getUser = async () => {
    const response = await fetch(USER_API);
    const data = await response.json();

    setUser(data as User);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>
        Bài 10 - User Profile
      </Text>

      <Text style={{ marginTop: 20 }}>
        Tên: {user?.name}
      </Text>

      <Text>
        Username: {user?.username}
      </Text>

      <Text>
        Email: {user?.email}
      </Text>
    </View>
  );
}