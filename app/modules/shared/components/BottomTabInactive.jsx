import { StyleSheet, View, Text } from "react-native";
import MaterialIcons from 'react-native-vector-icons/AntDesign';


export default (props) => {

    return (
        <MaterialIcons
            name={props.icon}
            size={28}
            color="#F06B6B"
        />
    )
}

const styles = StyleSheet.create({
    container: {backgroundColor: '#F06B6B', marginRight: 20, width: 110, height: '80%', borderRadius: 6, paddingHorizontal: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}
})