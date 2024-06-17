import React from "react";
import { View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { BrandLogo } from "@/components/shared";
import { BaseButton } from "@/components/base";
import { BaseLayout } from "@/layouts";
import type { TStackParamsList } from "@/types/navigation";

type TScreenProps = {
  navigation: StackNavigationProp<TStackParamsList, "HOME_SCREEN">;
};

export const HomeScreen: React.FC<TScreenProps> = (props) => {
  return (
    <BaseLayout>
      <View className="flex-1 justify-center items-center">
        <View className="flex flex-row gap-x-5">
          <BaseButton title="Scan" className="w-[150px]" />
          <BaseButton title="Herbal" className="w-[150px]" />
        </View>
        <BrandLogo small />
      </View>
    </BaseLayout>
  );
};
