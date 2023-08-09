import React, { useState } from "react";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { useRoute } from "./Routes/Routes";

const App = () => {
  const routing = useRoute(true);
  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default App;
