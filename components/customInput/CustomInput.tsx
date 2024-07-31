import { StyleSheet, Text, View, TextInput } from "react-native";
import { Colors } from "@/constants/Colors";

//add means to handle state from parent component by typing into the form
type CustomInputProps = {
  label: string;
  placeholder?: string;
  isRequired: boolean;
};

export default function CustomInput({
  label,
  placeholder,
  isRequired,
}: CustomInputProps) {
  return (
    <View>
      <Text style={styles.label}>
        {label} {isRequired && <Text style={styles.requiredText}>*</Text>}
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder ? placeholder : ""}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: "#696969",
    marginBottom: 5,
  },
  requiredText: {
    color: Colors.primary,
  },
  textInput: {
    borderRadius: 8,
    borderColor: "#B3B3B3",
    borderWidth: 1,
    borderStyle: "solid",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 16,
    height: 54,
  },
});
