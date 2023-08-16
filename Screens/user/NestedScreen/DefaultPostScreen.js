import React, { useState, useEffect } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import { Text, View, StyleSheet, TouchableOpacity, FlatList, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useAuth } from "../../../Routes/Context";
import { Linking } from "react-native";

const DefaultPostScreen = ({ route, navigation }) => {
  const { setIsAuth } = useAuth();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prev) => [...prev, route.params.newPost]);
    }
    console.log("DefaultPostScreen", posts);
  }, [route.params]);

  const logout = () => {
    setIsAuth(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Публікації</Text>
        </View>
        <TouchableOpacity style={styles.iconContainer} onPress={logout}>
          <MaterialIcons name="logout" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <View>
              <Image source={{ uri: item.photo }} style={styles.image} />
            </View>
            <View>
              <Text style={styles.postText}>{item.postTitle}</Text>
            </View>
            <View style={styles.postDescriptionContainer}>
              <View style={styles.commetsContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
                  <FontAwesome name="comment-o" size={24} color="#BDBDBD" />
                </TouchableOpacity>
                <Text style={styles.commentsNumber}>0</Text>
              </View>
              <View style={styles.locationContainer}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Map", {
                      location: {
                        latitude: item.coords.latitude,
                        longitude: item.coords.longitude,
                      },
                    })
                  }
                >
                  <EvilIcons name="location" size={24} color="#BDBDBD" />
                </TouchableOpacity>

                <Text style={styles.locationText}>{item.postLocation}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,

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
    marginBottom: 40,
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
    right: 10,
  },
  postContainer: {
    marginBottom: 34,
  },

  postText: {
    marginBottom: 8,
    fontSize: 16,
    color: "#212121",
  },

  image: {
    height: 240,
    borderRadius: 8,
  },
  postDescriptionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  commetsContainer: { flexDirection: "row", alignItems: "baseline" },
  commentsNumber: {
    color: "#BDBDBD",
    fontSize: 16,
    marginLeft: 6,
  },
  locationContainer: {
    flexDirection: "row",
  },
  locationText: {
    color: "#212121",
    fontSize: 16,
  },
});

export default DefaultPostScreen;
