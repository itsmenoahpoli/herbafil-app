import React from "react";
import { View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { BrandLogo } from "@/components/shared";
import { BaseLayout } from "@/layouts";
import type { TStackParamsList } from "@/types/navigation";

type TScreenProps = {
  navigation: StackNavigationProp<TStackParamsList, "PLANT_INFORMATION_SCREEN">;
};

export const PlantInformationScreen: React.FC<TScreenProps> = (props) => {
  return (
    <BaseLayout>
      <View className="flex-1 items-center pt-[5%]">
        <BrandLogo />
      </View>
    </BaseLayout>
  );
};
