import { StyleSheet, Text, View, Dimensions } from "react-native";
import LogoText from "@/components/logoText/LogoText";
import Button from "@/components/button/Button";
import ColoredText from "@/components/text/ColoredText";

export default function SignupSuccessScreen() {
  //automatically redirect to home screen

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "space-around",
          flex: 1,
        }}
      >
        <View style={{ marginTop: 110 }}>
          <LogoText fontSize={24} />
        </View>
        <View style={{ marginTop: 65, width: "100%" }}>
          <Text
            style={{
              color: "#202020",
              fontSize: 24,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Kel, Your account has been created!
          </Text>
          <Text
            style={{
              color: "#797979",
              fontSize: 18,
              fontWeight: "bold",
              textAlign: "center",
              marginVertical: 24,
            }}
          >
            You'll be redirected in{" "}
            <ColoredText text=" 5 seconds" fontSize={18} />
          </Text>
        </View>
        <View style={{ flex: 1, width: "90%", margin: 80 }}>
          <Button
            title="Get started"
            onPress={() => console.log("redirect now")}
            isFilled
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
