import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import PostsScreen from "../views/PostsScreen"
import SearchUserScreen from "../views/SearchUserScreen";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

function BottomTab() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
                iconName = 'home'
                return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === 'Users') {
                iconName = 'users';
                return <FontAwesome5 name={iconName} size={size} color={color} />;
            }

            // You can return any component that you like here!
            
            
          },
          tabBarActiveTintColor: 'dodgerblue',
          tabBarInactiveTintColor: 'gray',
        })}>
            <Tab.Screen name="Home" component={PostsScreen}/>
            <Tab.Screen name="Users" component={SearchUserScreen}/>
        </Tab.Navigator>
    )
}

export default BottomTab
