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
import { ProductScreenProps } from "../../../utils/types";
type Props = {};
const initProducts: Products[] = [];
export default function Product(props: ProductScreenProps) {
  const [products, setProducts] = useState(initProducts);
  const [productsSearch, setProductsSearch] = useState(initProducts);
  const [searchIcon, setsearchIcon] = useState(true);

  useEffect(() => {
    ProductService.getInstance()
      .getAllProducts()
      .then((data) => {
        let _products = [];
        for (let elem of data!) {
          if (elem.name && elem.category) _products.push(new Products(elem));
        }
        setProducts(_products);
        setProductsSearch(_products);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: Layout.window.width * 0.95,
          alignItems: "flex-end",

          backgroundColor: "#fff",
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
            setProductsSearch(
              products.filter((value) => {
                return (
                  value.name?.toLowerCase().includes(text.toLowerCase()) ||
                  value.category.name
                    ?.toLowerCase()
                    .includes(text.toLowerCase()) ||
                  value.category.description
                    ?.toLowerCase()
                    .includes(text.toLowerCase())
                );
              })
            );
          }}
        />
      </View>
      <FlatList
        numColumns={1}
        style={{ backgroundColor: "#fff" }}
        data={productsSearch}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              margin: 10,
              borderWidth: 1,
              padding: 15,
              borderRadius: 10,
              overflow: "scroll",
              backgroundColor: "#FFF",
              elevation: 2,
              borderColor: "#fff",
            }}
          >
            <View
              style={{
                flexDirection: "column",
                width: Layout.window.width * 0.5,
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
                    marginTop: 10,
                    marginBottom: 8,
                  }}
                >
                  {item.category?.name}
                </Text>
                <Text
                  style={{
                    fontFamily: "AllerBold",
                    textAlign: "center",
                    fontSize: 14,
                  }}
                >
                  {item.quantity} Pi??ce
                </Text>
                <Text
                  style={{
                    fontFamily: "AllerBold",
                    textAlign: "center",
                    fontSize: 14,
                    color: "#5ba6e4",
                  }}
                >
                  {item.price} DT/pi??ce
                </Text>
              </View>
            </View>
            {item.image ? (
              <View
                style={{
                  width: Layout.window.width * 0.01,
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  resizeMode="center"
                  style={{
                    width: 120,
                    aspectRatio: 1,
                    borderRadius: 10,
                  }}
                />
              </View>
            ) : (
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "#eee",
                  borderRadius: 10,
                }}
              >
                <Image
                  source={images.noPhoto}
                  resizeMode="center"
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: 10,
                  }}
                />
              </View>
            )}
          </View>
        )}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    width: Layout.window.width,

    backgroundColor: "#fff",
  },
});
