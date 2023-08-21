import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Box = (props) => {
  return (
    <View style={styles.infoBox}>
      <View style={styles.horizontal}>
        <Image style={styles.icon} source={props.Image} />
      </View>
      <View style={styles.centre}>
        <Text style={styles.infoText}>{props.text}</Text>
        <Text style={styles.valueText}>{props.value}</Text>
      </View>
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  infoBox: {
    width: 150,
    height: 150,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    borderRadius: 20,
    elevation: 5,
    shadowColor: "#black",
  },

  icon: {
    width: "100%",
    height: 80,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  infoText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#333333",
    marginTop: 10,
    textShadowColor: "#AAAAAA",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },

  centre: {
    justifyContent: "center",
    alignItems: "center",
  },

  valueText: {
    color: "#FF585D",
    marginTop: 10,
    fontSize: 20,
    fontWeight: "700",
    textShadowColor: "#AAAAAA",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
});
