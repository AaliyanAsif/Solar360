import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const TopBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          source={{
            uri: "https://www.pngall.com/wp-content/uploads/2016/07/Sun-PNG.png",
          }}
          style={styles.logo}
        />
        <Image
          source={{
            uri: "https://assets.stickpng.com/images/587675a3a6b4d03bb3b81d37.png",
          }}
          style={styles.logo2}
        />
      </View>

      <View style={styles.centre}>
        <Text style={styles.heading}>Solar 360</Text>
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8DCBE6",
  },

  top: {
    margin: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    height: 110,
    width: 110,
    // backgroundColor: "black",
  },

  logo2: {
    // backgroundColor: "#fff",
    width: 90,
    height: 90,
    flexDirection: "row",
    position: "absolute",
    // right: 93,
    // top: 25,
  },

  centre: {
    justifyContent: "center",
    alignItems: "center",
  },

  heading: {
    fontSize: 25,
    fontWeight: "700",
  },
});
