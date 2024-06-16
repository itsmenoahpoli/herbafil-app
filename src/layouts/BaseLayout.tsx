import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet } from "react-native";

type Props = {
  children: React.ReactNode;
};

export const BaseLayout: React.FC<Props> = (props) => {
  return (
    <View className="flex-1">
      <LinearGradient colors={["#D4FAC6", "#105917"]} className="absolute top-0 bottom-0 left-0 right-0" />
      <View className="flex-1 z-10">{props.children}</View>
    </View>
  );
};
