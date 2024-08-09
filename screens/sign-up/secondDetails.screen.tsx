import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import { useState } from "react";
import axios from "axios";
import { router, useLocalSearchParams } from "expo-router";
import CustomInput from "@/components/customInput/CustomInput";
import Button from "@/components/button/Button";
import ColoredText from "@/components/text/ColoredText";

const { height } = Dimensions.get("window");

export default function SecondDetailsScreen() {
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);
  const { email, firstName, lastName, mobileNumber, userName } =
    useLocalSearchParams();
  const handleRegistration = async () => {
    const registerData = {
      email,
      firstName,
      lastName,
      mobileNumber,
      userName,
      password,
      gender,
    };
    setLoading(true);
    try {
      // const {data} = await axios.post("http://172.20.10.5:8080/api/v1/auth/register", registerData)
      // console.log(data)
      router.push("/(routes)/sign-up/success");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flexGrow: 1, width: "100%" }}>
        <View style={styles.container}>
          <Text style={styles.detailsIntro}>
            We just need you to fill in some details.
          </Text>
          <View style={{ width: "90%" }}>
            {/* replace this with another field */}
            <CustomInput
              label="Gender"
              isRequired={true}
              placeholder="Male"
              setValue={setGender}
            />
            {/* <CustomInput
              label="Date of Birth"
              isRequired={true}
              placeholder="March 19, 2024"
            /> */}
            <CustomInput
              label="Password"
              isRequired={true}
              placeholder="March 19, 2024"
              setValue={setPassword}
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
