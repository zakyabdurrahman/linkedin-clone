import { Button, View } from "react-native";
import styles from "../utils/styles";
import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import PostCard from "../components/PostCard";

export default function PostsScreen() {
  return (
    <SafeAreaView style={styles.postsContainer}>
      <View style={{ alignItems: "center" }}>
        <Button title="Create Post" color="dodgerblue"></Button>
      </View>
      <PostCard />
      <PostCard />
    </SafeAreaView>
  );
}
