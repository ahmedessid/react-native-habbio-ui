import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import styles from "../styles";

import DateTimePicker from "@react-native-community/datetimepicker";
import { AntDesign } from "@expo/vector-icons";
import {
  iBlack,
  iBlack15,
  iBlack35,
  iBlack7,
  iWhite,
  iWhite15,
  iWhite35,
  iWhite4,
} from "../../../constants/colors";
import { useSelector } from "react-redux";

const AddHabitBody = () => {
  const themeMode = useSelector((state) => state.theme.themeMode);
  const [isDark] = useState(themeMode === "dark");

  const [date, setDate] = useState(new Date());
  const [selected, setSelected] = useState(false);

  return (
    <>
      <View style={styles.habbitInputContainer}>
        <Text style={[styles.habbitTitle, { color: isDark ? iWhite : iBlack }]}>
          What we will do today?
        </Text>
        <TextInput
          style={[
            styles.habbitInput,
            {
              borderColor: isDark ? iWhite4 : iBlack7,
              color: isDark ? iWhite : iBlack,
            },
          ]}
          onChangeText={() => null}
          placeholder="Name of habit.."
          placeholderTextColor={isDark ? iWhite35 : iBlack35}
        />
      </View>
      <View style={styles.habbitInputContainer}>
        <Text style={[styles.habbitTitle, { color: isDark ? iWhite : iBlack }]}>
          When we will do it today?
        </Text>
        <View style={[styles.dateSection, { marginBottom: 14 }]}>
          <AntDesign
            name="calendar"
            size={18}
            color={isDark ? iWhite15 : iBlack15}
          />

          <TextInput
            style={{ marginLeft: 14, color: isDark ? iWhite : iBlack }}
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
          <AntDesign name="clockcircleo" size={18} color={iBlack15} />
          <TextInput
            style={{ marginLeft: 14 }}
            //value={moment().utcOffset('+03:00').format('YYYY-MM-DD')}
            focusable={false}
          />
        </View>
      </View>
      {selected === true ? (
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
    </>
  );
};

export default AddHabitBody;
