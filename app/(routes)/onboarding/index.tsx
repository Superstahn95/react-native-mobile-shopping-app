import OnboardingScreen from "@/screens/onboarding/onboarding.screen";
import { useEffect } from "react";
import { router } from "expo-router";

export default function onboarding() {
  useEffect(() => {
    setTimeout(() => {
      router.push("welcome");
    }, 3000);
  }, []);
  return <OnboardingScreen />;
}
