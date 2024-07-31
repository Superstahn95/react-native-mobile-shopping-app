import { StyleSheet, Text, View, TextInput } from "react-native";
import { useEffect, useRef, useState } from "react";
import { Colors } from "@/constants/Colors";

export default function VerificationCodeField() {
  const [code, setCode] = useState<string[]>(["", "", "", ""]);
  const inputRefs = useRef<TextInput[]>([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    // Enable the button if the OTP array is filled
    if (code.every((digit) => digit !== "")) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [code]);
  //this function handles the putting a new value in the box and moving focus to the next textInput
  const handleOtpChange = (value: string, index: number) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move focus to the next box if the current one has a value
    if (value && index < newCode.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleBackspacePress = (index: number) => {
    // Move focus to the previous box if Backspace is pressed on an empty box
    if (!code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };
  const handleOtpSubmit = () => {
    console.log(code.join("")); // Concatenate the OTP digits and log them
  };

  const handleButtonPress = () => {
    console.log(code.join(""));
  };

  const handleResendCodePress = () => {
    console.log("Resend Code button pressed");
  };

  const handleButtonDisabledPress = () => {
    console.log("Button is disabled");
  };

  const handleDisableButton = () => {
    setIsButtonDisabled(true);
  };

  const handleEnableButton = () => {
    setIsButtonDisabled(false);
  };
  return (
    <View style={styles.container}>
      {code.map((digit, index) => (
        <TextInput
          key={index}
          style={styles.box}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={(value) => handleOtpChange(value, index)}
          value={digit}
          ref={(input) => {
            inputRefs.current[index] = input as TextInput;
          }}
          onSubmitEditing={
            index === code.length - 1 ? handleOtpSubmit : undefined
          }
          onKeyPress={({ nativeEvent: { key } }) =>
            key === "Backspace" ? handleBackspacePress(index) : null
          }
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 20,
  },
  box: {
    borderWidth: 1,
    borderColor: Colors.primary,
    width: 70,
    height: 70,
    margin: 8,
    textAlign: "center",
    fontSize: 20,
    borderRadius: 5,
    borderStyle: "solid",
    padding: 5,
  },
});
