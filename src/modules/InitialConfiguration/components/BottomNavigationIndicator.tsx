import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import FloatingActionButton from "../../../components/FloatingActionButton";
import { icons } from "../../../utils/icons";
import { navigate } from "../../../hooks/NavigationHook";
import { RootStackParamList } from "../../../utils/types";
import { Layout } from "./../../../utils/device/index";

export default function BottomNavigationIndicator(props: {
  onNext: Function;
  index: number;
  isLanguageSelected?: boolean;
}) {
  const screens = ["Welcome", "Country"];

  return (
    <View style={styles.container}>
      <View style={styles.dotsContainer}>
        {/* {getNavigatorIndicator().map((el) => el)} */}
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: props.isLanguageSelected ? "#ae5f5e" : "#ddd",
          width: 250,
          height: 50,
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          props.onNext();
        }}
      >
        <Text style={{ color: "#fff", fontFamily: "AllerLight", fontSize: 15 }}>
          Continuer
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
  },
  dotsContainer: {
    flex: 0.4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dotActive: {
    height: 15,
    width: 15,
    borderRadius: 20,
    backgroundColor: "#00b0ff",
    marginHorizontal: 2,
  },
  dotInactive: {
    height: 10,
    width: 10,
    borderRadius: 20,
    marginHorizontal: 2,
    backgroundColor: "#ddd",
  },
});
