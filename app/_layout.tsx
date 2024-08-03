import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    // <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="check" />
      <Stack.Screen name="explore" />
      <Stack.Screen name="(routes)/welcome/index" />
      <Stack.Screen
        name="(routes)/personal-details/index"
        options={{
          headerShown: true,
          headerTitle: "Personal details",
          headerBackTitleVisible: false,
          headerTintColor: "black",
          header: (props) => {
            return (
              <View
                style={{
                  height: 95,
                  justifyContent: "flex-end",
                  alignItems: "center",
                  position: "relative",
                  backgroundColor: "#F8F8F8",
                }}
              >
                <TouchableOpacity
                  style={{ position: "absolute", bottom: 0, left: 20 }}
                  onPress={() => router.back()}
                >
                  <MaterialIcons
                    name="arrow-back-ios"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
                <Text
                  style={{ fontSize: 24, color: "#202020", fontWeight: "bold" }}
                >
                  Personal Details
                </Text>
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        name="(routes)/personal-details/second"
        options={{
          headerShown: true,
          headerTitle: "Personal details",
          headerBackTitleVisible: false,
          headerTintColor: "black",
          header: (props) => {
            return (
              <View
                style={{
                  height: 95,
                  justifyContent: "flex-end",
                  alignItems: "center",
                  position: "relative",
                  backgroundColor: "#F8F8F8",
                }}
              >
                <TouchableOpacity
                  style={{ position: "absolute", bottom: 0, left: 20 }}
                  onPress={() => router.back()}
                >
                  <MaterialIcons
                    name="arrow-back-ios"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
                <Text
                  style={{ fontSize: 24, color: "#202020", fontWeight: "bold" }}
                >
                  Personal Details
                </Text>
              </View>
            );
          },
        }}
      />
      <Stack.Screen name="(routes)/sign-up/index" />
      <Stack.Screen name="(routes)/verify-email/index" />
      <Stack.Screen name="+not-found" />
    </Stack>
    //  {/* </ThemeProvider> */}
  );
}
