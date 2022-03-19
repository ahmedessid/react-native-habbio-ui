import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from './styles';


const IntroScreen=({navigation})=> {
  const homeScreen = "Home";
  const introImage="../../../assets/images/intro.png";
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require(introImage)}
        />
        <View style={styles.blueCircleDecoration}></View>
      </View>
      <View style={styles.titles}>
        <Text style={styles.title}>
          Organize your life{"\n"}with{" "}
          <Text style={{ fontWeight: "bold" }}>Habbio</Text>
        </Text>
        <Text style={styles.subtitle}>
          Habbio is a free and simple daily habit tracker.
        </Text>
      </View>
      <View style={styles.GreyCircleDecoration}></View>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => navigation.navigate(homeScreen)}
      >
        <Text style={styles.buttonTitle}>Got it!</Text>
      </TouchableOpacity>
    </View>
  );
}

export default IntroScreen;