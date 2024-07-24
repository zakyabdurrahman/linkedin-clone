import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';
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
        <View style={styles.loginTextContainer}>
          <Text style={styles.h1Login}>Sign in</Text>
          <Text style={{marginTop: 5, fontSize: 16}}>Stay updated on your professional world </Text>
          
        </View>
        <View style={styles.formGroupLogin}>
          <TextInput style={styles.form} placeholder='Email or Phone'></TextInput>
          <TextInput style={styles.form} placeholder='Password' secureTextEntry={true}></TextInput>
        </View>
        
      </View>

      <View style={{marginTop: 30, paddingHorizontal:20}}>  
        <Button title='Sign in'></Button>
      </View>
      
      
      <StatusBar style="auto" />
    </View>
  );
}

