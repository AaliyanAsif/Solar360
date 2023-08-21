import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import firebase from "firebase/app";
import { database } from "../../Firebase/firebaseConfig";
import { getDatabase, ref, onValue } from "firebase/database";

import RealTimeDataScreen from "./RealTimeDataScreen";
import ManualControlScreen from "./ManualControlScreen";
import AutoCleanScreen from "./AutoCleanScreen";

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#333333",
        tabBarIndicatorStyle: {
          backgroundColor: "#333333",
          height: 2,
          flex: 1,
        },
        tabBarScrollEnabled: false,
        tabBarLabelStyle: { fontSize: 13 },
        // tabBarItemStyle: { width: 120 },
        tabBarStyle: {
          backgroundColor: "#ADD8E6",
          textShadowColor: "black",
          textShadowOffset: { width: 1, height: 1 },
          textShadowRadius: 10,
        },
      }}
    >
      <Tab.Screen name="Real Time Data" component={RealTimeDataScreen} />
      <Tab.Screen name="Manual Control" component={ManualControlScreen} />
      <Tab.Screen name="Automatic Clean" component={AutoCleanScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
