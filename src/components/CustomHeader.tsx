import { Pressable, StyleSheet, Image, View, Text } from "react-native";
import React, { useState } from "react";
import { navigate } from "../hooks/NavigationHook";
import { icons } from "../utils/icons";
//import { CurrentUserService } from '../services/CurrentUserService';
import { apiAdress } from "../utils/constants";
import { svgs } from "../utils/svg";
import { Layout } from "../utils/device";
import { Platform } from "react-native";
import { images } from "./../../assets/images/index";
export default function CustomHeader(props: { withProfilePicture: boolean }) {
  const [userPicture, setUserPicture] = useState();
  // apiAdress.baseUrl +
  // 	CurrentUserService?.getInstance().getCurrentUser().picture
  return (
    <View
      style={{
        width: Layout.window.width,
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          position: "absolute",
          right: 0,
          left: 0,
          top: 10,
          marginTop: -22,
        }}
      >
        {icons.logo_maison_fondant_Home2}
      </Text>
      <Pressable
        onPress={() => {
          navigate("Profile");
        }}
      >
        <Image
          source={images.profilePictureMale}
          style={{
            height: 35,
            width: 35,
            borderRadius: 52,
            borderWidth: 2,
            marginRight: 15,
            marginTop: 20,
            position: "absolute",
            right: 0,
            padding: 5,
            borderColor: "#ae5f2a",
          }}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
