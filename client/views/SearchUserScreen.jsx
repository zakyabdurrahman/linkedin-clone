import { View } from "react-native"
import styles from "../utils/styles"
import SearchNavbar from "../components/SearchNavbar"
import { SafeAreaView } from "react-native-safe-area-context"


function SearchUserScreen() {
    return (
        <SafeAreaView style={styles.container}>
            
            <SearchNavbar/>
        </SafeAreaView>
    )
}

export default SearchUserScreen
