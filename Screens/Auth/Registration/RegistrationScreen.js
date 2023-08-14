import React, { useState, useReducer } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";

import image from "../../../Images/bg-image.jpg";

import { innitialState } from "./State";

import { formReducer } from "./Reducer";

import { useAuth } from "../../../Routes/Context";

const RegistrationScreen = ({ navigation }) => {
  const [formState, dispatch] = useReducer(formReducer, innitialState);

  const [showKeyboard, setShowKeyboard] = useState(false);

  const hideKeyBoard = () => {
    setShowKeyboard(false), Keyboard.dismiss();
    console.log(formState);
  };

  const { setIsAuth } = useAuth();

  const onSubmit = () => {
    setShowKeyboard(false), Keyboard.dismiss();
    console.log(formState);
    dispatch({ type: "SET_EMAIL", payload: "" });
    dispatch({ type: "SET_PASSWORD", payload: "" });
    dispatch({ type: "SET_NAME", payload: "" });
    console.log(formState);
    setIsAuth(true);
    navigation.navigate("Posts");
  };
  return (
    <TouchableWithoutFeedback onPress={hideKeyBoard}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <View style={{ ...styles.form, paddingBottom: showKeyboard ? 32 : 113 }}>
            <View style={styles.icon} />
            <Text style={styles.title}>Реєстрація </Text>
            <TextInput
              style={styles.input}
              value={formState.name}
              placeholder="Логін"
              onFocus={() => setShowKeyboard(true)}
              onChangeText={(text) => dispatch({ type: "SET_NAME", payload: text })}
              onSubmitEditing={hideKeyBoard}
            />
            <TextInput
              style={styles.input}
              value={formState.email}
              placeholder="Адреса електронної пошти"
              onFocus={() => setShowKeyboard(true)}
              onChangeText={(text) => dispatch({ type: "SET_EMAIL", payload: text })}
              onSubmitEditing={hideKeyBoard}
            />
            <TextInput
              style={styles.input}
              value={formState.password}
              secureTextEntry={true}
              placeholder="Пароль"
              onFocus={() => setShowKeyboard(true)}
              onChangeText={(text) => dispatch({ type: "SET_PASSWORD", payload: text })}
              onSubmitEditing={hideKeyBoard}
            />
            <TouchableOpacity style={styles.button} onPress={onSubmit}>
              <Text style={styles.btnText}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.link}>Вже є акаунт? Увійти</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  form: {
    position: "relative",
    paddingHorizontal: 20,
    paddingTop: 92,
    marginTop: "auto",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },

  icon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: -225 }],
    width: 132,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  title: {
    fontSize: 30,
    color: "#212121",

    textAlign: "center",
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

export default RegistrationScreen;
