import React, { useState, useEffect } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { FontAwesome } from "@expo/vector-icons";
import * as Location from "expo-location";

import { CommonActions } from "@react-navigation/native";
import { Camera } from "expo-camera";

const CreatePostsScreen = ({ navigation }) => {
  const [postTitle, setPostTitle] = useState("");
  const [snap, setSnap] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState("");
  const [postLocation, setPostLocation] = useState("");
  const [coords, setCoords] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }
    })();
  }, []);

  const goBack = () => {
    navigation.dispatch(CommonActions.goBack());
  };

  const takePhoto = async () => {
    const location = await Location.getCurrentPositionAsync({});
    const coord = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    setCoords(coord);
    const takeImage = await snap.takePictureAsync();
    setPhoto(takeImage.uri);
  };

  const removePhoto = () => {
    setPhoto("");
  };

  const reset = () => {
    setPostTitle("");
    setPhoto("");
    setPostLocation("");
    setCoords("");
  };

  const onClickThashIcon = () => {
    reset();
    navigation.navigate("Posts");
  };

  const handleSubmit = async () => {
    const newPost = {
      postTitle,
      photo,
      postLocation,
      coords,
    };
    setPosts((prev) => [...prev, newPost]);
    navigation.navigate("DefaultPostScreen", { newPost });
    reset();
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Публікації</Text>
        </View>
        <TouchableOpacity style={styles.iconContainer} onPress={goBack}>
          <Ionicons name="arrow-back" size={24} color="#212121CC" />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        {photo ? (
          <View style={{ flex: 1 }}>
            <Image source={{ uri: photo }} style={styles.tookImageContainer} />
            <TouchableOpacity style={styles.removePhotoIcon} onPress={removePhoto}>
              <EvilIcons name="close" size={30} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{ flex: 1, borderRadius: 8 }}>
            <Camera style={styles.camera} ref={setSnap} type={type}>
              <View style={styles.centeredIconContainer}>
                <TouchableOpacity activeOpacity={0.7} style={styles.snap} onPress={takePhoto}>
                  <FontAwesome name="camera" size={24} color="#BDBDBD" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.flitCamera}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}
              >
                <Ionicons name="camera-reverse-outline" size={30} color="#FFFFFF" />
              </TouchableOpacity>
            </Camera>
          </View>
        )}
      </View>

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
        <TextInput
          style={styles.inputLocation}
          placeholder="Місцевість..."
          value={postLocation}
          onChangeText={setPostLocation}
        />
      </View>
      <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Опубліковати</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.trashContainer} onPress={onClickThashIcon}>
        <Feather name="trash-2" size={24} color="#BDBDBD" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
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
  imageContainer: {
    width: "100%",
    height: 250,
    marginTop: 32,
    backgroundColor: "#F6F6F6",
  },
  camera: {
    flex: 1,
    position: "relative",
  },
  centeredIconContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 8,
  },
  snap: {
    width: 60,
    padding: 18,
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
  },
  flitCamera: {
    alignItems: "flex-end",
    position: "absolute",
    top: 10,
    right: 20,
  },

  tookImageContainer: {
    flex: 1,
    position: "relative",
    borderRadius: 8,
  },
  removePhotoIcon: {
    position: "absolute",
    top: 8,
    right: 10,
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
    top: 0,
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
  trashContainer: {
    width: 70,

    justifyContent: "center",
    backgroundColor: "#F6F6F6",
    alignItems: "center",

    marginBottom: 30,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
});

export default CreatePostsScreen;
