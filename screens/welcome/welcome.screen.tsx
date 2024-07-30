import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";
import Button from "@/components/button/Button";

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Ist item */}
      <View>
        <Text style={styles.welcomeText}>
          Welcome to{" "}
          <Text>
            Kick<Text style={styles.coloredText}>Hub!</Text>
          </Text>
        </Text>
      </View>
      {/* second item */}
      <View>
        <Image source={require("@/assets/images/welcome-sneakers.png")} />
      </View>
      {/* third item */}
      <View>
        <Text>
          Level up your sneaker game! Browse the latest drops, limited editions,
          and top brands - all in the KickHub app
        </Text>
      </View>
      <View style={styles.buttonsWrapper}>
        <Button
          title={"get started"}
          isFilled={true}
          onPress={() => console.log("button clicked")}
        />
        <Button
          title={"sign in"}
          onPress={() => console.log("button clicked")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  welcomeText: {
    marginTop: 40,
    fontWeight: "bold",
    fontSize: 24,
  },
  secondaryText: {
    color: Colors.secondary,
  },
  coloredText: {
    color: Colors.primary,
  },
  buttonsWrapper: {
    width: "90%",
  },
});
