import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import styles from './utils/styles';
import logo from './assets/linkedin.jpg'

export default function App() {
  return (
    // halaman login
    <View style={styles.container}>
      <View>
        <Image
          source={logo}
          style={styles.linkedinLogo}
        ></Image>
        <Text>Open up App.js to start working on your app!</Text>

      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

