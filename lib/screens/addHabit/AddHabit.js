import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

import AddHabitHeader from "./components/AddHabitHeader";
import AddHabitBody from "./components/AddHabitBody";
import { ioBlack } from "../../constants/colors";


const AddHabit = ({ navigation }) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <AddHabitHeader/>
        <AddHabitBody/>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={[styles.cancelButton, { marginRight: 12 }]}
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
          >
            <Text style={[styles.buttonTitle, { color: ioBlack }]}>
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
