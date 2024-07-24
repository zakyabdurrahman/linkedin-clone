import { Button, Image, Text, TextInput, View } from "react-native";
import styles from "../utils/styles";
import logo from "../assets/linkedin.jpg";

export default function RegisterScreen() {
    return (
        <View style={styles.container}> 
            <View>
                <Image
                    source={logo}
                    style={styles.linkedinLogo}
                ></Image>
                <View style={styles.loginTextContainer}>
                    <Text style={styles.h1Login}>Join LinkedIn</Text>
                    <Text style={{marginTop: 5, fontSize: 16}}>or <Text style={{color: "blue", fontWeight: "bold"}}>Sign in</Text></Text>
                    
                </View>
                <View style={styles.formGroupLogin}>
                    <TextInput style={styles.form} placeholder='Name'></TextInput>
                    <TextInput style={styles.form} placeholder='Username'></TextInput>
                    <TextInput style={styles.form} placeholder='Email or Phone'></TextInput>
                    <TextInput style={styles.form} placeholder='Password' secureTextEntry={true}></TextInput>
                </View>
                
            </View>

            <View style={{marginTop: 30, paddingHorizontal:20}}>  
                <Button title='Sign in'></Button>
                <Text style={{textAlign:"center", marginTop:20}}> New to LinkedIn? <Text style={{color: "blue", fontWeight: "bold"}}>Join now</Text> </Text>
            </View>
        </View>
    )
} 