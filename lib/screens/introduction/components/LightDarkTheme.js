import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../../redux/slices/themeSlice";
import styles from "../styles";

import { iBlack, iWhite } from "../../../constants/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LightDarkTheme = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.theme.themeMode);

  const storeTheme = async (value) => {
    try {
      await AsyncStorage.setItem("darkMode", value);
    } catch (e) {
      console.log(e);
    }
  };

  const changeTheme = async () => {
    var mode = await AsyncStorage.getItem("darkMode");
    dispatch(setTheme(mode == "light" ? "dark" : "light"));
    mode == "light" ? storeTheme("dark") : storeTheme("light");
  };

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={async () => {
          await changeTheme();
        }}
      >
        <Text
          style={[
            styles.subtitle,
            { color: themeMode == "dark" ? iWhite : iBlack },
          ]}
        >
          Light/Dark Theme
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default LightDarkTheme;
