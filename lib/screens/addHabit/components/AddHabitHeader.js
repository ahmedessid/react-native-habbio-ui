import { View, Text } from "react-native";
import React, { useState } from "react";
import styles from "../styles";
import { iBlack, iDarkBlue, iPurple, iWhite } from "../../../constants/colors";
import { useSelector } from "react-redux";

const AddHabitHeader = () => {

  const themeMode = useSelector((state) => state.theme.themeMode);
  const [isDark] = useState(themeMode === "dark");

  return (
    <>
      <View style={styles.titlesContainer}>
        <Text style={[styles.title, { color: isDark ? iWhite : iBlack }]}>Add new habit</Text>
        <Text style={[styles.subtitle, , { color: isDark ? iWhite : iBlack }]}>
          Set personal goals, track your progress, and motivate yourself to
          achieve new heights!
        </Text>
      </View>
      <View style={styles.greyContainer}></View>
      <View style={styles.decorationsContainer}>
        <View
          style={[styles.decorationContainer, { backgroundColor: iDarkBlue }]}
        ></View>
        <View
          style={[styles.decorationContainer, { backgroundColor: iPurple }]}
        ></View>
      </View>
    </>
  );
};

export default AddHabitHeader;
