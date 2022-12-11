import React, { Fragment, Component, useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import Modal from "react-native-modal";
import { Layout } from "../utils/device";

export function SwipeableModal(props: {
  isVisible: boolean;
  close: Function;
  children?: React.ReactNode;
  flex?: number;
}) {
  return (
    <Modal
      isVisible={props.isVisible}
      onBackButtonPress={() => {
        props.close();
      }}
      onBackdropPress={() => {
        props.close();
      }}
      backdropOpacity={0.7}
    >
      <View style={styles.modalContainer}>{props.children}</View>
    </Modal>
  );
}

export default SwipeableModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 0.3,
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 15,
    width: Layout.window.width * 0.9,
    alignSelf: "center",
    padding: 25,
  },
  description: {
    padding: 20,
    fontSize: 18,
  },
});
