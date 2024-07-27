import { Button, Image, Text, View } from "react-native";
import styles from "../utils/styles";
import { Chip, Divider } from "react-native-paper";

export default function PostCard({ postData, navFn }) {
  return (
    <View style={styles.postContainer} onPress={navFn}>
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
          {postData.likes.length} Likes ⸱ {postData.comments.length} Comments
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        {postData.tags.map((e) => (
          <Chip key={e} style={{ marginHorizontal: 5, marginTop: 5 }}>
            {e}
          </Chip>
        ))}
      </View>

      <Divider style={{ marginVertical: 5 }} />
      <Button title="See More" onPress={navFn}></Button>
    </View>
  );
}
