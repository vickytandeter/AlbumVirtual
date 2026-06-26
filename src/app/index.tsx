import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogIn from '@/components/LogIn/LogIn';
// import SignUp from '@/components/SignUp/SignUp';

const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <Stack.Navigator
      initialRouteName="LogIn"
      screenOptions={{
        headerShown: false
      }}
    >

      <Stack.Screen
        name="LogIn"
        component={LogIn}
      />

      {/* <Stack.Screen
        name="SignUp"
        component={SignUp}
      /> */}

    </Stack.Navigator>

  );
}