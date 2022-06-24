// Modules
import { View, SafeAreaView, Text, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import {SvgXml} from 'react-native-svg';

// Styles
import { intoSliderStyles } from '../../shared/styles';


// Illustrations
import {slideFirstIcon, slideSecondIcon, slideThirdIcon } from '../../shared/assets/svgs'

const SLIDES = [
    {
        id: 1000,
        title: "Boutiques à proximité",
        text: "Vous n'avez pas besoin d'aller loin pour trouver une boutique, nous avons ici des boutiques près de chez vous.",
        source: slideFirstIcon
    },
    {
        id: 1001,
        title: "Faites votre course",
        text: "Ne quittez pas la maison, vous pouvez faire votre course en un seul clic.",
        source: slideSecondIcon
    },
    {
        id: 1002,
        title: "Payez facilement",
        text: "Payez sans difficulté avec votre carte de credit ou par Tmoney ou Moov Money.",
        source: slideThirdIcon
    }
];

export default () => {

    const renderItem = ({item}) => {
        return (
            <View style={{alignItems: 'center', flex: 1, justifyContent: 'center', marginHorizontal: 20}}>
                <SvgXml xml={item.source} />
                <Text style={{textAlign: 'center', fontSize: 30, fontWeight: '600', color: "#41535E", marginTop: 55, marginBottom: 20}}> {item.title} </Text>
                <Text style={{textAlign: 'center', paddingHorizontal: 30, color: '#41535E'}}> {item.text} </Text>
            </View>
        )
    }

    return (
        <View style={intoSliderStyles.slideContainer}>
            <AppIntroSlider
                renderItem={renderItem}
                data={SLIDES}
                dotStyle={{backgroundColor: "lightgray"}}
                activeDotStyle={{backgroundColor: '#F06B6B'}}
            />
        </View>
    )
}