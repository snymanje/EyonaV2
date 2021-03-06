import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { DeliveriesNavigator } from "./deliveries.navigator";
import { NewDeliveriesNavigator } from "./newDelivery.navigator";
import { Feature3Screen } from "../../features/feature3/screens/Feature3.screen";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  MyDeliveries: "md-list",
  NewDelivery: "md-add",
  Settings: "md-settings",
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
    <Tab.Screen
      name="MyDeliveries"
      component={DeliveriesNavigator}
      options={{ title: "My Deliveries" }}
    />
    <Tab.Screen
      name="NewDelivery"
      component={NewDeliveriesNavigator}
      options={{ title: "New Delivery" }}
    />
    <Tab.Screen
      name="Settings"
      component={Feature3Screen}
      options={{ title: "Settings" }}
    />
  </Tab.Navigator>
);
