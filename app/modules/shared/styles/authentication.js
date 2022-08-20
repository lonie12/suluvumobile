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
        marginVertical: 18 
    },

    verifyIndexTitle: {
        color: "#F06B6B"
    },

    indexText: {
        textAlign: 'center', 
        paddingHorizontal: 25, 
        fontSize: 15, 
        lineHeight: 22, 
        color: subTextColor, 
        fontWeight: "500"
    },

    buttonContainer: {
        width: "100%", 
        alignItems: 'center', 
        marginTop: 28, 
        marginBottom: 20
    },

    signUpButton: { 
        width: "75%", 
        paddingVertical: 12, 
        marginVertical: 15
    },

    signInButton: { 
        width: "75%", 
        paddingVertical: 12, 
        marginBottom: 15, 
        backgroundColor: subMainColor
    },

    indexVerification: {
        marginBottom: 25
    },

    resendText: {
        fontSize: 16,
        color: subTextColor, 
    },

    resend: {
        color: '#F06B6B',
    },

    verifyInput: {
        borderWidth: 1,
        marginBottom: 25,
        padding: 20,
        width: '75%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    policy: {
        textAlign: 'center', 
        paddingHorizontal: 23, 
        fontSize: 13
    }
})