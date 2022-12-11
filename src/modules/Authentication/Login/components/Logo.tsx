import { Image, View } from "react-native";
import React, { Component } from "react";
import { images } from "../../../../utils/images";

type LoginLogoProps = {
  height: number;
  sizeLogo?: number;
};

export default class LoginLogo extends Component<LoginLogoProps> {
  constructor(props: LoginLogoProps) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: this.props.height,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={images.trust}
            style={{
              height: this.props.sizeLogo ?? 100,
              width: this.props.sizeLogo ?? 100,
            }}
          />
        </View>
      </View>
    );
  }
}
