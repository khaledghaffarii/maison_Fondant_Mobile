import { Dimensions, StatusBar } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const statusBar = StatusBar.currentHeight;

export const Layout = {
  window: {
    width,
    height,
    statusBar,
  },
  isSmallDevice: width < 375,
};
