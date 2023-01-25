import { createStackNavigator, StackView } from "@react-navigation/stack";
import { Image, TouchableWithoutFeedback, View } from "react-native";
import Colors from "../Config/Colors";

import Home from "../Pages/Home";
import Info from "../Pages/Info";
import Metadata from "../Pages/Metadata";

const Stack = createStackNavigator();
const MainNavigationStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Meta Data Viewer",
          headerTitleAlign: "center",
          headerTintColor: Colors.text_secondary,
          headerStyle: {
            backgroundColor: Colors.bg_secondary,
          },
        }}
      />
      <Stack.Screen
        name="Metadata"
        component={Metadata}
        options={{
          title: "Meta Data Viewer",
          headerTitleAlign: "left",
          headerTintColor: Colors.text_secondary,
          headerStyle: {
            height: 100,
          },
        }}
      />
      <Stack.Screen name="Info" component={Info} />
    </Stack.Navigator>
  );
};

export default MainNavigationStack;
