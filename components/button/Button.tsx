import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";

type ButtonProps = {
  title: string;
  isFilled?: boolean;
  onPress: () => void;
};
export default function Button({
  title,
  onPress,
  isFilled = false,
}: ButtonProps) {
  const backgroundColor = isFilled ? Colors.primary : "transparent";
  const textColor = isFilled ? "white" : Colors.primary;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonContainer, { backgroundColor }]}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 54, //make this responsive
    width: "100%",
    borderRadius: 8,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 13,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "semibold",
    textTransform: "capitalize",
  },
});
