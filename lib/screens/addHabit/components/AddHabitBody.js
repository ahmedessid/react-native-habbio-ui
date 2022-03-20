import { View, Text, TextInput } from "react-native";
import React, {useState} from "react";
import styles from "../styles";

import DateTimePicker from "@react-native-community/datetimepicker";
import { AntDesign } from "@expo/vector-icons";
import { iBlack15 } from "../../../constants/colors";

const AddHabitBody = () => {
    
  const [date, setDate] = useState(new Date());
  const [selected, setSelected] = useState(false);

  return (
    <>
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
          <AntDesign name="calendar" size={18} color={iBlack15} />

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
            color={iBlack15}
          />
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
