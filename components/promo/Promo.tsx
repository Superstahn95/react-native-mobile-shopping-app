import { StyleSheet, Text, View } from "react-native";
import { Colors } from "@/constants/Colors";

export default function Promo() {
  return <View style={styles.promoContainer}></View>;
}

const styles = StyleSheet.create({
  promoContainer: {
    height: 190,
    borderColor: Colors.primary,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 12,
    marginVertical: 19,
  },
});
