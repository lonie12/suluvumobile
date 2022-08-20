import React from "react";
import { SafeAreaView, StatusBar, View } from 'react-native';

// Redux store

// StyleSheet
import {styles} from './modules/shared/styles';

// Modules
import {NavigationContainer} from '@react-navigation/native'
import MainNavigation from "./modules/navigations/MainNavigation";
import Introduction from './modules/introduction/screens';
import BtnValidation from "./modules/shared/components/BtnValidation";
import Authentication from './modules/authentication/screens'
import Avoiding from "../Avoiding";
import Map from "../Map";
import Verify from '../Verify';
import { Provider } from 'react-redux';
import store from "./modules/shared/store";


// app entry
export default function Main() {

    return (
        // <View style={styles.mainContainer}>

        //     {/* <Introduction /> */}

        //     <Authentication />

        //     {/* <Avoiding /> */}

        //     {/* <Position />  */}

        //     {/* <Map /> */}

        //     {/* <Verify /> */}

        //     <StatusBar barStyle={"dark-content"} />
        // </View>
        <Provider store={store}>
            <SafeAreaView style={styles.mainContainer}>
                <NavigationContainer>
                    <MainNavigation />
                </NavigationContainer>
            </SafeAreaView>
        </Provider>
    )
}