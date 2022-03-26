import { Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

import AddHabitHeader from "./components/AddHabitHeader";
import AddHabitBody from "./components/AddHabitBody";
import {
  darkBackground,
  iBlack4,
  ioBlack,
  iWhite,
  iWhite4,
} from "../../constants/colors";
import { useSelector } from "react-redux";

const AddHabit = ({ navigation }) => {
  const themeMode = useSelector((state) => state.theme.themeMode);
  const [isDark] = useState(themeMode === "dark");

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: isDark ? darkBackground : iWhite }}
    >
      <View style={styles.container}>
        <AddHabitHeader />
        <AddHabitBody />
        <View style={styles.buttons}>
          <TouchableOpacity
            style={[
              styles.cancelButton,
              { marginRight: 12, backgroundColor: isDark ? iWhite4 : iBlack4 },
            ]}
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
          >
            <Text
              style={[styles.buttonTitle, { color: isDark ? iWhite : ioBlack }]}
            >
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.confirmButton}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("AddHabit")}
          >
            <Text style={styles.buttonTitle}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddHabit;
