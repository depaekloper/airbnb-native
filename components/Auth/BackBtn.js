import React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const isAndroid = Platform.OS === "android";

const Contailner = styled.View`
  padding-left: 20px;
`;

export default () => (
  <Contailner style={{ paddingLeft: 20 }}>
    <Ionicons name={isAndroid ? "md-arrow-down" : "ios-arrow-down"} size={28} />
  </Contailner>
);
