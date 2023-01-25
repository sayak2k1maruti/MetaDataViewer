import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../Config/Colors";

const Info = () => {
  return (
    <View style={{ padding: 10, flex: 1 }}>
      <Text style={Style.text}>
        Introducing the Image Metadata Viewer, the ultimate tool for viewing and
        analyzing image metadata on your Android device. With this app, you can
        easily view detailed information about any image, including the camera
        used, the date and time the photo was taken, and even GPS location data.
      </Text>
      <Text style={Style.text}>
        The app supports a wide range of image formats, including JPEG, PNG, and
        RAW files. It also has a user-friendly interface that makes it easy to
        navigate and find the information you need.
      </Text>
      <Text style={Style.text}>
        Overall, the Image Metadata Viewer is a must-have app for anyone who
        works with images and wants to easily view and manage image metadata on
        their Android device.
      </Text>
      <View
        style={{
          width: "100%",
          height: 2,
          backgroundColor: Colors.text_primary,
          marginTop: 10,
        }}
      ></View>
      <Text style={{ color: Colors.text_secondary, fontSize: 10 }}>
        Copyright &copy; 2022 sayakdas2k1@gmail.com
      </Text>
    </View>
  );
};
const Style = StyleSheet.create({
  text: {
    marginTop: 10,
    color: Colors.text_primary,
    fontSize: 15,
  },
});
export default Info;
