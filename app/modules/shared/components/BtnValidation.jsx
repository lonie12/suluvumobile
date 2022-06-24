import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import { buttonTextColor, mainColor } from '../utils/colors';

export default (props) => {

    return (
        <TouchableOpacity style={{...styles.touchable, ...props.style}} onPress={props.onPress}>
            <Text style={{...styles.text, ...props.textStyle}}> {props.title} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    touchable: {
        backgroundColor: mainColor,
        paddingVertical: 10,
        borderRadius: 10
    },

    text: {
        color: buttonTextColor,
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '500'
    }
})