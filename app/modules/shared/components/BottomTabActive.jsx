import { StyleSheet, View, Text } from "react-native";
import MaterialIcons from 'react-native-vector-icons/AntDesign';


export default (props) => {

    return (
        <View style={styles.container}>
            <MaterialIcons
                name={props.icon}
                size={24}
                color="white"
            />
            <Text style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}> {props.title} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {backgroundColor: '#F06B6B', width: 110, height: '80%', borderRadius: 6, paddingHorizontal: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}
})