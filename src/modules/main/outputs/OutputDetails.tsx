import {
  Linking,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { OutputDetailsScreenProps } from "../../../utils/types";
import { Layout } from "../../../utils/device";
import { icons } from "../../../utils/icons";
import { images } from "../../../utils/images";

export default function OutputDetails({
  navigation,
  route,
}: OutputDetailsScreenProps) {
  const { output: item } = route.params;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <Text
        style={{ fontFamily: "AllerBold", fontSize: 20, alignSelf: "center" }}
      >
        {item.customer_name}
      </Text>
      <View style={styles.profileCard}>
        {item.products.map((elem) => {
          return (
            <View
              key={elem.id ?? Math.random() * 100}
              style={{ marginVertical: 25 }}
            >
              <Text style={styles.invoiceNormalText}>
                <Text style={styles.invoiceTitleText}>Nom du produit </Text>
                {elem.name}
              </Text>
              <Text style={styles.invoiceNormalText}>
                <Text style={styles.invoiceTitleText}>Quantité </Text>
                {elem.quantity}
              </Text>
              <Text
                style={[
                  styles.invoiceNormalText,
                  {
                    color: "green",
                    position: "absolute",
                    right: 25,
                    bottom: -15,
                  },
                ]}
              >
                {elem.price} TND
              </Text>
            </View>
          );
        })}
        <View style={{ marginVertical: 35 }}>
          <Text
            style={[
              styles.invoiceNormalText,
              {
                color: "#000",
                fontFamily: "AllerBold",
                position: "absolute",
                right: 25,
                bottom: -15,
              },
            ]}
          >
            Montant total {item.total_paid} TND
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          margin: 10,
          position: "relative",
          borderWidth: 1,
          padding: 15,
          borderRadius: 10,
          overflow: "scroll",
          backgroundColor: "#FFF",
          elevation: 4,
          borderColor: "#eee",
          marginVertical: 50,
          marginBottom: 150,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            width: Layout.window.width * 0.7,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <Text
              style={{
                fontFamily: "AllerBold",
                textAlign: "center",
                fontSize: 17,
              }}
            >
              {item.customer_name}
            </Text>
            <Text
              style={{
                fontFamily: "AllerLight",
                textAlign: "center",
                fontSize: 15,
                color: "#979797",
                marginTop: 5,
                marginBottom: 8,
              }}
            >
              {item.customer_adresse}
            </Text>
          </View>
        </View>

        <View style={{}}>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginVertical: 15,
            }}
            onPress={() => {
              let phoneNumber = "";

              if (Platform.OS === "android") {
                phoneNumber = `tel:${12345678}`;
              } else {
                phoneNumber = `telprompt:${12345678}`;
              }

              Linking.openURL(phoneNumber);
            }}
          >
            {icons.phoneCall("#62D39D")}
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  profileCard: {
    paddingVertical: 25,
    width: Layout.window.width * 0.95,
    alignSelf: "center",
    borderRadius: 5,
    backgroundColor: "white",
  },
  invoiceNormalText: {
    fontFamily: "AllerLight",
    fontSize: 17,
    marginHorizontal: 25,
  },
  invoiceTitleText: {
    fontFamily: "AllerBold",
    fontSize: 16,
    marginHorizontal: 25,
  },
});
