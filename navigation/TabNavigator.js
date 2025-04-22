import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/AnaJulia';
import Pag3 from "../screens/Luiza"
import { Ionicons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{
            headerShown: false,
            headerTitle: 'Página Inicial',
            headerStyle: { backgroundColor: '#e1a1ae',
                height: 100,
            },
            headerTintColor: "#ffe8f0",
            headerTitleStyle: {
                fontSize: 30,
            },
            tabBarShowLabel: true,
            tabBarStyle: {
                backgroundColor: "#e1a1ae",
                borderRadius: 50,
                height: 100,
                position: 'absolute',
                margin: 15,
            },
            tabBarLabelStyle: {
                fontSize: 20,
            },
            tabBarIconStyle: {
                marginTop: 15,
                marginBottom: 5,
            },
            tabBarActiveTintColor: "#ffebf2",
            tabBarInactiveTintColor: "#ffebf2",
        }}>
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="heart" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen 
                name="TRalalala" 
                component={Pag3} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="heart" color={color} size={size} />
                    ),
                }}
            />
            </Tab.Navigator>
    );
}