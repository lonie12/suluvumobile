import { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import MaterialIcons from 'react-native-vector-icons/AntDesign';
import { mainColor, titleColor } from "../utils/colors";


export default (props) => {

    // const [active, setActive] = useState(false);

    const plus = () => {
        props.onPress(props.data, 'plus');
    }

    const minus = () => {
        props.onPress(props.data, 'minus');
    }

    return (
        <View style={{height: 80, width: '100%', borderWidth: 1, marginBottom: 10, flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 4, justifyContent: 'space-between', borderRadius: 5, alignSelf: 'center'}}>
            <View style={{borderWidth: 1, height: '100%', width: 70}}>
                <Image source={require('../assets/images/cola.png')} style={{flex: 1, width: '100%', height: '100%', resizeMode: 'contain'}} />
            </View>
            <View style={{flex: 1, marginHorizontal: 10, justifyContent: 'space-between'}}>
                <Text style={{color: titleColor, fontSize: 20, fontWeight: '500'}}> {props.data.name} </Text>
                <View style={{flexDirection: 'row', borderWidth: 1, alignSelf: 'flex-start', alignItems: 'center'}}>
                    <MaterialIcons
                        name='minus'
                        size={26}
                        color={titleColor}
                        style={{marginRight: 22, borderWidth: 1, paddingVertical: 4, paddingHorizontal: 6}}
                        onPress={minus}
                    />
                    <Text style={{marginRight: 22,fontSize: 18, fontWeight: 'bold'}}> {props.data.quantity} </Text>
                    <MaterialIcons
                        name='plus'
                        size={26}
                        color={titleColor}
                        style={{borderWidth: 1, paddingVertical: 4, paddingHorizontal: 6}}
                        onPress={plus}
                    />
                </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start'}}>
                <Text style={{alignSelf: 'center', color: mainColor, fontSize: 20, fontWeight: 'bold'}}> {props.data.price} </Text>
                <Text style={{fontSize: 12, alignSelf: 'flex-end', color: mainColor, fontWeight: 'bold'}}> FCFA</Text>
            </View>
        </View>
    )
}