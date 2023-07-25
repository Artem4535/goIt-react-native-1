import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import image from "./Images/bg-image.jpg";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

const App = () => {
  return <RegistrationScreen />;
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    paddingHorizontal: 20,
    paddingTop: 32,
    marginTop: "auto",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    color: "#212121",
    marginBottom: 32,
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginTop: 20,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  btnText: {
    textAlign: "center",
    color: "#FFFFFF",
  },
  link: {
    marginTop: 10,
    textAlign: "center",
    color: "#1B4371",
  },
});
