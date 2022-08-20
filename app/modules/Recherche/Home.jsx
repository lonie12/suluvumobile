import { ScrollView, Text, View, ImageBackground } from "react-native"
import SearchBar from "../shared/components/SearchBar"
import TextEditableIcon from "../shared/components/TextEditableIcon"


export default ({navigation}) => {

    return (
        <View style={{flex: 1}}>
            <ImageBackground source={require('../shared/assets/images/champion.jpg')} style={{width: '100%', height: 200, backgroundColor: '#F06B6B'}}>
                <View style={{width: '95%', height: 90, backgroundColor: 'white', alignSelf: 'center', position: 'absolute', bottom: -20, alignItems: 'center', justifyContent: 'center', borderRadius: 5}}>
                    <Text style={{fontSize: 25, marginBottom: 10}}>LE CHAMPION</Text>
                    <Text style={{fontSize: 16, color: 'gray'}}>Supermarché</Text>
                </View>
            </ImageBackground>

            <View style={{padding: 10, marginTop: 30, flex: 1}}>
                <SearchBar />

                <Text onPress={() => navigation.navigate('list')} style={{marginVertical: 15, borderWidth: 1, fontSize: 17, alignSelf: 'flex-end'}}>Afficher tout</Text>

                <ScrollView style={{width: '100%', flex: 1, borderWidth: 1}} indicatorStyle='black'>
                    <ImageBackground source={require('../shared/assets/images/poisson.jpg')} style={{widt: '100%', height: 100, borderWidth: 1, marginBottom: 10}}>
                        <View style={{width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                            <Text style={{fontSize: 20, marginLeft: 20, marginTop: 10, color: 'white', fontWeight: 'bold'}}>POISSONNERIE</Text>
                        </View>
                    </ImageBackground>
                    <ImageBackground source={require('../shared/assets/images/poisson.jpg')} style={{widt: '100%', height: 100, marginBottom: 10, borderWidth: 1}}>
                        <View style={{width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                            <Text style={{fontSize: 20, marginLeft: 20, marginTop: 10, color: 'white', fontWeight: 'bold'}}>POISSONNERIE</Text>
                        </View>
                    </ImageBackground>
                    <ImageBackground source={require('../shared/assets/images/poisson.jpg')} style={{widt: '100%', height: 100, marginBottom: 10, borderWidth: 1}}>
                        <View style={{width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                            <Text style={{fontSize: 20, marginLeft: 20, marginTop: 10, color: 'white', fontWeight: 'bold'}}>POISSONNERIE</Text>
                        </View>
                    </ImageBackground>
                    <ImageBackground source={require('../shared/assets/images/poisson.jpg')} style={{widt: '100%', height: 100, marginBottom: 10, borderWidth: 1}}>
                        <View style={{width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                            <Text style={{fontSize: 20, marginLeft: 20, marginTop: 10, color: 'white', fontWeight: 'bold'}}>POISSONNERIE</Text>
                        </View>
                    </ImageBackground>
                    <ImageBackground source={require('../shared/assets/images/poisson.jpg')} style={{widt: '100%', height: 100, marginBottom: 10, borderWidth: 1}}>
                        <View style={{width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                            <Text style={{fontSize: 20, marginLeft: 20, marginTop: 10, color: 'white', fontWeight: 'bold'}}>POISSONNERIE</Text>
                        </View>
                    </ImageBackground>
                    <ImageBackground source={require('../shared/assets/images/poisson.jpg')} style={{widt: '100%', height: 100, marginBottom: 10, borderWidth: 1}}>
                        <View style={{width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                            <Text style={{fontSize: 20, marginLeft: 20, marginTop: 10, color: 'white', fontWeight: 'bold'}}>POISSONNERIE</Text>
                        </View>
                    </ImageBackground>
                </ScrollView>
            </View>
        </View>
    )
}