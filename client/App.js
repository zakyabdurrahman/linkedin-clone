import { PaperProvider } from "react-native-paper";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import { ApolloProvider } from "@apollo/client";
import client from "./config/apolloClient";
import { LoginProvider } from "./contexts/LoginContext";
import MainStack from "./navigators/MainStack";

export default function App() {
  return (
    // halaman login
    <LoginProvider>
      <ApolloProvider client={client}>
        <SafeAreaProvider>
          <PaperProvider>
            <MainStack />
            <StatusBar backgroundColor="white" />
          </PaperProvider>
        </SafeAreaProvider>
      </ApolloProvider>
    </LoginProvider>
  );
}
