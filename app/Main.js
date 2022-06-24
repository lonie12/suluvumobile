import React from "react";
import { StatusBar, View } from 'react-native';

// Redux store

// StyleSheet
import {styles} from './modules/shared/styles';

// Modules
import Introduction from './modules/introduction/screens';


// app entry
export default function Main() {

    return (
        <View style={styles.mainContainer}>

            <Introduction />

            <StatusBar barStyle={"dark-content"} />
        </View>
    )
}