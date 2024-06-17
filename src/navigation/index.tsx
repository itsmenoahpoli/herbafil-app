import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import type { TStackParamsList } from "@/types/navigation";

import { WelcomeScreen, SignupScreen, HomeScreen, PlantInformationScreen, PlantCaptureScreen, UserProfileScreen } from "@/screens";

const { Navigator, Screen } = createStackNavigator<TStackParamsList>();

const navigationOpts = {
  headerShown: false,
};

export const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={navigationOpts} initialRouteName="HOME_SCREEN">
        <Screen name="WELCOME_SCREEN" component={WelcomeScreen} />
        <Screen name="SIGNUP_SCREEN" component={SignupScreen} />
        <Screen name="HOME_SCREEN" component={HomeScreen} />
        <Screen name="PLANT_INFORMATION_SCREEN" component={PlantInformationScreen} />
        <Screen name="PLANT_CAPTURE_SCREEN" component={PlantCaptureScreen} />
        <Screen name="USER_PROFILE_SCREEN" component={UserProfileScreen} />
      </Navigator>
    </NavigationContainer>
  );
};
