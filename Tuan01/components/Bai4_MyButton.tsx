import { Button } from "react-native";

interface MyButtonProps {
  label: string;
  onPress: () => void;
  color?: string;
}

export default function MyButton({
  label,
  onPress,
  color = "blue",
}: MyButtonProps) {
  return (
    <Button
      title={label}
      onPress={onPress}
      color={color}
    />
  );
}