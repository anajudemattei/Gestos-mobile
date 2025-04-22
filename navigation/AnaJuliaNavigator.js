import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AnaJulia from "../screens/AnaJulia";
import Lirios from "../screens/Lirios";

const Stack = createNativeStackNavigator();

export default function AnaJuliaNavigator() {
    return (
        <Stack.Navigator initialRouteName="AnaJulia" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="AnaJulia" component={AnaJulia} />
            <Stack.Screen name="Lirios" component={Lirios} />
        </Stack.Navigator>
    );
}