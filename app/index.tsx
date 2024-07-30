import { StyleSheet, Text, View } from "react-native";
import { Redirect } from "expo-router";
import React from "react";

export default function Home() {
  return <Redirect href={"/(routes)/onboarding"} />;
}

const styles = StyleSheet.create({});
