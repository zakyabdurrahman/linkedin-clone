import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./views/LoginScreen";
import RegisterScreen from "./views/RegisterScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";
import PostsScreen from "./views/PostsScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import BottomTab from "./navigators/BottomTab";
import { ApolloProvider } from "@apollo/client";
import client from "./config/apolloClient";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // halaman login
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <PaperProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
              initialRouteName="Login"
            >
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
              <Stack.Screen name="Main" component={BottomTab} />
            </Stack.Navigator>
          </NavigationContainer>
          <StatusBar backgroundColor="white" />
        </PaperProvider>
      </SafeAreaProvider>
    </ApolloProvider>
  );
}
