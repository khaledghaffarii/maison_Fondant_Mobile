import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainNavigator from "./main/MainNavigator";
import { icons } from "../../utils/icons";
import { HomeTabParamList } from "../../utils/types";
import ProfileNavigator from "./profile/ProfileNavigator";
import { createDrawerNavigator, DrawerContent } from "@react-navigation/drawer";
import { Image, Pressable, StatusBar, View, Text } from "react-native";
// import { t } from 'i18next';
import { apiAdress } from "../../utils/constants";

import { navigate } from "../../hooks/NavigationHook";
import CustomHeader from "../../components/CustomHeader";
import { Layout } from "../../utils/device";
import AppDrawer from "../components/Drawer";
import { images } from "../../../assets/images";
const Tab = createBottomTabNavigator<HomeTabParamList>();
const Drawer = createDrawerNavigator();
/**
 * This is the Home navigator (Bottom tabs navigator) :
 * Contains Main , Fixes , Messages and Profile tabs.
 * Each tab is also composed with another navigator.
 */

export default function HomeNavigator() {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Main"
        screenOptions={{
          tabBarLabelPosition: "beside-icon",
          tabBarStyle: {
            height: 75,
            elevation: 4,
            marginBottom: 10,
            opacity: 0.95,
            marginHorizontal: Layout.window.width * 0.1,
            borderTopWidth: 0,
            position: "absolute",
            backgroundColor: "#e7bb9d",
            borderRadius: 26,
            width: Layout.window.width * 0.8,
            alignSelf: "center",
          },
        }}
      >
        <Tab.Screen
          name="Main"
          component={MainNavigator}
          options={{
            headerShown: false,
            title: "Home",
            tabBarActiveTintColor: "#f7e8df",
            tabBarInactiveTintColor: "#ae5f2a",
            tabBarLabelStyle: {
              fontFamily: "AllerBold",
              fontSize: 12,
              color: "#2d180b",
            },
            headerShadowVisible: false,
            tabBarIcon: ({ color }) => icons.home(color!),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileNavigator}
          options={{
            title: "Profile",
            headerShown: false,
            tabBarActiveTintColor: "#f4e0d2",
            tabBarInactiveTintColor: "#ae5f2a",
            tabBarLabelStyle: {
              fontFamily: "AllerBold",
              fontSize: 12,
              color: "#2d180b",
            },
            tabBarIcon: ({ color }) => icons.user(color),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
export function DrawerNav() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        title: "",
        drawerPosition: "left",
        sceneContainerStyle: { backgroundColor: "white" },
        drawerType: "front",
        headerShadowVisible: true,
        drawerStyle: { width: Layout.window.width * 0.7 },
        // header: () => <CustomHeader withProfilePicture />,
        headerStyle: { height: 70 },
        headerBackground: () => <CustomHeader withProfilePicture={false} />,
      }}
      drawerContent={(props) => <AppDrawer />}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={HomeNavigator} />
    </Drawer.Navigator>
  );
}
