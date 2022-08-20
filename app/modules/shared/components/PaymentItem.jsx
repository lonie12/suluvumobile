import { View, Text, Image } from "react-native"

export default (props) => {

    return (
        <View style={{width: '100%', borderWidth: 1, marginBottom: 10, height: 75, flexDirection: 'row', alignItems:'center', }}>
            <View style={{width: 55, height: 55, borderWidth: 1, marginHorizontal: 10}}>
                <Image source={props.image}  style={{flex: 1, width: '100%', height: '100%', resizeMode: 'contain'}}  />
            </View>
            <Text> {props.title} </Text>
        </View>
    )
}