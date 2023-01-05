import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";

import { images } from "../../utils/images";
import { icons } from "../../utils/icons";
import { Layout } from "../../utils/device";

import { MenuScreenProps } from "../../utils/types";

export default function ProfileMenu({ navigation, route }: MenuScreenProps) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileCard}>
          <TouchableOpacity
            onPress={() => {
              //navigation.navigate('Me');
            }}
          >
            <View style={{ flexDirection: "column", alignSelf: "center" }}>
              <View style={styles.profilePicture}>
                <Image
                  source={images.profilePictureMale}
                  style={styles.picture}
                />
              </View>
              <View style={styles.row}>
                <Text style={styles.mainText}>Khaled Ghaffari</Text>
                <Text style={{ marginTop: 5 }}> {icons.edit2}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.subText}>Administrateur</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5F5F5",
  },
  header: {
    flex: 0.2,
    marginTop: 15,
    width: Layout.window.width * 0.9,
    height: 200,
    borderRadius: 14,
    backgroundColor: "white",
    justifyContent: "center",
    alignSelf: "center",
  },
  profileCard: {
    paddingVertical: 5,
    marginTop: 15,
    width: Layout.window.width * 0.95,
    alignSelf: "center",
    borderRadius: 5,
    shadowColor: "#000",
    // shadowOffset: {
    // 	width: 0,
    // 	height: 8,
    // },
    // shadowOpacity: 0.44,
    // shadowRadius: 10.32,

    // elevation: 16,
  },
  headerBackground: {
    flex: 1,
  },
  profilePicture: {
    height: Layout.window.width * 0.155,
    width: Layout.window.width,

    alignItems: "center",
  },
  picture: {
    height: Layout.window.width * 0.18,
    width: Layout.window.width * 0.18,
    borderRadius: 60,

    borderColor: "#ae5f5e",
    borderWidth: 2,
  },
  settingCard: {
    flex: 0.6,
    width: Layout.window.width * 0.95,
    backgroundColor: "white",
    alignSelf: "center",
    marginTop: 7.5,
    borderRadius: 5,
  },
  row: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 15,
  },
  col: {
    flexDirection: "column",
  },
  mainText: {
    fontFamily: "AllerBold",
    textAlign: "center",
    color: "#1D1E25",
    fontSize: 22,

    marginHorizontal: 15,
  },
  subText: {
    fontFamily: "AllerLight",
    fontSize: 14,
    color: "#777",
    marginHorizontal: 5,
  },
  arrow: {
    color: "#ae5f5e",
  },
  sendMessageContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "space-between",
    padding: 5,
    backgroundColor: "#fff",
    width: Layout.window.width * 0.95,
    borderBottomEndRadius: 7,
    borderBottomStartRadius: 7,
  },
  TextField: {
    backgroundColor: "#fff",
    alignSelf: "center",
    marginLeft: 50,
    flex: 0.85,
    padding: 5,
  },
  textInput: {
    fontFamily: "AllerLight",
    textAlign: "left",
    textAlignVertical: "center",
    backgroundColor: "#eee",
    padding: 15,
    borderRadius: 10,
  },
  sendIcon: {
    flex: 0.3,
    position: "absolute",
    right: 12,
  },
  inputHeader: {
    marginTop: 15,
    textAlign: "justify",
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  eye: {
    position: "absolute",
    right: 8,
    top: 47,
    height: 50,
    width: 60,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
