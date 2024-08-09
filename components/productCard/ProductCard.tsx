import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

type CardProps = {
  image: string;
  gender: string;
  price: number;
  description: string;
  name: string;
  index: number;
};

export default function ProductCard({
  description,
  gender,
  image,
  name,
  price,
  index,
}: CardProps) {
  let shoeText: string;
  if (gender.toLowerCase() === "men") {
    shoeText = "men's shoes";
  } else if (gender.toLowerCase() == "women") {
    shoeText = "women's shoes";
  } else {
    shoeText = "unisex";
  }
  //
  return (
    <TouchableOpacity
      style={[
        styles.card,
        index % 2 === 0 ? { marginRight: 5 } : { marginLeft: 5 },
      ]}
    >
      <View style={styles.cartHighlight}>
        <Image source={require("@/assets/images/cart.png")} />
      </View>
      {/* image view */}
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          //   backgroundColor: "red",
          //   marginTop: 40,
          //   height: 300,
        }}
      >
        <Image
          style={{
            width: 200,
            height: 200,
            marginRight: 30,
            objectFit: "contain",
            transform: [{ rotateZ: "-30deg" }],
          }}
          source={require("@/assets/images/sneakers2.png")}
        />
      </View>
      <Text
        style={{ color: "#696969", fontSize: 14, textTransform: "capitalize" }}
      >
        {shoeText}
      </Text>
      <Text
        style={{
          color: "#696969",
          fontSize: 12,
          textTransform: "capitalize",
          fontWeight: "bold",
        }}
      >
        {name}
      </Text>
      <Text
        style={{
          color: Colors.primary,
          fontSize: 16,
          textTransform: "capitalize",
          marginTop: 10,
        }}
      >
        {price}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    position: "relative",
    width: "49%",
    // overflow: "hidden",
    padding: 12,
    // margin: 5,
  },
  cartHighlight: {
    width: 35,
    height: 33,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    // backgroundColor: "green",
    backgroundColor: "#F0F0F0",
    right: 10,
    top: 10,
    zIndex: 99,
  },
});
