import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";

import RealTimeDataScreen from "./src/screens/RealTimeDataScreen";
import TopBar from "./src/components/TopBar";
import LoginScreen from "./src/screens/LoginScreen";
import Box from "./src/components/Box";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen name="Real" component={RealTimeDataScreen} />
        <Stack.Screen name="Box" component={Box} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="TopBar" component={TopBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
