import React from "react";
import { Text, Pressable, PressableProps } from "react-native";

type Props = {
  title: string;
} & PressableProps;

export const BaseButton: React.FC<Props> = (props) => {
  const classNames = `w-full h-[45px] bg-[#56D038] border border-white rounded-2xl justify-center items-center ${props.className}`;

  return (
    <Pressable className={classNames}>
      <Text className="text-white uppercase font-bold">{props.title}</Text>
    </Pressable>
  );
};
