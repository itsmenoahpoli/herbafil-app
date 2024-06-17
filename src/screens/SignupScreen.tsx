import React from "react";
import { View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { BrandLogo } from "@/components/shared";
import { SignupForm } from "@/components/domains/auth";
import { BaseLayout } from "@/layouts";
import type { TStackParamsList } from "@/types/navigation";

type TScreenProps = {
  navigation: StackNavigationProp<TStackParamsList, "SIGNUP_SCREEN">;
};

export const SignupScreen: React.FC<TScreenProps> = (props) => {
  return (
    <BaseLayout>
      <View className="flex-1 items-center pt-[5%]">
        <BrandLogo />
        <SignupForm />
      </View>
    </BaseLayout>
  );
};
