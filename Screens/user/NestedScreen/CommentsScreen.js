import React from "react";
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { CommonActions } from "@react-navigation/native";

const CommentsScreen = ({ navigation }) => {
  const goBack = () => {
    navigation.dispatch(CommonActions.goBack());
  };

  const handleReturnPress = () => {
    navigation.dispatch(CommonActions.goBack());
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 1 : 0} // Змініть значення на ваш розмір відступу
      style={styles.container}
    >
      <View style={styles.headerContainer}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Коментарі</Text>
        </View>
        <TouchableOpacity style={styles.iconContainer} onPress={goBack}>
          <Ionicons name="arrow-back" size={24} color="#212121CC" />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Коментувати" returnKeyType="done" />
        <TouchableOpacity style={styles.sendIconContainer}>
          <AntDesign name="arrowup" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  headerContainer: {
    marginTop: 30,
    paddingBottom: 11,
    paddingTop: 27,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 17,
    color: "#212121",
    textAlign: "center",
    fontWeight: "bold",
  },
  iconContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  inputContainer: {
    marginTop: "auto",
  },
  input: {
    position: "relative",
    height: 50,
    borderWidth: 1,
    marginHorizontal: 16,
    borderRadius: 50,
    borderColor: "#F6F6F6",
    marginBottom: 30,
    paddingLeft: 16,
    backgroundColor: "#F6F6F6",
  },
  sendIconContainer: {
    padding: 8,
    borderRadius: 50,
    backgroundColor: "#FF6C00",
    position: "absolute",
    top: 6,
    right: 30,
  },
});

export default CommentsScreen;
