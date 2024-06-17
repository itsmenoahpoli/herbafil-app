import React from "react";
import { TextInput, type TextInputProps } from "react-native";

type Props = {
  //
} & TextInputProps;

export const BaseInput: React.FC<Props> = (props) => {
  const classNames = `w-full h-[50px] !bg-white rounded-2xl text-xs placeholder:!text-black px-4 ${props.className}`;

  return <TextInput {...props} className={classNames} placeholderTextColor="#777" />;
};
