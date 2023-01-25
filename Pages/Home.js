import React, { useContext, useEffect } from "react";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import Colors from "../Config/Colors";
import * as ImagePicker from "expo-image-picker";
import { SplashContext } from "../Contexts/SplashContext";

const Home = ({ navigation }) => {
  const { setSplashStatus } = useContext(SplashContext);
  const handleTouch = async () => {
    console.log("toucher");
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
      exif: true,
    });
    setSplashStatus(true);
    navigation.navigate("Metadata", { imageData: result.assets[0] });
    console.log(result.assets[0]);
  };
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <InfoIcon
          handlePress={() => {
            navigation.navigate("Info");
          }}
        />
      ),
    });
  });
  useEffect(() => {
    setTimeout(() => setSplashStatus(false), 3000);
  }, []);
  return (
    <TouchableWithoutFeedback onPress={() => handleTouch()}>
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.bg_primary,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 150, height: 150, opacity: 0.5, top: -20 }}
          source={require("../assets/icons/camera.png")}
        />
        <Text style={{ fontSize: 20, opacity: 0.5 }}>
          Tap to select a picture
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
const InfoIcon = ({ handlePress }) => (
  <TouchableWithoutFeedback onPress={handlePress}>
    <View
      style={{
        height: "100%",
        width: 50,
        paddingHorizontal: 3,
        justifyContent: "center",
      }}
    >
      <Image
        style={{ height: 30, width: 30 }}
        source={require("../assets/icons/info.png")}
      />
    </View>
  </TouchableWithoutFeedback>
);
export default Home;
