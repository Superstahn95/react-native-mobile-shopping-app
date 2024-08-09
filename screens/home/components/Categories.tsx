import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { categories } from "@/assets/staticData";
import { Colors } from "@/constants/Colors";
import { useEffect, useState } from "react";

export default function Categories() {
  const [selected, setSelected] = useState<number>(2);
  // code might need to be restructured to suit typescript
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Category</Text>
      <FlatList
        style={{ marginTop: 10 }}
        data={categories}
        ItemSeparatorComponent={() => <View style={{ width: 25 }}></View>}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => setSelected(index)}
            style={[
              styles.categoryButton,
              {
                backgroundColor:
                  selected === index ? Colors.primary : "transparent",
              },
            ]}
          >
            <Text
              style={[
                styles.buttonText,
                { color: selected === index ? "white" : "#7E7E7E" },
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  categoryButton: {
    padding: 8,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 14,
    textTransform: "capitalize",
  },
});
