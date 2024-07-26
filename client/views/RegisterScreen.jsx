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

import { LOGIN, REGISTER_USER } from "../queries/queries";
import { useMutation } from "@apollo/client";
import * as SecureStore from "expo-secure-store";
import { LoginContext } from "../contexts/LoginContext";

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setLoggedIn } = useContext(LoginContext);

  const [registerUser, { loading, data }] = useMutation(REGISTER_USER);
  const [login] = useMutation(LOGIN);

  function handleRegister() {
    registerUser({
      variables: {
        input: {
          email,
          name,
          password,
          username,
        },
      },
      onCompleted: (data) => {
        login({
          variables: {
            username,
            password,
          },
          onCompleted: async (data) => {
            console.log(data);
            const token = data.login.token;
            await SecureStore.setItemAsync("token", token);
            setLoggedIn(true);
          },
        });
      },
    });
  }

  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} style={styles.linkedinLogo}></Image>
        <View style={styles.loginTextContainer}>
          <Text style={styles.h1Login}>Join LinkedIn</Text>
          <Text style={{ marginTop: 5, fontSize: 16 }}>
            or{" "}
            <Text
              style={{ color: "blue", fontWeight: "bold" }}
              onPress={() => navigation.navigate("Login")}
            >
              Sign in
            </Text>
          </Text>
        </View>
        <View style={styles.formGroupLogin}>
          <TextInput
            style={styles.form}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          ></TextInput>
          <TextInput
            style={styles.form}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          ></TextInput>
          <TextInput
            style={styles.form}
            value={email}
            onChangeText={setEmail}
            placeholder="Email not Phone!!"
          ></TextInput>
          <TextInput
            style={styles.form}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
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
          <Button title="Sign Up" onPress={handleRegister}></Button>
        </View>
      )}
    </View>
  );
}
