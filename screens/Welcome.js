import { StatusBar } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { BlurView } from "expo-blur";

const LOGO_URL =
  "http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-219x286.png";

const Conttainer = styled.View`
  flex: 1;
`;

const Image = styled.Image`
  position: absolute;
  z-index: -1;
  top: 0;
`;

const Logo = styled.Image`
  width: 100px;
  height: 100px;
`;

export default ({ navigation }) => {
  return (
    <Conttainer>
      <BlurView
        intensity={50}
        tint="light"
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Logo source={{ url: LOGO_URL }} />
      </BlurView>
      <Image source={require("../assets/loginBg.jpeg")} />
      <StatusBar barStyle="light-content" />
    </Conttainer>
  );
};
