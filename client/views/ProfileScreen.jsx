import React, { useContext } from "react";

import styles from "../utils/styles";
import { Text } from "react-native";
import { LoginContext } from "../contexts/LoginContext";
import * as SecureStore from "expo-secure-store";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery } from "@apollo/client";
import { PROFILE } from "../queries/queries";


export default function ProfileScreen() {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);
  const {data, error, loading} = useQuery(PROFILE);

  console.log(data);
  
  const profileData = data?.userProfile;

  async function handleLogout() {
    try {
      
      await SecureStore.deleteItemAsync("token");
    setLoggedIn(false);
    } catch (error) {
      console.log(error);
    }
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.nameHeader}>{profileData?.name}</Text>
      <Text
        style={{
          color: "dodgerblue",
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        0 Followings
      </Text>
      <Text
        style={{
          color: "dodgerblue",
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        0 Followers
      </Text>
      <Text
        style={{ color: "red", fontSize: 18 }}
        onPress={() => handleLogout()}
      >
        Sign out
      </Text>
    </SafeAreaView>
  );
}
