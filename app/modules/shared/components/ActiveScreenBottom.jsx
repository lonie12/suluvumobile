import { StyleSheet, View } from "react-native";
import { mainColor } from "../utils/colors";


export default () => {

    return (
        <View style={styles.active}>
        </View>
    );
}

const styles = StyleSheet.create({
    active: {
        borderWidth: 1, 
        width: "60%", 
        alignSelf: 'center', 
        borderColor: mainColor, 
        borderRadius: 5
    }
})