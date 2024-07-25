import { SafeAreaView } from "react-native-safe-area-context"
import styles from "../utils/styles"
import { Button, TextInput, View } from "react-native"
import { useMutation } from "@apollo/client"
import { ADD_POST, POSTS } from "../queries/queries"
import { useState } from "react"


function CreatePostScreen({navigation}) {
    const [addPost, {error, loading, data}] = useMutation(ADD_POST, {
        refetchQueries: [POSTS]
    });
    const [content, setContent] = useState("")

    function handleAddPost() {
        addPost({variables: {
            input: {
                content: content
            }
        }, onCompleted: (data) => navigation.navigate("Posts")})
    }


    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                multiline
                numberOfLines={5}
                editable
                style={styles.addPostForm}
                placeholder="Write a post"
                onChangeText={setContent}
                value={content}
            />
            <View style={{flexDirection: "row-reverse"}}>
                <View style={{marginTop: 20, marginRight:10}}>
                    <View style={{width: 100}}>
                        <Button title="Post" onPress={handleAddPost}/>
                    </View>
                    
                </View>
            </View>
            
            
        </SafeAreaView>
    )
}

export default CreatePostScreen
