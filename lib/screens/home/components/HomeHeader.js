import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import styles from "../styles";
import { useSelector } from "react-redux";
import { iBlack, iBlack3, iDarkPurple, iPurple, iWhite, iWhite3 } from "../../../constants/colors";

const profileImage = "../../../../assets/images/boy.png";
const percentPolygon = "../../../../assets/icons/percent_polygon.png";

const HomeHeader = () => {
  const themeMode = useSelector((state) => state.theme.themeMode);
  const [isDark] = useState(themeMode === "dark");

  return (
    <>
      <View style={styles.homeHeader}>
        <View style={styles.titlesContainer}>
          <Text style={[styles.title, { color: isDark ? iWhite : iBlack }]}>
            What's up, Ahmed
          </Text>
          <Text style={[styles.subtitle, { color: isDark ? iWhite : iBlack }]}>
            What are your habits today?
          </Text>
        </View>
        <View
          style={[
            styles.profileContainer,
            { backgroundColor: isDark ? iWhite3 : iBlack3 },
          ]}
        >
          <Image style={styles.image} source={require(profileImage)} />
        </View>
      </View>
      <View style={[styles.bannerContainer, { backgroundColor: isDark ? iDarkPurple : iPurple }]}>
        <View style={styles.leftDecorationCircle}></View>
        <View style={styles.leftBannerElements}>
          <Text style={styles.percent}>33%</Text>
          <View style={styles.percentIcon}>
            <Image source={require(percentPolygon)} />
          </View>
        </View>
        <View style={styles.rightBannerElements}>
          <Text style={styles.bannerTitle}>
            Your daily goals{"\n"}almost done!
          </Text>
          <Text style={styles.bannerSubtitle}>1 of 3 completed</Text>
        </View>
        <View style={styles.rightDecorationCircle}></View>
      </View>
    </>
  );
};

export default HomeHeader;
