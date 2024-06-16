import React from "react";
import { View } from "react-native";
import { BaseInput, BaseButton } from "@/components";

type Props = {
  //
};

export const SigninForm: React.FC<Props> = (props) => {
  return (
    <View className="w-3/4 flex flex-col gap-y-3 mt-5">
      <BaseInput placeholder="E-mail" />
      <BaseInput placeholder="Password" />
      <BaseButton title="Sign In" className="mt-5" />
    </View>
  );
};
