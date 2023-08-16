import React from "react";
import "react-native-gesture-handler";
import { AuthProvider } from "./Routes/Context";
import { AuthWrapper } from "./Routes/AuthWrapper";
import { Linking } from "react-native";

const App = () => {
  return (
    <AuthProvider>
      <AuthWrapper></AuthWrapper>
    </AuthProvider>
  );
};

export default App;
