import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator, { DrawerNav } from "./home/HomeNavigator";
import AuthNavigator from "./public/AuthNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppNavigatorProps, RootStackParamList } from "../utils/types";
import InitialConfigNavigator from "./public/InitialConfigNavigator";
import { navigationRef } from "../hooks/NavigationHook";
import { StatusBar, View } from "react-native";
//import FlashMessage from 'react-native-flash-message';
const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * The App navigator is the root navigator of the app (Stack navigator) .
 * Contains in itself other navigators :
 * InitialConfig Navigator, Auth Navigator and the Home Navigator
 */

export default function RootNavigator(props: AppNavigatorProps) {
  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <NavigationContainer ref={navigationRef}>
        {/* <FlashMessage /> */}
        <Stack.Navigator initialRouteName={props.initialRouteName}>
          <Stack.Screen
            name="InitialConfig"
            component={InitialConfigNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Auth"
            component={AuthNavigator}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen
						name='Home'
						component={HomeNavigator}
						options={{ headerShown: false }}
					/> */}
          <Stack.Screen
            name="App"
            component={DrawerNav}
            options={{
              headerShown: false,
              headerShadowVisible: false,
              contentStyle: { backgroundColor: "white" },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
