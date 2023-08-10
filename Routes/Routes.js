import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RegistrationScreen from "../Screens/Auth/Registration/RegistrationScreen";
import LoginScreen from "../Screens/Auth/Login/LoginScreen";
import PostsScreen from "../Screens/user/PostsScreen";
import CreatePostsScreen from "../Screens/user/CreatePostsScreen";
import ProfileScreen from "../Screens/user/ProfileScreen";
import React, { useState } from "react";

import { useAuth } from "./Context";

const AuthStack = createStackNavigator();
const BottomStackNavigation = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="Registartion">
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Registartion"
          component={RegistrationScreen}
        />
        <AuthStack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />

        <BottomStackNavigation.Screen
          options={{
            title: "Публікації",
            tabBarItemStyle: { borderRadius: 50, padding: 8 },
            tabBarIcon: ({ focused, color = "#212121", size }) => (
              <AntDesign name="appstore-o" size={24} color={color} style={{ borderRadius: 20 }} />
            ),
          }}
          name="Posts"
          component={PostsScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <BottomStackNavigation.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,

        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarStyle: {
          paddingHorizontal: 80,
          paddingTop: 9,
        },
        tabBarActiveTintColor: "#FFFFFF",
      }}
    >
      <BottomStackNavigation.Screen
        options={{
          tabBarItemStyle: { borderRadius: 50, padding: 8 },
          tabBarIcon: ({ focused, color = "#212121", size }) => (
            <AntDesign name="appstore-o" size={24} color={color} style={{ borderRadius: 20 }} />
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />
      <BottomStackNavigation.Screen
        options={{
          tabBarItemStyle: { borderRadius: 50 },
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
