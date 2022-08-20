import { StyleSheet, Text, TextInput, View } from "react-native";
import MaterialIcons from 'react-native-vector-icons/AntDesign';
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";
import { titleColor } from "../utils/colors";


export default (props) => {

    return (
        <View style={{...styles.container, ...props.style}}>
            <MaterialIcons
                name={'search1'}
                size={30}
                color={titleColor}
            />
            <TextInput value={props.value} onChangeText={(e) => props.onChange(e)} placeholder="Que cherchez vous ?" style={{ flex: 1, marginLeft: 10, padding: 8, color: titleColor, fontSize: 18}} placeholderTextColor={'gray'} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '98%', paddingVertical: 5, paddingHorizontal: 15, alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(255, 0, 0, 0.1)', borderRadius: 10,
    }
})