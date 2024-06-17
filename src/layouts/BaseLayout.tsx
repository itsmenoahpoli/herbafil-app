import React from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  children: React.ReactNode;
  hideNavBtn?: boolean;
  hideNav?: boolean;
};

const NavContainer: React.FC = () => {
  const { navigate } = useNavigation();

  const handleRedirect = (screen: string) => {
    // @ts-ignore
    navigate(screen);
  };

  return (
    <View className="w-[95%] bg-green-500 rounded-md mx-auto mt-[80px] z-30 p-5">
      <Pressable className="items-center py-3" onPress={() => handleRedirect("HOME_SCREEN")}>
        <Text className="text-white font-medium">Home</Text>
      </Pressable>
      <Pressable className="items-center py-3" onPress={() => handleRedirect("PLANT_INFORMATION_SCREEN")}>
        <Text className="text-white font-medium">Plants Dictionary</Text>
      </Pressable>
      <Pressable className="items-center py-3" onPress={() => handleRedirect("PLANT_CAPTURE_SCREEN")}>
        <Text className="text-white font-medium">Capture Plant</Text>
      </Pressable>
      <Pressable className="items-center py-3" onPress={() => handleRedirect("HOME_SCREEN")}>
        <Text className="text-white font-medium">User Profile</Text>
      </Pressable>
      <Pressable className="items-center py-3">
        <Text className="text-white font-medium">Log Out</Text>
      </Pressable>
    </View>
  );
};

export const BaseLayout: React.FC<Props> = (props) => {
  const [navOpen, setNavOpen] = React.useState<boolean>(false);

  const toggleNav = () => {
    setNavOpen((prevState) => !prevState);
  };

  return (
    <View className="flex-1">
      <LinearGradient colors={["#D4FAC6", "#105917"]} className="absolute top-0 bottom-0 left-0 right-0 z-10" />

      <View className="flex-1 z-20 relative">
        {navOpen && !props.hideNav ? <NavContainer /> : null}
        {props.hideNavBtn ? null : (
          <>
            <View className="absolute top-5 left-5 z-20">
              <Pressable onPress={toggleNav}>
                <Feather name="menu" size={36} />
              </Pressable>
            </View>
          </>
        )}
        {props.children}
      </View>
    </View>
  );
};
