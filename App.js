import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigationStack from "./Route/Navigations";
import { Image, View } from "react-native";
import { useState } from "react";
import { SplashContext } from "./Contexts/SplashContext";

export default function App() {
  const [splashStatus, setSplashStatus] = useState(true);
  return (
    <SplashContext.Provider value={{ setSplashStatus: setSplashStatus }}>
      {splashStatus ? <Splash /> : ""}
      <NavigationContainer>
        <MainNavigationStack />
        <StatusBar style="auto" />
      </NavigationContainer>
    </SplashContext.Provider>
  );
}
const Splash = () => (
  <View
    style={{
      height: "100%",
      width: "100%",
      backgroundColor: "#CD5151",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Image
      style={{ width: 300, height: 300 }}
      source={require("./assets/icons/splash.gif")}
    />
  </View>
);
