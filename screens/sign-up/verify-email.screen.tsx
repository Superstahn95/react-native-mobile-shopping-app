import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import { SetStateAction, useState } from "react";
import LogoText from "@/components/logoText/LogoText";
import Button from "@/components/button/Button";
import ViewWrapper from "@/components/viewWrapper/ViewWrapper";
import ColoredText from "@/components/text/ColoredText";
import VerificationCodeField from "@/components/verificationCode/VerificationCodeField";

const { height } = Dimensions.get("window");

export default function VerifyEmailScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flexGrow: 1, width: "100%" }}>
        <View style={styles.container}>
          <View style={{ marginVertical: 70 }}>
            <LogoText fontSize={24} />
          </View>
          <View style={{ marginBottom: 30 }}>
            <Text style={styles.verifyBoldText}>Verify your email address</Text>
            <Text style={styles.verificationText}>
              We have sent a verification code to kel_07@ui.com
            </Text>
          </View>
          <View style={{ width: "90%" }}>
            {/* Otp input should be here */}
            <ViewWrapper>
              <VerificationCodeField />
              <Button
                title="submit"
                onPress={() => console.log("submit")}
                isFilled
              />
            </ViewWrapper>
          </View>
          {/* request for another code sent */}
          <Text style={styles.requestText}>
            Didn't receive the verification code? it could take a bit of time,
            request a new code in <ColoredText text="20 seconds" fontSize={0} />
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height,
    // justifyContent: "space-around",
    alignItems: "center",
  },
  verifyBoldText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 7,
    textAlign: "center",
  },
  verificationText: {
    textAlign: "center",
    fontSize: 20,
    color: "#202020",
  },
  requestText: {
    color: "#696969",
    fontSize: 14,
    textAlign: "center",
    width: "85%",
    // paddingHorizontal: 10,
    marginTop: 30,
    lineHeight: 20,
  },
});
