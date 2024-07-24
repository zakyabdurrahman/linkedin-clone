import { Text, View } from "react-native";
import styles from "../utils/styles";

export default function PostCard() {
    return (
        <View style={styles.postContainer}>
            <View style={{marginBottom: 5}}>
                
                <Text style={{fontWeight: "bold", fontSize: 18}}>Irfan Naufal</Text>
            </View>
            <View>
                <Text style={{fontSize: 14, textAlign: "justify"}}>
                    The Bangladesh War of 1971 was a defining conflict for the nation's independence. Fueled by deep political and economic disparities between East and West Pakistan, tensions escalated into widespread violence. The Pakistani military crackdown on Bengali nationalists triggered a brutal nine-month war. India intervened in December, supporting Bangladeshi independence fighters. The conflict culminated in Pakistan's surrender on December 16, marking the birth of Bangladesh as an independent nation. The war left a profound impact, with significant loss of life, displacement, and atrocities, but it ultimately paved the way for Bangladesh to emerge as a sovereign state, free from Pakistani rule.
                </Text>
            </View>
            {/* for likes and comments*/}   
            <View style={{marginTop: 10}}>
                <Text style={{color: "gray", textAlign: "right"}}> 2 Likes ⸱ 2 Comments</Text>
            </View>
        </View>
    )
}