import { StyleSheet } from "react-native";
import { subTextColor, titleColor, subMainColor } from "../utils/colors";

export const authStyles = StyleSheet.create({
    authMainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    formContainer: {
        backgroundColor: 'white', 
        paddingVertical: 10, 
        width: "100%", 
        position: 'absolute', 
        bottom: 0, 
        flex: 1, 
        justifyContent: "flex-end",
    },

    navigationTop: {
        flexDirection: 'row', 
        justifyContent: 'space-around'
    },

    navigator: {
        fontSize: 18, 
        padding: 10 
    },
    
    indexTitle: {
        textAlign: 'center', 
        fontSize: 30, 
        fontWeight: "700", 
        color: titleColor, 
        letterSpacing: 1, 
        marginVertical: 20 
    },

    indexText: {
        textAlign: 'center', 
        paddingHorizontal: 40, 
        fontSize: 15, 
        lineHeight: 22, 
        color: subTextColor, 
        fontWeight: "500"
    },

    buttonContainer: {
        width: "100%", 
        alignItems: 'center', 
        marginTop: 30, marginBottom: 20
    },

    signUpButton: { 
        width: "75%", 
        paddingVertical: 14, 
        marginVertical: 15
    },

    signInButton: { 
        width: "75%", 
        paddingVertical: 14, 
        marginBottom: 15, 
        backgroundColor: subMainColor
    },

    policy: {
        textAlign: 'center', 
        paddingHorizontal: 23, 
        fontSize: 12
    }
})