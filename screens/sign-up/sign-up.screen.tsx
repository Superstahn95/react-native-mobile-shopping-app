import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { router } from "expo-router";
import LogoText from "@/components/logoText/LogoText";
import CustomInput from "@/components/customInput/CustomInput";
import Button from "@/components/button/Button";
import ViewWrapper from "@/components/viewWrapper/ViewWrapper";
import ColoredText from "@/components/text/ColoredText";

export default function SignUpScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ marginVertical: 50 }}>
          <Text style={styles.directionText}>
            Type your e-mail or phone number to create an account with{" "}
            <LogoText />{" "}
          </Text>
        </View>
        <ViewWrapper>
          <CustomInput label="Email Address" isRequired={true} />
        </ViewWrapper>

        <ViewWrapper>
          <View style={{ marginVertical: 72 }}>
            <Button
              title="sign up"
              onPress={() => router.push("/(routes)/verify-email")}
              isFilled
            />
            <Text style={styles.terms}>
              By signing up you agree to <LogoText fontSize={16}>'s</LogoText>{" "}
            </Text>
            {/* <Text style={styles.terms}>Terms and Conditions</Text> */}
            <ColoredText text="Terms and Conditions" fontSize={16} isRuled />
          </View>
        </ViewWrapper>

        <ViewWrapper grow>
          <Button
            title="sign in with google"
            onPress={() => console.log("google sign in")}
          />
          <Button
            title="sign in with apple"
            onPress={() => console.log("apple sign in")}
          />
        </ViewWrapper>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  directionText: {
    fontSize: 20,
    textAlign: "center",
  },
  terms: {
    width: "80%",
    textAlign: "center",
    marginHorizontal: "auto",
  },
});
