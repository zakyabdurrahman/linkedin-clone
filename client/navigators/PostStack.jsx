import { createNativeStackNavigator } from "@react-navigation/native-stack"
import PostsScreen from "../views/PostsScreen";
import CreatePostScreen from "../views/CreatePostScreen";

function PostStack() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Posts" component={PostsScreen} />
            <Stack.Screen name="AddPost" component={CreatePostScreen}/>
        </Stack.Navigator>
    )
}

export default PostStack
