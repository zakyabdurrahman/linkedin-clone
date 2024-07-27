import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../utils/styles";
import { ActivityIndicator, Button, TextInput, View } from "react-native";
import { useMutation } from "@apollo/client";
import { ADD_POST, POSTS } from "../queries/queries";
import { useState } from "react";

function CreatePostScreen({ navigation }) {
  const [addPost, { error, loading, data }] = useMutation(ADD_POST, {
    refetchQueries: [POSTS],
  });
  const [content, setContent] = useState("");
  const [imgUrl, setImgurl] = useState("");
  const [tags, setTags] = useState([]);

  function handleAddPost() {
    
    addPost({
      variables: {
        input: {
          content: content,
          imgUrl: imgUrl,
          tags: tags.length > 0 && tags ? tags.split(",") : [],
        },
      },
      onCompleted: (data) => navigation.navigate("Posts"),
    });
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
      <View>
        <TextInput
          style={styles.addPostSingleForm}
          placeholder="Image URL"
          value={imgUrl}
          onChangeText={setImgurl}
        />
      </View>
      <View>
        <TextInput
          style={styles.addPostSingleForm}
          placeholder="Tags"
          value={tags}
          onChangeText={setTags}
        />
      </View>

      {loading ? (
        <View style={{ alignItems: "center" }}>
          <ActivityIndicator size="large" color="dodgerblue" />
        </View>
      ) : (
        <View style={{ flexDirection: "row-reverse" }}>
          <View style={{ marginTop: 20, marginRight: 10 }}>
            <View style={{ width: 100 }}>
              <Button title="Post" onPress={handleAddPost} />
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

export default CreatePostScreen;
