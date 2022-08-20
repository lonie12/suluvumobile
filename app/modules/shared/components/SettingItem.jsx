
import { View, Text } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default (props) => {

    return (
        <View style={{width: '100%', height: 60, borderWidth: 1, flexDirection: 'row', alignItems: 'center', marginBottom: 10, borderRadius: 5}}>
            <View style={{width: 50, height: 50, marginRight: 12, marginLeft: 5}}>
                <SvgXml xml={props.icon} width="100%" height={"100%"} />
            </View>
            <Text style={{fontSize: 18}}> {props.title} </Text>
        </View>
    )
}