import React, { FC } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import color from "../misc/color";

const Screen: FC = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.APP_BG,
    paddingTop: StatusBar.currentHeight,
  },
});
