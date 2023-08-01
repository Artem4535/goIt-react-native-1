import React, { useState } from "react";
import "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen";
import PostsScreen from "./Screens/user/PostsScreen";
import CreatePostsScreen from "./Screens/user/CreatePostsScreen";
import ProfileScreen from "./Screens/user/ProfileScreen";

const AuthStack = createStackNavigator();
const BottomStackNavigation = createBottomTabNavigator();
const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="Registartion">
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Registartion"
          component={RegistrationScreen}
        />
        <AuthStack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
      </AuthStack.Navigator>
    );
  }
  return (
    <BottomStackNavigation.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveBackgroundColor: "#FF6C00",
      }}
    >
      <BottomStackNavigation.Screen
        options={{
          tabBarItemStyle: { borderRadius: 50, padding: 8 },
          tabBarIcon: ({ focused, color = "#212121", size }) => (
            <AntDesign
              name="appstore-o"
              size={24}
              color={color}
              style={{ borderRadius: 20, display: "block" }}
            />
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />
      <BottomStackNavigation.Screen
        options={{
          tabBarItemStyle: { borderRadius: 50, padding: 8 },
          tabBarIcon: ({ focused, color = "#212121", size }) => (
            <AntDesign name="plus" size={24} color={color} />
          ),
        }}
        name="CreatePost"
        component={CreatePostsScreen}
      />
      <BottomStackNavigation.Screen
        options={{
          tabBarItemStyle: { borderRadius: 50, padding: 8 },
          tabBarActiveTintColor: "#242344",
          tabBarIcon: ({ focused, color = "#212121", size }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </BottomStackNavigation.Navigator>
  );
};

const App = () => {
  const routing = useRoute(true);
  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default App;
