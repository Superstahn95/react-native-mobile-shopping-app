import { StyleSheet, Text, View } from "react-native";
import LogoText from "@/components/logoText/LogoText";
import Button from "@/components/button/Button";

export default function SignupSuccessScreen() {
  return (
    <View style={styles.container}>
      <View>
        <LogoText fontSize={24} />
      </View>
      <View>
        <Text>Kel, Your account has been created!</Text>
        <Text>You'll be redirected in 5 seconds</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Button
          title="Get started"
          onPress={() => console.log("redirect now")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
