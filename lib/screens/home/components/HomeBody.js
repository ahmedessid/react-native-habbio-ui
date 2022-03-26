import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import styles from "../styles";
import {
  darkBackground,
  iBlack,
  iBlack4,
  iSpecialBlue,
  iWhite,
  iWhite4,
} from "../../../constants/colors";
import { useSelector } from "react-redux";

const itemPic1 = "../../../../assets/images/itemPic1.png";
const itemPic2 = "../../../../assets/images/itemPic2.png";

const HomeBody = () => {
  const themeMode = useSelector((state) => state.theme.themeMode);
  const [isDark] = useState(themeMode === "dark");

  return (
    <>
      <View style={styles.todayHabitsContainer}>
        <Text
          style={[
            styles.title,
            { fontSize: 19, color: isDark ? iWhite : iBlack },
          ]}
        >
          Today Habits.
        </Text>
        <Text style={[styles.subtitle, { color: isDark ? iWhite : iBlack }]}>
          It motivates you by showing all the things Todo..
        </Text>
      </View>
      <View style={[styles.itemContainer, { backgroundColor: iSpecialBlue }]}>
        <View style={styles.itemImageContainer}>
          <Image style={styles.itemImage} source={require(itemPic1)} />
        </View>
        <View style={styles.itemTextsContainer}>
          <Text style={[styles.itemTextsContainerTitle, { color: iWhite }]}>
            Archery Tournament
          </Text>
          <Text style={[styles.itemTextsContainerSubtitle, { color: iWhite }]}>
            Feb 25 . 8:00 AM
          </Text>
        </View>
        <View style={styles.itemCheckContainer}></View>
      </View>
      <View
        style={[
          styles.itemContainer,
          { backgroundColor: isDark ? iWhite4 : iBlack4 },
        ]}
      >
        <View
          style={[
            styles.itemImageContainer,
            { backgroundColor: isDark ? darkBackground : iWhite },
          ]}
        >
          <Image style={styles.itemImage} source={require(itemPic2)} />
        </View>
        <View style={styles.itemTextsContainer}>
          <Text
            style={[
              styles.itemTextsContainerTitle,
              { color: isDark ? iWhite : iBlack },
            ]}
          >
            Archery Tournament
          </Text>
          <Text
            style={[
              styles.itemTextsContainerSubtitle,
              { color: isDark ? iWhite : iBlack },
            ]}
          >
            Feb 25 . 8:00 AM
          </Text>
        </View>
        <View
          style={[
            styles.itemCheckContainer,
            { backgroundColor: isDark ? darkBackground : iWhite },
          ]}
        ></View>
      </View>
    </>
  );
};

export default HomeBody;
