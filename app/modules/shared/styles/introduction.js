import { StyleSheet } from "react-native";
import { subTextColor, textMainColor, titleColor } from "../utils/colors";

export const intoSliderStyles = StyleSheet.create({
    slideContainer: {
        flex: 1,
        justifyContent: 'center',
    },

    slideItemContainer: {
        alignItems: 'center', 
        flex: 1, 
        justifyContent: 'center', 
        marginHorizontal: 20
    },

    itemTitle: {
        textAlign: 'center', 
        fontSize: 30, 
        fontWeight: '600', 
        color: titleColor, 
        marginTop: 55, 
        marginBottom: 20
    },

    itemText: {
        textAlign: 'center', 
        paddingHorizontal: 30, 
        color: subTextColor,
        fontSize: 14
    } 
});