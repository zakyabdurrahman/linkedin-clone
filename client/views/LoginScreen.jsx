import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Button,
  Image,
  Text,
  TextInput,
  View,
} from "react-native";
import styles from "../utils/styles";
import logo from "../assets/linkedin.jpg";
import { useContext, useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../queries/queries";
import * as SecureStore from "expo-secure-store";
import { LoginContext } from "../contexts/LoginContext";
import client from "../config/apolloClient";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fetchLogin, { data, loading, error }] = useMutation(LOGIN);
  const { setLoggedIn } = useContext(LoginContext);
  
  function loginHandler() {
    fetchLogin({
      variables: {
        username: email,
        password: password,
      },
      onCompleted: async (data) => {
        await client.resetStore();
        console.log(data);
        const token = data.login.token;
        await SecureStore.setItemAsync("token", token);
        setLoggedIn(true);
      },
      onError: (error) => console.log(error.networkError),
    });
  }

  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} style={styles.linkedinLogo}></Image>
        <View style={styles.loginTextContainer}>
          <Text style={styles.h1Login}>Sign in</Text>
          <Text style={{ marginTop: 5, fontSize: 16 }}>
            Stay updated on your professional world{" "}
          </Text>
        </View>
        <View style={styles.formGroupLogin}>
          <TextInput
            style={styles.form}
            placeholder="Username"
            value={email}
            onChangeText={setEmail}
          ></TextInput>
          <TextInput
            style={styles.form}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          ></TextInput>
        </View>
      </View>
      {loading ? (
        <View style={{ alignItems: "center" }}>
          <ActivityIndicator size="large" color="dodgerblue" />
        </View>
      ) : (
        <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
          <Button title="Sign in" onPress={loginHandler}></Button>
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            {" "}
            New to LinkedIn?{" "}
            <Text
              style={{ color: "blue", fontWeight: "bold" }}
              onPress={() => navigation.navigate("Register")}
            >
              Join now
            </Text>{" "}
          </Text>
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
}
