import React, { useReducer, useState } from "react";
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

import image from "../../Images/bg-image.jpg";

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
const innitialState = {
  name: "",
  email: "",
  password: "",
};

const LoginScreen = ({ navigation }) => {
  const [formState, dispatch] = useReducer(formReducer, innitialState);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const hideKeyBoard = () => {
    setShowKeyboard(false), Keyboard.dismiss();
  };

  const onSubmit = () => {
    setShowKeyboard(false), Keyboard.dismiss();
    console.log(formState);
    dispatch({ type: "SET_EMAIL", payload: "" });
    dispatch({ type: "SET_PASSWORD", payload: "" });
    navigation.navigate("Posts");
  };

  return (
    <TouchableWithoutFeedback onPress={hideKeyBoard}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <View style={{ ...styles.form, paddingBottom: showKeyboard ? 32 : 113 }}>
            <Text style={styles.title}>Увійти</Text>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Адреса електронної пошти"
                onFocus={() => setShowKeyboard(true)}
                onChangeText={(text) => dispatch({ type: "SET_EMAIL", payload: text })}
                onSubmitEditing={hideKeyBoard}
              />
            </View>
            <View>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Пароль"
                onFocus={() => setShowKeyboard(true)}
                onChangeText={(text) => dispatch({ type: "SET_PASSWORD", payload: text })}
                onSubmitEditing={hideKeyBoard}
              />
            </View>
            <TouchableOpacity style={styles.button} activeOpacity={0.9} onPress={onSubmit}>
              <Text style={styles.btnText}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Registartion")}>
              <Text style={styles.link}>Немає акаунту? Зареєструватися</Text>
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
    paddingHorizontal: 20,
    paddingTop: 32,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: "auto",
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

export default LoginScreen;
