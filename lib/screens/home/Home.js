import { Text, View, TouchableOpacity, TextInput, Image } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const profileImage = "../../../assets/images/boy.png";
  const itemPic1 = "../../../assets/images/itemPic1.png";
  const itemPic2 = "../../../assets/images/itemPic2.png";
  const percentPolygon = "../../../assets/icons/percent_polygon.png";

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.homeHeader}>
          <View style={styles.titlesContainer}>
            <Text style={styles.title}>What's up, Ahmed</Text>
            <Text style={styles.subtitle}>What are your habits today?</Text>
          </View>
          <View style={styles.profileContainer}>
            <Image style={styles.image} source={require(profileImage)} />
          </View>
        </View>
        <View style={styles.bannerContainer}>
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
        <View style={styles.todayHabitsContainer}>
          <Text style={[styles.title, { fontSize: 19 }]}>Today Habits.</Text>
          <Text style={styles.subtitle}>
            It motivates you by showing all the things Todo..
          </Text>
        </View>
        <View style={[styles.itemContainer, { backgroundColor: "#549CE1" }]}>
          <View style={styles.itemImageContainer}>
            <Image style={styles.itemImage} source={require(itemPic1)} />
          </View>
          <View style={styles.itemTextsContainer}>
            <Text style={[styles.itemTextsContainerTitle, { color: "#fff" }]}>
              Archery Tournament
            </Text>
            <Text
              style={[styles.itemTextsContainerSubtitle, { color: "#fff" }]}
            >
              Feb 25 . 8:00 AM
            </Text>
          </View>
          <View style={styles.itemCheckContainer}></View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemImageContainer}>
            <Image style={styles.itemImage} source={require(itemPic2)} />
          </View>
          <View style={styles.itemTextsContainer}>
            <Text style={styles.itemTextsContainerTitle}>
              Archery Tournament
            </Text>
            <Text style={styles.itemTextsContainerSubtitle}>
              Feb 25 . 8:00 AM
            </Text>
          </View>
          <View style={styles.itemCheckContainer}></View>
        </View>
        <TouchableOpacity
          style={styles.newHabitsButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("AddHabit")}
        >
          <AntDesign name="plus" size={18} color="rgba(256, 256, 256, 0.80)" />
          <Text style={styles.buttonTitle}>New Habits</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
