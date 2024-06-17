import React from "react";
import { View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { BrandLogo } from "@/components/shared";
import { SigninForm } from "@/components/domains/auth";
import { BaseLayout } from "@/layouts";
import type { TStackParamsList } from "@/types/navigation";

type TScreenProps = {
  navigation: StackNavigationProp<TStackParamsList, "WELCOME_SCREEN">;
};

export const WelcomeScreen: React.FC<TScreenProps> = (props) => {
  return (
    <BaseLayout>
      <View className="flex-1 justify-center items-center">
        <BrandLogo />
        <SigninForm />
      </View>
    </BaseLayout>
  );
};
