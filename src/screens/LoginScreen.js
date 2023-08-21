import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import TopBar from "../components/TopBar";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <TopBar />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E3F6FF",
    flex: 1,
  },
  down: {
    marginTop: 50,
    // justifyContent:"center",
    alignItems: "center",
    // position: "absolute",
    // bottom: 100,
  },
  text: {
    fontSize: 25,
  },
});
