import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CompanyProfileStackParamList } from "../../../utils/types";
import {
  TouchableOpacity,
  Text,
  DeviceEventEmitter,
  View,
  Platform,
} from "react-native";
import ProfileMenu from "../../../modules/Profile/ProfileMenu";
import { StatusBar } from "react-native";
import { Layout } from "../../../utils/device";
import { icons } from "../../../utils/icons";
import BackButton from "../../public/BackButtom";
const emiter = DeviceEventEmitter;

const Stack = createNativeStackNavigator<CompanyProfileStackParamList>();

export default function ProfileNavigator() {
  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: { fontFamily: "AllerLight" },
          contentStyle: {
            backgroundColor: "white",
          },
        }}
      >
        <Stack.Screen
          name="Menu"
          component={ProfileMenu}
          options={({ navigation, route }) => {
            return {
              tabBarLabelStyle: { fontFamily: "AllerLight", fontSize: 12 },
              headerTitle: "",
              headerShadowVisible: false,
              headerStyle: { backgroundColor: "#f5F5F5" },
              headerLeft: () => (
                <BackButton
                  onPress={() => {
                    navigation.goBack();
                  }}
                />
              ),
            };
          }}
        />
      </Stack.Navigator>
    </>
  );
}
