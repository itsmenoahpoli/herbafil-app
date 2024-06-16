import React from "react";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { AppNavigation } from "@/navigation";
import { BaseLayout } from "@/layouts";

SplashScreen.hideAsync();

const App: React.FC = () => {
  return (
    <BaseLayout>
      <SafeAreaProvider>
        <SafeAreaView className="flex-1">
          <AppNavigation />
        </SafeAreaView>
      </SafeAreaProvider>
    </BaseLayout>
  );
};

export default App;
