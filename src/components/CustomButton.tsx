import { Text, View, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { Layout } from "../utils/device";

type ButtonProps = {
  onPress: Function;
  name: string;
  color: string;
  component?: JSX.Element;
  fontColor: string;
  widthPerDevice?: number;
  borderRadius?: number;
  borderColor?: string;
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | undefined;
  disabled?: boolean;
  opacity?: number;
};

export default class CustomButton extends Component<ButtonProps> {
  render() {
    return (
      <TouchableOpacity
        disabled={this.props.disabled}
        onPress={() => this.props.onPress()}
      >
        <View
          style={{
            opacity: this.props.opacity ?? 1,
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 5,
            marginBottom: 5,
            height: 50,
            borderWidth: 1,
            marginRight: 8,
            borderColor: this.props.borderColor ?? "#eee",
            borderRadius: this.props.borderRadius ?? 5,
            alignItems: "center",
            alignSelf: "center",
            width:
              this.props.widthPerDevice! == undefined
                ? Layout.window.width * 0.6
                : Layout.window.width * this.props.widthPerDevice,
            backgroundColor: this.props.color,
            flexDirection: "row",
            justifyContent:
              this.props.justifyContent == undefined
                ? "center"
                : this.props.justifyContent,
          }}
        >
          {this.props.component && this.props.component}
          {this.props.component && <View style={{ width: 5 }} />}
          <Text
            style={{
              fontSize: 16,
              color: this.props.fontColor,
              fontFamily: "AllerLight",
            }}
          >
            <View style={{ width: 5 }}></View>
            {this.props.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
