import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

import firebase from "firebase/app";
import { database } from "../../Firebase/firebaseConfig";
import { getDatabase, ref, onValue, set } from "firebase/database";

const AutoCleanScreen = () => {
  function cleanSolar() {
    const db = getDatabase();
    const cleanRef = ref(db, "state/clean");
    set(cleanRef, {
      value: 1,
    });

    setTimeout(stopClean, 10000);
  }

  function stopClean() {
    const db = getDatabase();
    const cleanRef = ref(db, "state/clean");
    set(cleanRef, {
      value: 0,
    });
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.coverPic}
        source={require("../Images/solar-panel-cleaning.jpg")}
      />
      <View style={styles.centre}>
        <Text style={styles.heading}> Automatic Cleaning </Text>
      </View>
      <View style={styles.middle}>
        <TouchableOpacity onPress={() => cleanSolar()} style={styles.btn}>
          <Text style={styles.btnTxt}>Clean</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AutoCleanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
  },
  bg: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  btn: {
    height: 180,
    width: 180,
    borderRadius: 100,
    backgroundColor: "#ADD8E6",
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  btnTxt: {
    fontSize: 25,
    fontWeight: "bold",
  },

  coverPic: {
    width: 500,
    height: 200,
  },

  centre: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#ADD8E6",
  },
  heading: {
    fontSize: 22,
    fontWeight: "700",
    color: "#333333",
    textAlign: "center",
    textShadowColor: "#AAAAAA",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
    padding: 10,
  },
  horizontal: {
    marginTop: 20,
    marginLeft: 10,
    // marginRight: 60,
    flexDirection: "row",
    alignItems: "center",
  },

  middle: {
    justifyContent: "center",
    alignItems: "center",
  },
});
