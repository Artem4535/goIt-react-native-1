import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CommonActions } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = ({ navigation, route }) => {
  // const [location, setLocation] = useState();
  const { latitude, longitude } = route.params.location;

  // useEffect(() => {
  //   if (route.params) {
  //     setLocation((prev) => [...prev, route.params.location]);
  //     console.log(location);
  //   }

  //   console.log("MAp", route.params);
  // }, [route.params]);

  const goBack = () => {
    navigation.dispatch(CommonActions.goBack());
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Мапа</Text>
        </View>
        <TouchableOpacity style={styles.iconContainer} onPress={goBack}>
          <Ionicons name="arrow-back" size={24} color="#212121CC" />
        </TouchableOpacity>
      </View>
      <MapView
        style={styles.map}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          title="I am here"
          coordinate={{ latitude: latitude, longitude: longitude }}
          description="Hello"
        />
      </MapView>
    </View>
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
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapScreen;
