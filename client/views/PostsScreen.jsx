import { Button, FlatList, View } from "react-native";
import styles from "../utils/styles";
import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import PostCard from "../components/PostCard";
import { useQuery } from "@apollo/client";
import { POSTS } from "../queries/queries";
import client from "../config/apolloClient";
import { ActivityIndicator } from "react-native";

export default function PostsScreen({ navigation }) {
  const { loading, data, error } = useQuery(POSTS);

  function handleDetailClick(id) {
    navigation.navigate("PostDetail", {
      id,
    });
  }

  if (data) {
    let datas = data;
  }

  async function refresh() {
    await client.refetchQueries({
      include: [POSTS],
    });
  }

  return (
    <SafeAreaView style={styles.postsContainer}>
      <View style={{ alignItems: "center" }}>
        <Button
          onPress={() => navigation.navigate("AddPost")}
          title="Create Post"
          color="dodgerblue"
        ></Button>
      </View>
      {loading ? (
        <View style={{ alignItems: "center" }}>
          <ActivityIndicator size="large" color="dodgerblue" />
        </View>
      ) : (
        <></>
      )}
      <FlatList
        data={data?.getPosts}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <PostCard postData={item} navFn={() => handleDetailClick(item._id)} />
        )}
        onRefresh={refresh}
        refreshing={loading}
      />
    </SafeAreaView>
  );
}
