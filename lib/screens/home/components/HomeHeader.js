import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from "../styles";

const HomeHeader = () => {

  const profileImage = "../../../../assets/images/boy.png";
  const percentPolygon = "../../../../assets/icons/percent_polygon.png";
  
  return (
    <>
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
    </>
  )
}

export default HomeHeader