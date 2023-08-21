import {
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";
import firebase from "firebase/app";
import { database } from "../../Firebase/firebaseConfig";
import { getDatabase, ref, onValue, set } from "firebase/database";

const ManualControlScreen = () => {
  function writeAxisData(isEnabled, value, valueY) {
    const db = getDatabase();
    const ManualRef = ref(db, "state/manual");
    set(ManualRef, {
      isEnabled: isEnabled,
      Xvalue: value,
      Yvalue: valueY,
    });
  }

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [Xvalue, setXValue] = useState(0);
  const [Yvalue, setYValue] = useState(0);

  return (
    <View style={styles.container}>
      <Image
        style={styles.coverPic}
        source={require("../Images/solarManual.jpg")}
      />

      <View style={styles.centre}>
        <Text style={styles.heading}> Manual Control </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#767577" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      <View style={styles.horizontal}>
        <Text style={styles.inputTxt}> X-Axis </Text>

        {/* <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange={setXValue}
          value={Xvalue}
        /> */}

        <TextInput
          style={styles.input}
          onChangeText={setXValue}
          value={Xvalue}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.horizontal}>
        <Text style={styles.inputTxt}> Y-Axis </Text>
        <TextInput
          style={styles.input}
          onChangeText={setYValue}
          value={Yvalue}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.middle}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => writeAxisData(isEnabled, Xvalue, Yvalue)}
        >
          <Text style={styles.btnText}> Update</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.end}>
        <Text style={styles.disclamer}>
          Make sure the value is between 0 and 180 for the solar tracker to
          function properly
        </Text>
      </View>
    </View>
  );
};

export default ManualControlScreen;

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
  coverPic: {
    width: 500,
    height: 200,
  },

  centre: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#ADD8E6",
    marginBottom: 20,
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
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: "70%",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 5,
    padding: 10,
  },
  btn: {
    height: 50,
    width: 100,
    backgroundColor: "#ADD8E6",
    borderRadius: 10,
    marginTop: "8%",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 20,
    color: "#333333",
    fontWeight: "bold",
    textAlign: "center",
  },
  inputTxt: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    textShadowColor: "#3e3e3e",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
    marginRight: 10,
  },

  middle: {
    justifyContent: "center",
    alignItems: "center",
  },

  disclamer: {
    width: "100%",
    padding: 20,
    backgroundColor: "#f5dd4b",
    fontSize: 19,
    textAlign: "center",
    position: "relative",
    top: 70,
  },
});
