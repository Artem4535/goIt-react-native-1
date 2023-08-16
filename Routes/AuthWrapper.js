import { useRoute } from "./Routes";
import { useAuth } from "./Context";
import { NavigationContainer } from "@react-navigation/native";
import { Linking } from "react-native";

export const AuthWrapper = () => {
  const linking = {
    prefixes: ["yourapp://"], // Замените "yourapp" на схему вашего приложения
    config: {
      screens: {
        Map: "map",
        Comments: "comments",
      },
    },
  };
  const { isAuth } = useAuth();
  const routing = useRoute(isAuth);
  return <NavigationContainer linking={linking}>{routing}</NavigationContainer>;
};
