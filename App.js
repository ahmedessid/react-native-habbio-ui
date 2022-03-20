import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import IntroScreen from "./lib/screens/introduction/IntroScreen";
import Home from "./lib/screens/home/Home";
import AddHabit from "./lib/screens/addHabit/AddHabit";

import { Provider } from "react-redux";
import { store } from "./lib/redux/store";
import { iWhite } from "./lib/constants/colors";
import { AppearanceProvider } from "react-native-appearance";

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
  contentStyle: {
    backgroundColor: iWhite,
  },
};

export default function App() {
  return (
    <AppearanceProvider>
      <Provider store={store}>
        <NavigationContainer>
          <SafeAreaProvider>
            <Stack.Navigator screenOptions={screenOptions}>
              <Stack.Screen name="Intro" component={IntroScreen} />
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="AddHabit" component={AddHabit} />
            </Stack.Navigator>
          </SafeAreaProvider>
        </NavigationContainer>
      </Provider>
    </AppearanceProvider>
  );
}
