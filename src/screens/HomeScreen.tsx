import React from "react";
import { View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { BrandLogo } from "@/components/shared";
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
      </View>
    </BaseLayout>
  );
};
