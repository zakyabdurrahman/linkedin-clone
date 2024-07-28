import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../utils/styles";
import {
  ActivityIndicator,
  Button,
  Image,
  ScrollView,
  Text,
  TextInput,
} from "react-native";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_LIKE, POST_DETAIL, POSTS } from "../queries/queries";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Toast from "react-native-root-toast";
import { Chip, Divider } from "react-native-paper";

//how to pass parameter between navigation
//then usequery here

export default function PostDetailScreen({ route }) {
  const { id } = route.params;

  const [addLike] = useMutation(ADD_LIKE, {
    refetchQueries: [POST_DETAIL, POSTS],
  });

  const { data, loading, error } = useQuery(POST_DETAIL, {
    variables: {
      getPostId: id,
    },
  });

  //console.log(data);
  //add like -> refetch posts + postDetail

  function handleLike() {
    Toast.show("Liked post", {
      duration: Toast.durations.SHORT,
    });
    addLike({
      variables: {
        postId: id,
      },
    });
  }
  //add comment -> refetch posts + postDetail

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
          {data?.getPost.author.name}
        </Text>
        {data?.getPost.imgUrl ? (
          <View style={{ alignItems: "center" }}>
            <Image
              source={{ uri: data?.getPost.imgUrl }}
              style={{ width: 150, height: 150, marginBottom: 10 }}
            />
          </View>
        ) : (
          <></>
        )}

        <Text style={{ fontSize: 18 }}>{data?.getPost.content}</Text>
        <View style={{ flexDirection: "row" }}>
          {data?.getPost.tags.map((e) => (
            <Chip key={e} style={{ marginHorizontal: 5, marginTop: 5 }}>{e}</Chip>
          ))}
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <AntDesign
              name="like1"
              size={24}
              color="dodgerblue"
              onPress={handleLike}
            />
          </View>
          <Text style={{ color: "gray", textAlign: "right" }}>
            {" "}
            {data?.getPost.likes.length} Likes ⸱ {data?.getPost.comments.length} Comments
          </Text>
        </View>
        <Text style={{ fontWeight: "bold", fontSize: 16, marginTop: 10 }}>
          Comments
        </Text>
        <TextInput
          placeholder="Add a comment.."
          style={{ fontSize: 16, marginTop: 10, marginBottom: 20 }}
        />

        {loading ? (
          <View style={{ alignItems: "center" }}>
            <ActivityIndicator size="large" color="dodgerblue" />
          </View>
        ) : (
          <View>
            <Button title="Submit" />
          </View>
        )}

        {data?.getPost.comments.map((comment, i) => {
          return (
            <View key={i} style={{ marginTop: 10 }}>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}
              >
                {comment.name}
              </Text>
              <Text
                style={{ fontSize: 16}}
              >
                {comment.content}
              </Text>
              <Divider style={{marginTop: 5}}/>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
