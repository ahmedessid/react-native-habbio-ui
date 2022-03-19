import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import HomeHeader from "./components/HomeHeader";
import HomeBody from "./components/HomeBody";


const Home = ({ navigation }) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <HomeHeader/>
        <HomeBody/>
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
