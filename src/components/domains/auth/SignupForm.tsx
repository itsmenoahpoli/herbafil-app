import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { BaseInput, BaseButton } from "@/components/base";

export const SignupForm: React.FC = () => {
  const { navigate } = useNavigation();

  const handleRedirectLogin = () => {
    // @ts-ignore
    return navigate("WELCOME_SCREEN");
  };

  return (
    <View className="w-3/4 flex flex-col gap-y-3 mt-5">
      <Text className="text-xl text-center text-white font-bold">CREATE ACCOUNT</Text>
      <BaseInput placeholder="E-mail" />
      <BaseInput placeholder="Password" />
      <BaseButton title="Create Account" className="mt-5" />
      <BaseButton title="Sign In" className="mt-5" onPress={handleRedirectLogin} />
    </View>
  );
};
