import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard } from "react-native";

const LoginScreen = () => {
  const [showKeyboard, setShowKeyboard] = useState(false);

  const hideKeyBoard = () => {
    setShowKeyboard(false), Keyboard.dismiss();
  };
  return (
    <View style={{ ...styles.form, paddingBottom: showKeyboard ? 32 : 113 }}>
      <View>
        <Text style={styles.title}>Увійти</Text>
        <TextInput
          style={styles.input}
          placeholder="Адреса електронної пошти"
          onFocus={() => setShowKeyboard(true)}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Пароль"
          onFocus={() => setShowKeyboard(true)}
        />
        <TouchableOpacity style={styles.button} activeOpacity={0.9} onPress={hideKeyBoard}>
          <Text style={styles.btnText}>Sign in</Text>
        </TouchableOpacity>
        <Text style={styles.link}>Немає акаунту? Зареєструватися</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default LoginScreen;
