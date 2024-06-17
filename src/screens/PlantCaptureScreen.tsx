import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { StackNavigationProp } from "@react-navigation/stack";
import { AntDesign } from "@expo/vector-icons";
import { BrandLogo } from "@/components/shared";
import { BaseLayout } from "@/layouts";
import type { TStackParamsList } from "@/types/navigation";

type TScreenProps = {
  navigation: StackNavigationProp<TStackParamsList, "PLANT_CAPTURE_SCREEN">;
};

export const PlantCaptureScreen: React.FC<TScreenProps> = (props) => {
  const [permission, requestPermission]: any = useCameraPermissions();

  console.log(permission);

  return (
    <BaseLayout>
      <View className="flex-1 items-center pt-[5%]">
        <Text className="text-xl text-green-900 text-center font-bold">Capture Plant</Text>

        <View className="w-full flex-1 mt-10">
          {!permission || !permission.granted ? (
            <View className="flex flex-col gap-y-4">
              <Text className="text-center text-red-700">Camera permission not allowed</Text>
              <Pressable className="border rounded-md p-3 mx-auto" onPress={requestPermission}>
                <Text>GRANT PERMISSION</Text>
              </Pressable>
            </View>
          ) : (
            <CameraView style={styles.camera} facing="back"></CameraView>
          )}
        </View>

        <Pressable className="bg-purple-700 border border-white rounded-full p-4 mt-10">
          <AntDesign name="camerao" size={36} color="white" />
        </Pressable>

        <BrandLogo />
      </View>
    </BaseLayout>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
