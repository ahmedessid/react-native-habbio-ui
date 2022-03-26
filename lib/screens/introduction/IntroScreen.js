import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
// import styles from "./styles";

import LightDarkTheme from "./components/LightDarkTheme";
import { darkBackground, iBlack, iWhite } from "../../constants/colors";
import tw from 'tailwind-react-native-classnames';

const IntroScreen = ({ navigation }) => {
  const themeMode = useSelector((state) => state.theme.themeMode);

  const homeScreen = "Home";
  const introImage = "../../../assets/images/intro.png";

  return (
    <View
      style={[
        tw`flex-1 items-center`,
        { backgroundColor: themeMode == "dark" ? darkBackground : iWhite },
      ]}
    >
      <View style={tw`mt-16`}>
        <Image style={tw`h-96 w-72 self-center`} source={require(introImage)} />
        <View style={tw`h-3 w-3 top-24 left-12 absolute bg-blue-400 rounded-full`}></View>
      </View>
      <View>
        <Text
          style={[
            tw`text-3xl text-center	font-semibold leading-10`,
            { color: themeMode == "dark" ? iWhite : iBlack },
          ]}
        >
          Organize your life{"\n"}with{" "}
          <Text style={tw`font-bold`}>Habbio</Text>
        </Text>
        <LightDarkTheme />
        <Text
          style={[
            tw`text-base text-center mt-3.5 mx-16 opacity-50`,
            { color: themeMode == "dark" ? iWhite : iBlack },
          ]}
        >
          Habbio is a free and simple daily habit tracker.
        </Text>
      </View>
      <View style={tw`h-3 w-3 bottom-32 right-24 absolute bg-blue-100 rounded-full`}></View>
      <View style={tw`flex-row`}>
        <TouchableOpacity
          style={tw`h-14 w-36	mt-12 bg-red-500 rounded-full items-center justify-center`}
          activeOpacity={0.8}
          onPress={() => navigation.navigate(homeScreen)}
        >
          <Text style={tw`text-lg font-semibold text-white`}>Got it!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IntroScreen;
