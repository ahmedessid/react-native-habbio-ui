import { Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import HomeHeader from "./components/HomeHeader";
import HomeBody from "./components/HomeBody";
import { darkBackground, iWhite, iWhite80 } from "../../constants/colors";
import { useSelector } from "react-redux";


const Home = ({ navigation }) => {
  const themeMode = useSelector((state) => state.theme.themeMode);
  const [isDark] = useState(themeMode === "dark");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: isDark ? darkBackground : iWhite  }}>
      <View style={styles.container}>
        <HomeHeader isDark={isDark}/>
        <HomeBody/>
        <TouchableOpacity
          style={styles.newHabitsButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("AddHabit")}
        >
          <AntDesign name="plus" size={18} color= {iWhite80} />
          <Text style={styles.buttonTitle}>New Habits</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
