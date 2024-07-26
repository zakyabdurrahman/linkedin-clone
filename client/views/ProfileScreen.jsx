import React, { useContext } from "react";

import styles from "../utils/styles";
import { Text } from "react-native";
import { LoginContext } from "../contexts/LoginContext";
import * as SecureStore from "expo-secure-store";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);

  async function handleLogout() {
    await SecureStore.deleteItemAsync("token");
    setLoggedIn(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: "red" }} onPress={() => handleLogout()}>
        Sign out
      </Text>
    </SafeAreaView>
  );
}
