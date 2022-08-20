import { useState } from "react"
import { TextInput, View, Text, StyleSheet } from "react-native"
import { titleColor } from "../utils/colors";


export default (props) => {

    const [telephone, SetTelephone] = useState('');

    return (
        <View style={{...styles.container, ...props.style}}>
            <View style={{...styles.left, ...props.leftStyle}} >
                {props.children}
            </View>
            <TextInput keyboardType={props.keyboard ? "numeric": "default"} value={telephone} onChange={(telephone) => SetTelephone(telephone)} style={{...styles.input, ...props.inputStyle}} placeholderTextColor='gray' placeholder={props.placeholder} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {width: '75%', marginVertical: 20, flexDirection: 'row', borderRadius: 6},
    left: {width: '20%', borderWidth: 2, borderColor: 'gray', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottomLeftRadius: 6, borderTopLeftRadius: 6},
    input: {padding: 10, borderWidth: 2, borderColor: 'gray', width: '80%', fontSize: 18, borderTopRightRadius: 6, borderBottomRightRadius: 6, color: titleColor}
})