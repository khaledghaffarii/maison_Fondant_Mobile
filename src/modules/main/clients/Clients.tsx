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
  Linking,
  Platform,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Products } from "../../../models/Products";
import { ProductService } from "../../../services/ProductServices";
import { images } from "../../../utils/images";
import { Layout } from "./../../../utils/device/index";
import { icons } from "./../../../utils/icons/index";
import { navigate } from "../../../hooks/NavigationHook";
import { ClientsScreenProps } from "../../../utils/types";
import { ClientsService } from "../../../services/ClientService";
import { Client } from "../../../models/Client";
const initProducts: Client[] = [];
export default function Clients(props: ClientsScreenProps) {
  const [clients, setClients] = useState(initProducts);
  const [clientsSearch, setClientsSearch] = useState(initProducts);
  const [searchIcon, setsearchIcon] = useState(true);
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);
  useEffect(() => {
    ClientsService.getInstance()
      .getAllClients()
      .then((data) => {
        setClients(data);
        setClientsSearch(data);
      });
  }, []);

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
          onChangeText={(text) => {
            setClientsSearch(
              clients.filter((value) => {
                return (
                  value.name?.toLowerCase().includes(text.toLowerCase()) ||
                  value.email?.toLowerCase().includes(text.toLowerCase()) ||
                  value.phone?.toLowerCase().includes(text.toLowerCase())
                );
              })
            );
          }}
        />
      </View>
      <FlatList
        numColumns={1}
        data={clientsSearch}
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
                elevation: 2,
                borderColor: "#eee",
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
                    {item.name}
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
                    {item.email}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "AllerBold",
                      textAlign: "center",
                      fontSize: 14,
                    }}
                  >
                    T??l??phone {item.phone}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "AllerBold",
                      textAlign: "center",
                      fontSize: 14,
                      color: "#5ba6e4",
                    }}
                  >
                    {item.address}
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ position: "absolute", top: 15, right: 25 }}>
              {item.is_franchise ? (
                <View
                  style={{
                    backgroundColor: "#FFD88D",
                    padding: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                    marginTop: 5,
                  }}
                >
                  <Text style={{ fontFamily: "AllerLight", color: "#222" }}>
                    Franchise
                  </Text>
                </View>
              ) : (
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
                    Mall
                  </Text>
                </View>
              )}
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginVertical: 15,
                }}
                onPress={() => {
                  let phoneNumber = "";

                  if (Platform.OS === "android") {
                    phoneNumber = `tel:${item.phone}`;
                  } else {
                    phoneNumber = `telprompt:${item.phone}`;
                  }

                  Linking.openURL(phoneNumber);
                }}
              >
                {icons.phoneCall("#62D39D")}
              </TouchableOpacity>
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
