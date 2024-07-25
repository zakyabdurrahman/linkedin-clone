import { Button, FlatList, View } from "react-native";
import styles from "../utils/styles";
import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import PostCard from "../components/PostCard";
import { useQuery } from "@apollo/client";
import { POSTS } from "../queries/queries";

export default function PostsScreen() {

  const {loading, data, error} = useQuery(POSTS);

  

  return (
    <SafeAreaView style={styles.postsContainer}>
      <View style={{ alignItems: "center" }}>
        <Button title="Create Post" color="dodgerblue"></Button>
      </View>
      <FlatList
        data={data?.getPosts}
        keyExtractor={item => item._id}
        renderItem={({item}) => <PostCard postData={item}/>}
      />
    </SafeAreaView>
  );
}
