import React from "react";
import { View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { BrandLogo } from "@/components/shared";
import { BaseButton } from "@/components/base";
import { BaseLayout } from "@/layouts";
import type { TStackParamsList } from "@/types/navigation";

type TScreenProps = {
  navigation: StackNavigationProp<TStackParamsList, "HOME_SCREEN">;
};

export const HomeScreen: React.FC<TScreenProps> = (props) => {
  const handleRedirectPlantInfoScreen = () => {
    props.navigation.navigate("PLANT_INFORMATION_SCREEN");
  };

  return (
    <BaseLayout>
      <View className="flex-1 justify-center items-center">
        <View className="flex flex-row gap-x-5">
          <BaseButton title="Scan" className="w-[150px]" />
          <BaseButton title="Herbal" className="w-[150px]" />
        </View>
        <View className="flex flex-row items-center gap-x-5 mt-[80px] mb-[20px]">
          <Pressable className="w-[100px] h-[100px] bg-[#DFFCDC]" onPress={handleRedirectPlantInfoScreen} />
          <Pressable className="w-[130px] h-[130px] bg-[#DFFCDC]" onPress={handleRedirectPlantInfoScreen} />
          <Pressable className="w-[100px] h-[100px] bg-[#DFFCDC]" onPress={handleRedirectPlantInfoScreen} />
        </View>
        <BrandLogo small />
      </View>
    </BaseLayout>
  );
};
