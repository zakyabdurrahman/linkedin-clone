import React from "react";
import { SafeAreaView, View } from "react-native";
import styles from "../utils/styles";
import { Text } from "react-native";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: "red" }}>Sign out</Text>
    </SafeAreaView>
  );
}
