import { View } from "react-native";

import SignUp from "../authentication/screens/SignUp";
import Telephone from "../authentication/screens/SignUp/Telephone";
import Verfication from "../authentication/screens/SignUp/Verfication";
import Congrats from "../authentication/screens/SignUp/Congrats";

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


export default () => {

    return (
        <Stack.Navigator  screenOptions={{headerShown: false, animationEnabled: false, gestureEnabled: false, headerLeft: ()=> null,}}>
            <Stack.Screen name="telephone" component={Telephone} />
            <Stack.Screen name="verification" component={Verfication} />
            <Stack.Screen name="Ssignup" component={SignUp} />
            <Stack.Screen name="Sdone" component={Congrats} />
        </Stack.Navigator>
    )
}