import { View } from "react-native";

import SignIn from "../authentication/screens/SignIn";
import SignUp from "../authentication/screens/SignUp";
import LIndex from '../authentication/screens';

import { createStackNavigator } from '@react-navigation/stack';
import SignUpNavigation from "./SignUpNavigation";
const Stack = createStackNavigator();


export default () => {

    return (
        <Stack.Navigator  screenOptions={{headerShown: false}}>
            <Stack.Screen name="Aindex" component={LIndex} />
            <Stack.Screen name="signin" component={SignIn} />
            <Stack.Screen name="signup" component={SignUpNavigation} />
        </Stack.Navigator>
    )
}