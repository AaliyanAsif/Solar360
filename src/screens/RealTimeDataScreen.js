import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { Image } from "react-native";

import firebase from "firebase/app";
import { database } from "../../Firebase/firebaseConfig";
import { getDatabase, ref, onValue } from "firebase/database";

import Box from "../components/Box";

const RealTimeDataScreen = () => {
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [xAngle, setXAngle] = useState("");
  const [yAngle, setYAngle] = useState("");
  const [current, setCurrent] = useState("");
  const [voltage, setVoltage] = useState("");
  const [power, setPower] = useState("");
  const [lightIntensity, setLightIntensity] = useState("");

  const db = getDatabase();

  const tempRef = ref(db, "sensors/temperature");
  const humiRef = ref(db, "sensors/humidity");
  const xRef = ref(db, "sensors/Xangle");
  const yRef = ref(db, "sensors/Yangle");
  const currentRef = ref(db, "sensors/current");
  const voltageRef = ref(db, "sensors/voltage");
  const powerRef = ref(db, "sensors/power");
  const lightRef = ref(db, "sensors/lightIntensity");

  useEffect(() => {
    onValue(tempRef, (snapshot) => {
      const temp = snapshot.val();
      setTemperature(temp);
    });

    onValue(humiRef, (snapshot) => {
      const humi = snapshot.val();
      setHumidity(humi);
    });

    onValue(xRef, (snapshot) => {
      const x = snapshot.val();
      setXAngle(x);
    });

    onValue(yRef, (snapshot) => {
      const y = snapshot.val();
      setYAngle(y);
    });

    onValue(currentRef, (snapshot) => {
      const currentt = snapshot.val();
      setCurrent(currentt);
    });

    onValue(voltageRef, (snapshot) => {
      const volt = snapshot.val();
      setVoltage(volt);
    });

    // onValue(powerRef, (snapshot) => {
    //   const powerr = snapshot.val();
    //   setPower(powerr);
    // });

    setPower(voltage * current);

    onValue(lightRef, (snapshot) => {
      const lightt = snapshot.val();
      setLightIntensity(lightt);
    });
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.coverPic}
          source={require("../Images/AllEarth-Tracker.webp")}
        />

        <View style={styles.centre}>
          <Text style={styles.heading}> Real-time Data </Text>
        </View>

        <View style={styles.main}>
          <View style={styles.horizontal}>
            <Box
              text="Humidity"
              value={humidity + "%"}
              Image={require("../Images/Humidityy.jpg")}
            />
            <View style={styles.box}>
              <Box
                text="Temperature"
                value={temperature + " C"}
                Image={require("../Images/temperature.webp")}
              />
            </View>
          </View>

          <View style={styles.horizontal}>
            <Box
              text="Current mA"
              value={current}
              Image={require("../Images/lightning-5.jpg")}
            />
            <View style={styles.box}>
              <Box
                text="Voltage V"
                value={voltage}
                Image={require("../Images/volatge.png")}
              />
            </View>
          </View>

          <View style={styles.horizontal}>
            <Box
              text="Light Intesnsity"
              value={lightIntensity}
              Image={require("../Images/light.jpg")}
            />
            <View style={styles.box}>
              <Box
                text="Power"
                value={power}
                Image={require("../Images/power.png")}
              />
            </View>
          </View>

          <View style={styles.horizontal}>
            <Box
              Image={require("../Images/y.png")}
              text="Y axis"
              value={yAngle + "°"}
            />
            <View style={styles.box}>
              <Box
                text="X axis"
                value={xAngle + "°"}
                Image={require("../Images/x.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RealTimeDataScreen;

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
    width: "100%",
    height: 200,
  },
  main: {
    padding: 20,
  },
  horizontal: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-evenly",
  },

  box: {
    marginLeft: 20,
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
});
