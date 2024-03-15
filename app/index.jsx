import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./HomePage";
import VideoCallPage from "./VideoCallPage";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="VideoCallPage" component={VideoCallPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
