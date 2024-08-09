import { StyleSheet, Text, View, TextInput, Image } from "react-native";

export default function SearchField() {
  return (
    <View style={{ flex: 1, position: "relative" }}>
      <View
        style={{
          position: "absolute",
          top: "30%",
          left: 20,
        }}
      >
        <Image source={require("@/assets/images/search.png")} />
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="Search"
        placeholderTextColor="#B3B3B3"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 8,
    borderColor: "#B3B3B3",
    borderWidth: 1,
    borderStyle: "solid",
    width: "100%",
    paddingVertical: 10,
    paddingRight: 16,
    paddingLeft: 48,
    height: 54,
    color: "black",
  },
});
