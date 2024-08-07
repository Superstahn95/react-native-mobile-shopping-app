import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import { router } from "expo-router";
import CustomInput from "@/components/customInput/CustomInput";
import Button from "@/components/button/Button";
import ColoredText from "@/components/text/ColoredText";

const { height } = Dimensions.get("window");

export default function SecondDetailsScreen() {
  const handleRegistration = () => {
    console.log("send data to backend");
    router.push("/(routes)/sign-up/success");
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flexGrow: 1, width: "100%" }}>
        <View style={styles.container}>
          <Text style={styles.detailsIntro}>
            We just need you to fill in some details.
          </Text>
          <View style={{ width: "90%" }}>
            <CustomInput
              label="Gender"
              isRequired={true}
              placeholder="Enter first name"
            />
            <CustomInput
              label="Date of Birth"
              isRequired={true}
              placeholder="March 19, 2024"
            />
            <View style={{ marginTop: 48 }}>
              <Button
                title="Continue"
                isFilled
                onPress={() => handleRegistration()}
              />
            </View>
            {/* terms and conditions */}
            <View style={styles.termsWrapper}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 20,
                  borderColor: "#7E7E7E",
                  borderWidth: 1,
                  borderStyle: "solid",
                }}
              ></View>
              <Text
                style={{
                  //   textAlign: "center",
                  fontSize: 14,
                  color: "#7E7E7E",
                  //   flex: 1,
                  marginLeft: 5,
                }}
              >
                I read and consented to the{" "}
                <ColoredText text="Terms and Conditions" fontSize={14} />{" "}
              </Text>
            </View>
            <Text
              style={{
                textAlign: "center",
                fontSize: 14,
                color: "#7E7E7E",
                paddingHorizontal: 5,
                marginTop: 10,
              }}
            >
              For further support, you may visit the Help Center or contact our
              customer service team.
            </Text>
          </View>
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
  detailsIntro: {
    marginVertical: 20,
    color: "#797979",
  },
  termsWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
});
