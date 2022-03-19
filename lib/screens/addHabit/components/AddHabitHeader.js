import { View, Text } from "react-native";
import React from "react";
import styles from "../styles";

const AddHabitHeader = () => {
  return (
    <>
      <View style={styles.titlesContainer}>
        <Text style={styles.title}>Add new habit</Text>
        <Text style={styles.subtitle}>
          Set personal goals, track your progress, and motivate yourself to
          achieve new heights!
        </Text>
      </View>
      <View style={styles.greyContainer}></View>
      <View style={styles.decorationsContainer}>
        <View
          style={[styles.decorationContainer, { backgroundColor: "#5494E1" }]}
        ></View>
        <View
          style={[styles.decorationContainer, { backgroundColor: "#49497D" }]}
        ></View>
      </View>
    </>
  );
};

export default AddHabitHeader;