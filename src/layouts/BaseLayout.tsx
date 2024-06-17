import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, View } from "react-native";
import { Feather } from "@expo/vector-icons";

type Props = {
  children: React.ReactNode;
  hideNavBtn?: boolean;
};

const FullscreenNav: React.FC = () => {
  return <View></View>;
};

export const BaseLayout: React.FC<Props> = (props) => {
  const [navOpen, setNavOpen] = React.useState<boolean>(false);

  const toggleNav = () => {
    console.log("toggleNav");
  };

  return (
    <View className="flex-1">
      <LinearGradient colors={["#D4FAC6", "#105917"]} className="absolute top-0 bottom-0 left-0 right-0 z-10" />
      {props.hideNavBtn ? null : (
        <View className="absolute top-5 left-5 z-10">
          <Pressable onPress={toggleNav}>
            <Feather name="menu" size={36} />
          </Pressable>
        </View>
      )}
      <View className="flex-1 z-20 relative">{props.children}</View>
    </View>
  );
};
