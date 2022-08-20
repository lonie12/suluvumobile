import { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Modal, Pressable, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';

// Modules
import { SvgXml } from 'react-native-svg';

// Styles
import { authStyles } from './../../shared/styles/authentication';

// Illustrations
import { authBottleSuccess, googleAuthIcon } from '../../shared/assets/svgs';
import BtnValidation from '../../shared/components/BtnValidation';
import { mainColor, subTextColor, titleColor } from '../../shared/utils/colors';
import SignUp from './SignUp';
import SignIn from './SignIn';
import ActiveScreenBottom from '../../shared/components/ActiveScreenBottom';
import { styles } from '../../shared/styles';


export default ({navigation}) => {

    return (
        <View style={styles.container}>
            <View>
                <SvgXml xml={authBottleSuccess} width={200} />
            </View>

            <View>
                <Text style={authStyles.indexTitle}>Bienvenue</Text>
                <Text style={authStyles.indexText}>Avant de profiter de nos services Veuillez d'abord vous inscrire.</Text>
            </View>

            <View style={authStyles.buttonContainer}>
                <BtnValidation 
                    title="S'inscrire" 
                    style={authStyles.signUpButton} 
                    onPress={() => {
                       navigation.navigate('signup')
                    }}
                />
                <BtnValidation 
                    title="Se connecter"                     
                    style={authStyles.signInButton}
                    textStyle={{color: mainColor}}
                    onPress={() => {
                        navigation.navigate('signin')
                    }}
                />
            </View>

            <View>
                <Text style={authStyles.policy}>
                    En vous connectant ou en vous inscrivant, vous acceptez 
                    <Text style={{color: mainColor}}> les conditions générales</Text> et 
                    <Text style={{color: mainColor}}> la politique de cofidentialité</Text>.  
                </Text>
            </View>
        </View>
    )
}