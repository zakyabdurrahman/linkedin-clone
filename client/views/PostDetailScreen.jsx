import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../utils/styles";
import { Button, Image, ScrollView, Text, TextInput } from "react-native";
import { useQuery } from "@apollo/client";
import { POST_DETAIL } from "../queries/queries";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

//how to pass parameter between navigation
//then usequery here

export default function PostDetailScreen({ route }) {
  const { id } = route.params;

  const { data, loading, error } = useQuery(POST_DETAIL, {
    variables: {
      getPostId: id,
    },
  });

  //add like -> refetch posts + postDetail
  //add comment -> refetch posts + postDetail

  if (!loading) {
    console.log(data);
  }

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
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <AntDesign name="like1" size={24} color="dodgerblue" />
          </View>
          <Text style={{ color: "gray", textAlign: "right" }}>
            {" "}
            {data?.getPost.likes.length} Likes ⸱ 2 Comments
          </Text>
        </View>
        <Text style={{ fontWeight: "bold", fontSize: 16, marginTop: 10 }}>
          Comments
        </Text>
        <TextInput
          placeholder="Add a comment.."
          style={{ fontSize: 16, marginTop: 10, marginBottom: 20 }}
        />

        <View>
          <Button title="Submit" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
