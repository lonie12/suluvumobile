import { ScrollView, Text, View, Dimensions } from "react-native"
import { styles } from "../shared/styles"


const height = Dimensions.get('window').width;

export default () => {

    return (
        <View style={styles.appContainer}>
            <ScrollView style={{height: '100%'}}>
                <View style={{height: height/2 + 12, width: '90%', alignSelf: 'center', borderRadius: 10, marginVertical: 10}}>
                    <View style={{width: '100%', height: height/2 - 12, backgroundColor: '#F06B6B', borderRadius: 10}}>
                        <View style={{width: '15%', height: '28%', borderWidth: 1, margin: 10, borderRadius: 4, backgroundColor: 'yellow'}}></View>
                        <Text style={{marginHorizontal: 10, color: 'white', fontSize: 20, fontWeight: '600'}}>OFFRE SPECIALE</Text>
                        <Text style={{marginHorizontal: 10, color: 'white', marginTop: 10}}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quis fugit excepturi </Text>
                        <Text style={{marginHorizontal: 10, marginTop: 12, color: 'white'}}>Plus</Text>
                    </View>
                    <View style={{width: '100%', height: 24, borderBottomRightRadius: 10, borderBottomLeftRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{width: 40, height: 12, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style={{width: '30%', height: '100%', borderRadius: '50%', backgroundColor: '#F06B6B'}}></View>
                            <View style={{width: '30%', height: '100%', borderRadius: '50%', backgroundColor: 'gray'}}></View>
                            <View style={{width: '30%', height: '100%', borderRadius: '50%', backgroundColor: 'gray'}}></View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}