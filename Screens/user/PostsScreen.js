import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DefaultPostScreen from "./NestedScreen/DefaultPostScreen";
import MapScreen from "./NestedScreen/MapScreen";
import CommentsScreen from "./NestedScreen/CommentsScreen";

const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  return (
    <NestedScreen.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="DefaultPostScreen"
    >
      <NestedScreen.Screen name="DefaultPostScreen" component={DefaultPostScreen} />
      <NestedScreen.Screen name="MapScreen" component={MapScreen} />
      <NestedScreen.Screen name="CommentsScreen" component={CommentsScreen} />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;
