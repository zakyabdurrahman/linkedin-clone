import { ActivityIndicator, Button, Text, View } from "react-native";
import styles from "../utils/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import { useLazyQuery, useMutation } from "@apollo/client";
import { FIND_USER, FOLLOW_USER } from "../queries/queries";
import Toast from "react-native-root-toast";

function SearchUserScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  const [fetchUser, { data, loading }] = useLazyQuery(FIND_USER);
  const followUserMutation = useMutation(FOLLOW_USER);
  const followUser = followUserMutation[0];
  const followResponse = followUserMutation[1].data;

  function handleFollowUser(id) {
    followUser({
      variables: {
        followingId: id,
      },
      onCompleted: (data) => {
        console.log(data);
        Toast.show("Followed user", {
          duration: Toast.durations.SHORT,
        });
      },
    });
  }

  useEffect(() => {
    const debouncer = setTimeout(() => {
      fetchUser({
        variables: {
          name: searchQuery,
        },
      });
    }, 1000);

    return () => {
      clearTimeout(debouncer);
    };
  }, [searchQuery]);

  if (!loading) {
    console.log(data);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.postsNavbar}>
        <Searchbar
          style={{ width: 250 }}
          placeholder="Search User"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      {loading ? (
        <View style={{ alignItems: "center" }}>
          <ActivityIndicator size="large" color="dodgerblue" />
        </View>
      ) : (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 20,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 15 }}>
            {data?.findUser?.name}
          </Text>
          {data?.findUser ? (
            <Button
              title="Follow"
              onPress={() => handleFollowUser(data?.findUser?._id)}
            />
          ) : (
            <Text>User not found</Text>
          )}
        </View>
      )}
    </SafeAreaView>
  );
}

export default SearchUserScreen;
