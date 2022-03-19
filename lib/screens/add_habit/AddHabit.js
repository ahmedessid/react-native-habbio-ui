import { Text, View, TouchableOpacity, TextInput, Icon } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";
import { AntDesign } from "@expo/vector-icons";


const AddHabit = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [selected, setSelected] = useState(false);
  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
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
        <View style={styles.habbitInputContainer}>
          <Text style={styles.habbitTitle}>What we will do today?</Text>
          <TextInput
            style={styles.habbitInput}
            onChangeText={() => null}
            placeholder="Name of habit.."
          />
        </View>
        <View style={styles.habbitInputContainer}>
          <Text style={styles.habbitTitle}>When we will do it today?</Text>
          <View style={[styles.dateSection, { marginBottom: 14 }]}>
            <AntDesign name="calendar" size={18} color="rgba(0, 0, 0, 0.15)" />

            <TextInput
              style={{ marginLeft: 14 }}
              value={
                ("0" + date.getDate()).slice(-2) +
                "." +
                ("0" + (date.getMonth() + 1)).slice(-2) +
                "." +
                date.getFullYear()
              }
            />
          </View>
          <View style={[styles.dateSection, { marginBottom: 14 }]}>
            <AntDesign
              name="clockcircleo"
              size={18}
              color="rgba(0, 0, 0, 0.15)"
            />
            <TextInput
              style={{ marginLeft: 14 }}
              //value={moment().utcOffset('+03:00').format('YYYY-MM-DD')}
              focusable={false}
            />
          </View>
        </View>
        {selected ===true ? (
          <DateTimePicker
            value={date}
            mode={"time"}
            onChange={(event, date) => {
              setDate(date);
              if (event.type == "set") {
                setSelected(true);
              } else {
                setSelected(true);
              }
            }}
          />
        ) : null}
        <View style={styles.buttons}>
          <TouchableOpacity
            style={[styles.cancelButton, { marginRight: 12 }]}
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}
          >
            <Text style={[styles.buttonTitle, { color: "#2c2c2c" }]}>
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
