import { StyleSheet, Text } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

type textProps = {
  text: string;
  fontSize: number;
  isRuled?: boolean;
};

export default function ColoredText({
  text,
  fontSize,
  isRuled = false,
}: textProps) {
  return (
    <Text
      style={[
        styles.text,
        { fontSize, textDecorationLine: isRuled ? "underline" : "none" },
      ]}
    >
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: Colors.primary,
    textAlign: "center",
  },
});
