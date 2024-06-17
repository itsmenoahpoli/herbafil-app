import React from "react";
import { View, Image } from "react-native";
import { ImageAssets } from "@/assets/index";

type Props = {
  classNames?: string;
  height?: number;
  width?: number;
};

export const BrandLogo: React.FC<Props> = (props) => {
  return (
    <View className={`flex items-center justify-center ${props.classNames}`}>
      <Image source={ImageAssets.BRAND_LOGO} resizeMethod="auto" resizeMode="contain" className="h-[250px] w-[250px]" />
    </View>
  );
};
