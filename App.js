import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./screens/SplashScreen";
import BasicCalculator from "./screens/BasicCalculator";
import ScientificCalculator from "./screens/ScientificCalculator";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BasicCalculator"
          component={BasicCalculator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ScientificCalculator"
          component={ScientificCalculator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
