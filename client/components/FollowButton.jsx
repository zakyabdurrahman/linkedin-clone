import { Button, Text } from "react-native"

function FollowButton({followed, pressHandler}) {
    if (followed) {
        return <Text>Followed</Text>
    } else {
        return (
          <Button
            title="Follow"
            onPress={pressHandler}
          />
        );
    }
}


export default FollowButton
