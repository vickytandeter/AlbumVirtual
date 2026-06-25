import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogIn from "../components/AlbumVirtual/Login/LogIn";

const Stack = createNativeStackNavigator();

type Funcion = {
  titulo: string;
  descripcion: string;
};

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

    </Stack.Navigator>

  );
}