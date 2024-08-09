import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import { SetStateAction, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import PhoneInput from "react-native-phone-input";
import CustomInput from "@/components/customInput/CustomInput";
import CustomDropDown from "@/components/customDropdown/CustomDropDown";
import Button from "@/components/button/Button";

const { height } = Dimensions.get("window");

export default function PersonalDetailsScreen() {
  const [detailsScreenNumber, setDetailsScreenNumber] = useState<number>(1);
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const { email } = useLocalSearchParams();
  const goToNextScreen = () => {
    //figure out a way to send back error message if any of the fields are missing
    router.push({
      pathname: "/(routes)/personal-details/second",
      params: {
        email,
        mobileNumber,
        firstName,
        lastName,
        userName,
      },
    });
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
              label="First name"
              isRequired={true}
              placeholder="Enter first name"
              setValue={setFirstName}
            />
            <CustomInput
              label="Last name"
              isRequired={true}
              placeholder="Enter last name"
              setValue={setLastName}
            />

            <CustomInput
              label="Username"
              isRequired={true}
              placeholder="Enter username"
              setValue={setUserName}
            />

            <View style={{ width: "100%", marginTop: 16 }}>
              <Text style={styles.mobileFieldLabel}>Mobile number</Text>
              <PhoneInput
                style={styles.mobileField}
                initialCountry="us"
                onChangePhoneNumber={(value) => setMobileNumber(value)}
              />
            </View>
            <View style={{ marginTop: 48 }}>
              <Button title="Continue" isFilled onPress={goToNextScreen} />
            </View>
            <Text style={{ ...styles.detailsIntro, textAlign: "center" }}>
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
  mobileFieldLabel: {
    fontSize: 16,
    color: "#696969",
    marginBottom: 5,
  },
  mobileField: {
    borderRadius: 8,
    borderColor: "#B3B3B3",
    borderWidth: 1,
    borderStyle: "solid",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 16,
    height: 54,
    color: "black",
  },
});
