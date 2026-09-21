import {
  View,
  Text,
  Button,
  ActivityIndicator,
} from "react-native";

interface LoadingProps {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

function ErrorView({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) {
  return (
    <View>
      <Text>{message}</Text>

      <Button
        title="Thử lại"
        onPress={onRetry}
      />
    </View>
  );
}

function BookListScreen() {
  return (
    <View>
      <Text>Danh sách sách</Text>
      <Text>- Lập trình React Native</Text>
      <Text>- Học TypeScript</Text>
    </View>
  );
}

function withLoadingState(
  WrappedComponent: React.ComponentType
) {
  return function NewComponent({
    isLoading,
    isError,
    errorMessage,
  }: LoadingProps) {

    if (isLoading) {
      return <ActivityIndicator size="large" />;
    }

    if (isError) {
      return (
        <ErrorView
          message={errorMessage}
          onRetry={() => alert("Thử lại")}
        />
      );
    }

    return <WrappedComponent />;
  };
}

const BookListWithLoading = withLoadingState(BookListScreen);

export default function App() {
  return (
    <BookListWithLoading
      isLoading={false}
      isError={false}
      errorMessage=""
    />
  );
}