import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function IntroScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/intro.png")}
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
        onPress={() => null}
      >
        <Text style={styles.buttonTitle}>Got it!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    alignItems: 'center'
  },
  imageContainer: {
    marginTop: 80,
  },
  blueCircleDecoration: {
    position: "absolute",
    top: 100,
    left: 215,
    height: 12,
    width: 12,
    borderRadius: 40,
    backgroundColor: '#569EE4'
  },
  GreyCircleDecoration: {
    position: "absolute",
    bottom: 65,
    right: 100,
    height: 12,
    width: 12,
    borderRadius: 40,
    backgroundColor: '#EBEBEB'
  },
  image: {
    height: 420,
    alignSelf: "center",
    resizeMode: "contain",
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 40,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 14,
    marginHorizontal: 60,
    opacity: 0.35,
  },
  button: {
    backgroundColor: '#FF4F6C',
    marginTop: 50,
    height: 52,
    width:135,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: 'center'
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white'
  }
});
