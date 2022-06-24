import { StyleSheet } from "react-native";

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
        color: "#41535E", 
        marginTop: 55, 
        marginBottom: 20
    },

    itemText: {
        textAlign: 'center', 
        paddingHorizontal: 30, 
        color: '#41535E',
        fontSize: 14
    } 
});