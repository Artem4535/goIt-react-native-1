import { useRoute } from "./Routes";
import { useAuth } from "./Context";
import { NavigationContainer } from "@react-navigation/native";

export const AuthWrapper = () => {
  const { isAuth } = useAuth();
  const routing = useRoute(isAuth);
  return <NavigationContainer>{routing}</NavigationContainer>;
};
