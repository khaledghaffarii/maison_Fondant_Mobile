import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  LogBox,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Products } from "../../../models/Products";
import { ProductService } from "../../../services/ProductServices";
import { images } from "../../../utils/images";
import { Layout } from "./../../../utils/device/index";
import { icons } from "./../../../utils/icons/index";
import { navigate } from "../../../hooks/NavigationHook";
import { OutputsScreenProps, ProductScreenProps } from "../../../utils/types";
import { ClientsService } from "../../../services/ClientService";
import { Client } from "../../../models/Client";
import { Output } from "../../../models/Output";
import { RecipeService } from "../../../services/RecipeService";
const initProducts: Output[] = [];
export default function Outputs(props: OutputsScreenProps) {
  const [devices, setDevices] = useState(initProducts);
  const [searchIcon, setsearchIcon] = useState(true);

  useEffect(() => {
    setDevices([]);
    RecipeService.getInstance()
      .getOutputs()
      .then((data) => {
        setDevices(data);
      });
  }, []);

  function numberWithCommas(x: number) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: Layout.window.width * 0.95,
          alignItems: "flex-end",
          marginTop: 15,
        }}
      ></View>
      <View
        style={{
          borderWidth: 1,
          width: Layout.window.width * 0.9,
          alignSelf: "center",
          padding: 12,
          borderRadius: 7,
          borderColor: "#9999",
          marginHorizontal: 25,
          flexDirection: "row",
        }}
      >
        {searchIcon ? (
          <View style={{ marginTop: 5, marginRight: 5 }}>{icons.search}</View>
        ) : null}
        <TextInput
          style={{
            width: Layout.window.width,
          }}
          placeholder=" Chercher"
        />
      </View>
      <FlatList
        numColumns={1}
        data={devices}
        style={{ marginBottom: 70 }}
        renderItem={({ item }) => (
          <>
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
                elevation: 9,
                borderColor: "#eee",
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  flex: 1,
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

                  <>
                    {item.products.map((elem) => (
                      <Text
                        style={{
                          fontFamily: "AllerBold",
                          textAlign: "center",
                          fontSize: 14,
                          color: "#5ba6e4",
                        }}
                      >
                        - {elem.name} x{elem.quantity}
                      </Text>
                    ))}
                  </>
                  <Text
                    style={{
                      fontFamily: "AllerBold",
                      textAlign: "center",
                      fontSize: 14,
                      color: "#60D39C",
                      alignSelf: "flex-end",
                    }}
                  >
                    {numberWithCommas(item.total_paid)} TND
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ position: "absolute", top: 15, right: 25 }}>
              {item.billed && (
                <View
                  style={{
                    backgroundColor: "#60D39C",
                    padding: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                    marginTop: 5,
                  }}
                >
                  <Text style={{ fontFamily: "AllerLight", color: "white" }}>
                    Facturé
                  </Text>
                </View>
              )}
              {item.delivery_note_sent && (
                <View
                  style={{
                    backgroundColor: "#5ba6e4",
                    padding: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                    marginTop: 5,
                  }}
                >
                  <Text style={{ fontFamily: "AllerLight", color: "white" }}>
                    Note envoyé
                  </Text>
                </View>
              )}
            </View>
          </>
        )}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: Layout.window.width,
  },
});
