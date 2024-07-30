import { StyleSheet, Text, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { ReactNode } from "react";

type LogoTextProps = {
  fontSize?: number;
  children?: ReactNode;
};

export default function LogoText({ fontSize = 24, children }: LogoTextProps) {
  return (
    <Text style={[styles.text, { fontSize }]}>
      Kick<Text style={styles.coloredText}>Hub{children}</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    color: Colors.secondary,
  },
  coloredText: {
    color: Colors.primary,
  },
});
