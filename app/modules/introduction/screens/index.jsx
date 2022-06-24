// Modules
import { View, Text } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import {SvgXml} from 'react-native-svg';

// Styles
import { intoSliderStyles } from '../../shared/styles/introduction';


// Colors
import {mainColor, textMainColor, subTextColor} from '../../shared/utils/colors'

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

// 
export default () => {

    const renderItem = ({item}) => {
        return (
            <View style={intoSliderStyles.slideItemContainer}>
                <SvgXml xml={item.source} />
                <Text style={intoSliderStyles.itemTitle}> {item.title} </Text>
                <Text style={intoSliderStyles.itemText}> {item.text} </Text>
            </View>
        )
    }

    return (
        <View style={intoSliderStyles.slideContainer}>
            <AppIntroSlider
                renderItem={renderItem}
                data={SLIDES}
                dotStyle={{backgroundColor: "lightgray"}}
                activeDotStyle={{backgroundColor: mainColor}}
            />
        </View>
    )
}