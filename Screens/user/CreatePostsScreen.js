import React, { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CommonActions } from "@react-navigation/native";

const CreatePostsScreen = ({ navigation }) => {
  const [postTitle, setPostTitle] = useState("");
  const handleSubmit = () => {
    console.log(postTitle);
    setPostTitle("");
  };
  const absolute = () => {
    navigation.dispatch(CommonActions.goBack());
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Публікації</Text>
        </View>
        <TouchableOpacity style={styles.iconContainer} onPress={absolute}>
          <Ionicons name="arrow-back" size={24} color="#212121CC" />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}></View>
      <Text style={styles.text}>Завантажте фото</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Назва..."
          value={postTitle}
          onChangeText={setPostTitle}
        />
      </View>
      <View style={styles.inputLocationContainer}>
        <View style={styles.iconLocationContainer}>
          <EvilIcons name="location" size={24} color="#BDBDBD" />
        </View>
        <TextInput style={styles.inputLocation} placeholder="Місцевість..." />
      </View>
      <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Опубліковати</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,

    backgroundColor: "#ffffff",
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
  imageContainer: {
    width: "100%",
    height: 240,
    marginTop: 32,
    backgroundColor: "#F6F6F6",
  },
  text: {
    marginTop: 8,

    fontSize: 16,
    color: "#BDBDBD",
  },
  inputContainer: {
    marginTop: 32,
  },
  inputLocationContainer: {
    marginTop: 32,
    position: "relative",
  },
  input: {
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    fontSize: 16,
    color: "#212121",
  },
  inputLocation: {
    paddingBottom: 15,
    paddingLeft: 28,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  iconLocationContainer: {
    position: "absolute",
    top: 0, // Выравнивание иконки по центру инпута
    left: 0,
  },
  button: {
    paddingVertical: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 50,

    marginTop: 32,
  },

  buttonText: {
    textAlign: "center",

    fontSize: 16,
    color: "#ffffff",
  },
});

export default CreatePostsScreen;
