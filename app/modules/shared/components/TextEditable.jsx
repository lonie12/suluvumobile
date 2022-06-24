import {View, StyleSheet, Text, TextInput} from 'react-native';
import { titleColor, textMainColor } from '../utils/colors';


export default (props) => {

    return (
        <View style={{...styles.editMainContainer, ...props.style}}>
            <Text style={{...styles.text, ...props.textStyle}}> {props.title} </Text>
            <TextInput 
                style={{...styles.input, ...props.inputStyle}} 
                placeholder={props.placeholder} 
                placeholderTextColor="gray"
                secureTextEntry={props.secureTextEntry ?? false}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    editMainContainer: {
    },

    input: {
        borderWidth: 1,
        borderColor: 'lightslategray',
        padding: 15,
        borderRadius: 10,
        color: "lightslategray",
        marginTop: 5,
        marginBottom: 15
    },

    text: {
        color: textMainColor,
        fontWeight: "600"
    }
});