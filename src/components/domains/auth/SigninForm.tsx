import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { BaseInput, BaseButton } from "@/components/base";

type Props = {
  //
};

export const SigninForm: React.FC<Props> = (props) => {
  const { navigate } = useNavigation();

  const handleRedirectCreateAccount = () => {
    // @ts-ignore
    return navigate("SIGNUP_SCREEN");
  };

  return (
    <View className="w-3/4 flex flex-col gap-y-3 mt-5">
      <Text className="text-xl text-center text-white font-bold">LOGIN</Text>
      <BaseInput placeholder="E-mail" />
      <BaseInput placeholder="Password" />
      <BaseButton title="Sign In" className="mt-5" />
      <BaseButton title="Create Account" className="mt-5" onPress={handleRedirectCreateAccount} />
    </View>
  );
};
