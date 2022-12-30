import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../../utils/icons";
//import { t } from "i18next";
import { navigate } from "../../hooks/NavigationHook";
import { images } from "../../utils/images";

export default function AppDrawer() {
  type routes = "List" | "Archive" | "Finance";
  const [selectedRoute, setSelectedRoute] = useState<routes>("List");
  const [showListSales, setShowListSales] = useState(false);
  return (
    <View style={{ backgroundColor: "#FFFF", flex: 1 }}>
      <View style={{ marginVertical: 35, alignSelf: "center" }}>
        {icons.logo_maison_fondant_Home}
      </View>
      <TouchableOpacity
        onPress={() => {
          navigate("Landing");
          setSelectedRoute("List");
        }}
        style={{
          width: "90%",
          marginHorizontal: 15,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          borderRadius: 9,
        }}
      >
        <View style={{ marginHorizontal: 10 }}>
          {icons.dashboard_icon("#ae5f2a")}
        </View>
        <Text
          style={{
            fontFamily: "AllerLight",
            fontSize: 19,
            color: "black",
            margin: 5,
            textAlign: "center",
          }}
        >
          Tableau de bord
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSelectedRoute("List");
          navigate("Outputs");
        }}
        style={{
          width: "90%",
          marginHorizontal: 15,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          borderRadius: 9,
        }}
      >
        <View style={{ marginHorizontal: 10 }}>{icons.sales}</View>
        <Text
          style={{
            fontFamily: "AllerLight",
            fontSize: 19,
            color: "black",
            margin: 5,
            textAlign: "center",
          }}
        >
          Vente
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          //@ts-ignore
          navigate("product");
          setSelectedRoute("List");
          setShowListSales(true);
        }}
        style={{
          width: "90%",
          marginHorizontal: 15,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          borderRadius: 9,
        }}
      >
        <View style={{ marginHorizontal: 10 }}>{icons.product}</View>
        <Text
          style={{
            fontFamily: "AllerLight",
            fontSize: 19,
            color: "black",
            margin: 5,
            textAlign: "center",
          }}
        >
          Produit
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigate("Clients");
          setSelectedRoute("List");
          setShowListSales(true);
        }}
        style={{
          width: "90%",
          marginHorizontal: 15,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          borderRadius: 9,
        }}
      >
        <View style={{ marginHorizontal: 10 }}>{icons.clients("#ae5f2a")}</View>
        <Text
          style={{
            fontFamily: "AllerLight",
            fontSize: 19,
            color: "black",
            margin: 5,
            textAlign: "center",
          }}
        >
          Clients
        </Text>
      </TouchableOpacity>
    </View>
  );
}
