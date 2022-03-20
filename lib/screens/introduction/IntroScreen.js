import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import styles from "./styles";

import LightDarkTheme from "./components/LightDarkTheme";
import { darkBackhround, iBlack, iWhite } from "../../constants/colors";

const IntroScreen = ({ navigation }) => {
  const themeMode = useSelector((state) => state.theme.themeMode);
  const homeScreen = "Home";
  const introImage = "../../../assets/images/intro.png";

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: themeMode == "dark" ? darkBackhround : iWhite },
      ]}
    >
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require(introImage)} />
        <View style={styles.blueCircleDecoration}></View>
      </View>
      <View>
        <Text
          style={[
            styles.title,
            { color: themeMode == "dark" ? iWhite : iBlack },
          ]}
        >
          Organize your life{"\n"}with{" "}
          <Text style={{ fontWeight: "bold" }}>Habbio</Text>
        </Text>
        <LightDarkTheme />
        <Text
          style={[
            styles.subtitle,
            { color: themeMode == "dark" ? iWhite : iBlack },
          ]}
        >
          Habbio is a free and simple daily habit tracker.
        </Text>
      </View>
      <View style={styles.GreyCircleDecoration}></View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => navigation.navigate(homeScreen)}
        >
          <Text style={styles.buttonTitle}>Got it!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IntroScreen;
