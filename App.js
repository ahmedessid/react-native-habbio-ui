import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import IntroScreen from "./lib/screens/introduction/IntroScreen";
import Home from "./lib/screens/home/Home";
import AddHabit from "./lib/screens/add_habit/AddHabit";

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
  contentStyle: {
    backgroundColor: "#FFFFFF",
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name="Intro" component={IntroScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AddHabit" component={AddHabit} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
