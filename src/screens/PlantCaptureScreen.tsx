import React from "react";
import { View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AntDesign } from "@expo/vector-icons";
import { BrandLogo } from "@/components/shared";
import { BaseLayout } from "@/layouts";
import type { TStackParamsList } from "@/types/navigation";

type TScreenProps = {
  navigation: StackNavigationProp<TStackParamsList, "PLANT_CAPTURE_SCREEN">;
};

export const PlantCaptureScreen: React.FC<TScreenProps> = (props) => {
  return (
    <BaseLayout>
      <View className="flex-1 items-center pt-[5%]">
        <Text className="text-xl text-green-900 text-center font-bold">Capture Plant</Text>

        <View className="w-full flex-1 border mt-10"></View>

        <Pressable className="bg-purple-700 border border-white rounded-full p-4 mt-10">
          <AntDesign name="camerao" size={36} color="white" />
        </Pressable>

        <BrandLogo />
      </View>
    </BaseLayout>
  );
};
