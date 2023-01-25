import { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
} from "react-native";
import Colors from "../Config/Colors";
import { SplashContext } from "../Contexts/SplashContext";

const Metadata = ({ navigation, route }) => {
  const [fontSize, setFontSize] = useState(15);
  const { setSplashStatus } = useContext(SplashContext);
  useEffect(() => {
    setTimeout(() => {
      setSplashStatus(false);
    }, 3000);
    navigation.setOptions({
      headerRight: () => (
        <FontSizeAdjuster fontSize={fontSize} setFontSize={setFontSize} />
      ),
    });
  }, [navigation, fontSize]);
  useEffect(() => {}, []);
  const imageData = route.params.imageData;
  console.log(imageData.uri);
  return (
    <View>
      <Image
        style={{ width: "100%", height: 200, resizeMode: "cover" }}
        source={{ uri: imageData.uri }}
      />
      <ShowMetaData
        fontSize={fontSize}
        imageData={imageData}
        navigation={navigation}
      />
    </View>
  );
};

const ShowMetaData = ({ imageData, fontSize, navigation }) => {
  const OneLine = ({ objKey, objValue }) => (
    <Text style={{ flexDirection: "row", justifyContent: "flex-start" }}>
      <Text
        style={{
          fontSize: fontSize,
          fontWeight: "bold",
          color: Colors.text_primary,
        }}
      >
        {objKey} :&nbsp;
      </Text>
      <Text style={{ fontSize: fontSize, color: Colors.text_primary }}>
        {JSON.stringify(objValue)}
      </Text>
    </Text>
  );
  return (
    <ScrollView>
      <View
        style={{ paddingHorizontal: 20, paddingTop: 20, paddingBottom: 400 }}
      >
        {Object.keys(imageData).map((key) => {
          if (key !== "exif") {
            console.log(key);
            return <OneLine key={key} objKey={key} objValue={imageData[key]} />;
          }
        })}
        {Object.keys(imageData.exif).map((key) => (
          <OneLine key={key} objKey={key} objValue={imageData.exif[key]} />
        ))}
        <View style={{ marginTop: 50 }}>
          <Button
            title="Back"
            color={Colors.button_primary}
            onPress={() => {
              navigation.navigate("Home");
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const FontSizeAdjuster = ({ fontSize, setFontSize }) => {
  const Style = StyleSheet.create({
    icon: {
      width: 30,
      height: 30,
    },
    iconContainer: {
      flex: 1,
      marginLeft: 5,
      alignItems: "center",
    },
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        flexDirection: "row",
      }}
    >
      <TouchableOpacity
        onPress={() => setFontSize(fontSize - 2)}
        style={Style.iconContainer}
      >
        <Image
          style={Style.icon}
          source={require("../assets/icons/fontsmall.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={Style.iconContainer}
        onPress={() => setFontSize(fontSize + 2)}
      >
        <Image
          style={Style.icon}
          source={require("../assets/icons/fontlarge.png")}
        />
      </TouchableOpacity>
    </View>
  );
};
export default Metadata;
