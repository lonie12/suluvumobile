import { StyleSheet, TouchableOpacity, Text} from 'react-native';
import { mainColor, buttonTextColor, titleColor } from '../utils/colors';
import { SvgXml } from 'react-native-svg';

export default (props) => {

    return (
        <TouchableOpacity style={{...styles.touchable, ...props.style}} onPress={props.validate}>
            <SvgXml xml={props.xml} />
            <Text style={{...styles.text, ...props.textStyle}}> {props.title} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    touchable: {
        backgroundColor: mainColor,
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    text: {
        color: titleColor,
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '500'
    }
})