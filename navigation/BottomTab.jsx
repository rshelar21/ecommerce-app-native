import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Home, Profile, Search} from "../screens/index";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/index";



const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    elevation: 0,
    height: 70,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
  },
};

// const tabBarIcon = (focused, color, size) => {
//     let iconName;
//     if (route.name === 'Home') {
//       iconName = focused
//         ? 'home'
//         : 'home-outline';
//     } else if (route.name === 'Search') {
//       iconName = focused ? 'search' : 'search-outline';
//     } else if (route.name === 'Profile') {
//       iconName = focused ? 'person' : 'person-outline';
//     }
//     return <Ionicons name={iconName} size={size} color={color} />;
// }

export default function BottomTab() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="search-sharp"
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
