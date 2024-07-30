import { StyleSheet, Text, View } from "react-native";
import { Colors } from "@/constants/Colors";

export default function explore() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white", fontSize: 50 }}>explore</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});
