import React from "react";
import { TextInput, type TextInputProps } from "react-native";

type Props = {
  //
} & TextInputProps;

export const BaseInput: React.FC<Props> = (props) => {
  const classNames = `w-full h-[50px] !bg-white rounded-2xl text-xs px-4 ${props.className}`;

  return <TextInput className={classNames} {...props} />;
};
