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
        borderRadius: 6,
        paddingVertical: 12,
        width: '70%',
    },

    text: {
        color: buttonTextColor,
        fontSize: 15,
        textAlign: 'center',
        fontWeight: '500'
    }
})