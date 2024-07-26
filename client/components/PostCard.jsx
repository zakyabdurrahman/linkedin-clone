import { Image, Text, View } from "react-native";
import styles from "../utils/styles";
import { Divider } from "react-native-paper";

export default function PostCard({ postData, navFn }) {
  return (
    <View style={styles.postContainer}>
      <View style={{ marginBottom: 5, flexDirection: "row" }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          {postData.author.name}
        </Text>
      </View>
      {postData.imgUrl ? (
        <View style={{ alignItems: "center" }}>
          <Image
            source={{ uri: postData.imgUrl }}
            style={{ width: 150, height: 150, marginBottom: 10 }}
          />
        </View>
      ) : (
        <></>
      )}

      <View>
        <Text style={{ fontSize: 14, textAlign: "justify" }}>
          {postData.content}
        </Text>
      </View>
      {/* for likes and comments*/}
      <View style={{ marginTop: 10 }}>
        <Text style={{ color: "gray", textAlign: "right" }}>
          {" "}
          {postData.likes.length} Likes ⸱ 2 Comments
        </Text>
      </View>
      <Divider style={{ marginVertical: 5 }} />
      <Text style={{ textAlign: "center" }} onPress={navFn}>
        See More
      </Text>
    </View>
  );
}
