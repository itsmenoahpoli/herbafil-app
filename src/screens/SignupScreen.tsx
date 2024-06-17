import React from "react";
import { View } from "react-native";
import { SignupForm } from "@/components";
import { BaseLayout } from "@/layouts";

export const SignupScreen = () => {
  return (
    <BaseLayout>
      <View>
        <SignupForm />
      </View>
    </BaseLayout>
  );
};
