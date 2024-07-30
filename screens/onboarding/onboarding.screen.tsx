import { StyleSheet, Text, View, Alert } from "react-native";
import { useEffect } from "react";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Kick<Text style={styles.coloredText}>Hub</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 48,
    fontWeight: "bold",
    color: Colors.secondary,
  },
  coloredText: {
    color: Colors.primary,
  },
});
