import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";

type ViewWrapperProps = {
  grow?: boolean;
  children: ReactNode;
};

export default function ViewWrapper({
  children,
  grow = false,
}: ViewWrapperProps) {
  return (
    <View style={[styles.wrapper, { flex: grow ? 1 : 0 }]}>{children}</View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  },
});
