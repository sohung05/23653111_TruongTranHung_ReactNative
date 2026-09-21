import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

type Variant = "primary" | "secondary" | "outline" | "danger";
type Size = "small" | "medium" | "large";

interface AppButtonProps {
  title: string;
  variant: Variant;
  size: Size;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

export default function AppButton({
  title,
  variant,
  size,
  onPress,
  disabled = false,
  loading = false,
  icon,
}: AppButtonProps) {

  const variantStyle = {
    primary: {
      backgroundColor: "blue",
    },
    secondary: {
      backgroundColor: "gray",
    },
    outline: {
      backgroundColor: "white",
    },
    danger: {
      backgroundColor: "red",
    },
  };

  const sizeStyle = {
    small: {
      padding: 8,
    },
    medium: {
      padding: 12,
    },
    large: {
      padding: 16,
    },
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        variantStyle[variant],
        sizeStyle[size],
      ]}
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View>
          {icon}
          <Text>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}