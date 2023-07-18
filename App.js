import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import image from "./Images/bg-image.jpg";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
// import * as Font from "expo-font";
// import AppLoading from "expo";

// const loadApplication = async () => {
//   await Font.loadAsync({
//     "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
//   });
// };

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          {/* <RegistrationScreen /> */}
          <LoginScreen />
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});

export default App;
