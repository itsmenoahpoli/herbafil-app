import React from "react";
import { View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { BaseLayout } from "@/layouts";
import { BaseButton } from "@/components/base";
import type { TStackParamsList } from "@/types/navigation";

type TScreenProps = {
  navigation: StackNavigationProp<TStackParamsList, "HOME_SCREEN">;
};

export const UserProfileScreen: React.FC<TScreenProps> = (props) => {
  return (
    <BaseLayout>
      <View className="flex-1 pt-[5%]">
        <Text className="text-xl text-green-900 text-center font-bold">User's Profile</Text>
        <View className="flex-1 flex-col gap-y-8 items-center mt-5">
          <View className="w-[150px] h-[150px] bg-[#DFFCDC]" />

          <Text className="text-md text-center font-bold">Classified as:</Text>
          <Text className="text-md text-center font-bold">Confidence:</Text>

          <View className="w-3/4 flex flex-col items-center gap-y-7 mt-10">
            <BaseButton title="Take Picture" className="bg-purple-800" />
            <BaseButton title="Log Out" className="w-[180px] bg-purple-800" />
          </View>
        </View>
      </View>
    </BaseLayout>
  );
};
