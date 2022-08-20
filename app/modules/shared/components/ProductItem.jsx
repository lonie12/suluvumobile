import { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import MaterialIcons from 'react-native-vector-icons/AntDesign';
import { mainColor, titleColor } from "../utils/colors";


export default (props) => {

    const [active, setActive] = useState(false);

    const onClick = () => {
        props.onPress(setActive, active, props.data);
    }

    return (
        <View style={{height: 90, width: '100%', borderWidth: 1, marginBottom: 10, flexDirection: 'row', padding: 10, justifyContent: 'space-between', borderRadius: 5}}>
            <View style={{borderWidth: 1, height: '100%', width: 70}}>
                <Image source={require('../assets/images/cola.png')} style={{flex: 1, width: '100%', height: '100%', resizeMode: 'contain'}} />
            </View>
            <View style={{flex: 1, marginHorizontal: 10, justifyContent: 'space-around'}}>
                <Text style={{color: titleColor, fontSize: 22, fontWeight: '500'}}> {props.data.name} </Text>
                <Text style={{color: mainColor, fontSize: 18, fontWeight: '500'}}> {`${props.data.price} FCFA`} </Text>
            </View>
            <Pressable onPress={onClick} style={{flexDirection: 'row', alignSelf: 'flex-start', paddingHorizontal: 8, alignItems: 'center', paddingVertical: 8, borderRadius: 6, backgroundColor: active ? '#008080': '#BD2031', zIndex: 1}}>
                <Text style={{color: 'white', marginRight: 4}}> {active ? 'Added': 'Add'} </Text>
                <MaterialIcons
                    name={active ? 'check': 'plus'}
                    size={18}
                    color='white'
                />
            </Pressable>
        </View>
    )
}