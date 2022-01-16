import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { Feature1Screen } from "../../features/feature1/screens/Feature1.screen";
import { Feature2Screen } from "../../features/feature2/screens/Feature2.screen";
import { Feature3Screen } from "../../features/feature3/screens/Feature3.screen";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Tab1: "md-home",
  Tab2: "md-map",
  Tab3: "md-settings",
};

const ScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    headerShown: false,
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    tabBarStyle: [
      {
        display: "flex",
      },
      null,
    ],
  };
};

export const AppNavigator = () => (
  <Tab.Navigator screenOptions={ScreenOptions}>
    <Tab.Screen name="Tab1" component={Feature1Screen} />
    <Tab.Screen name="Tab2" component={Feature2Screen} />
    <Tab.Screen name="Tab3" component={Feature3Screen} />
  </Tab.Navigator>
);
