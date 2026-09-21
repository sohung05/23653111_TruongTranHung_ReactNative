import { View, ActivityIndicator } from "react-native";
import React from "react";

interface LoadingContainerProps {
  isLoading: boolean;
  children: React.ReactNode;
}

export default function LoadingContainer({
  isLoading,
  children,
}: LoadingContainerProps) {
  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <View>{children}</View>;
}