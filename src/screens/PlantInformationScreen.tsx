import React from "react";
import { View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { BrandLogo } from "@/components/shared";
import { BaseInput } from "@/components/base";
import { BaseLayout } from "@/layouts";
import type { TStackParamsList } from "@/types/navigation";

type TScreenProps = {
  navigation: StackNavigationProp<TStackParamsList, "PLANT_INFORMATION_SCREEN">;
};

export const PlantInformationScreen: React.FC<TScreenProps> = (props) => {
  return (
    <BaseLayout>
      <View className="flex-1 justify-center items-center">
        <View className="flex flex-row gap-x-5">
          <BaseInput placeholder="Search" className="w-2/3" />
        </View>
        <View className="flex flex-col gap-y-5 mt-[80px] mb-[20px]">
          <View className="w-[130px] h-[130px] bg-[#DFFCDC]" />
          <Text className="text-md text-center text-white">Plant Info</Text>
        </View>
        <BrandLogo small />
      </View>
    </BaseLayout>
  );
};
