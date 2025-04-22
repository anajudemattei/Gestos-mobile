import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Luiza from "../screens/Luiza";
import Tulipas from "../screens/Tulipas";

const Stack = createNativeStackNavigator();

export default function AnaJuliaNavigator() {
    return (
        <Stack.Navigator initialRouteName="Luiza" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Luiza" component={Luiza} />
            <Stack.Screen name="Tulipas" component={Tulipas} />
        </Stack.Navigator>
    );
}