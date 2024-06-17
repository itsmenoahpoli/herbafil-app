import React from "react";
import { View } from "react-native";
import { BrandLogo } from "@/components/shared";
import { SignupForm } from "@/components/domains/auth";
import { BaseLayout } from "@/layouts";

export const SignupScreen = () => {
  return (
    <BaseLayout>
      <View className="flex-1 items-center pt-[5%]">
        <BrandLogo />
        <SignupForm />
      </View>
    </BaseLayout>
  );
};
