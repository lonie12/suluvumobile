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


export default ({navigation}) => {

    const [activeScreen, setActiveScreen] = useState("signup");
    const [modalActive, setModalActive] = useState(false)

    const activeCreenView = activeScreen == "signup" ? (<SignUp />) : <SignIn />;
    const upBorder = activeScreen == "signup" && <ActiveScreenBottom />
    const inBorder = activeScreen == "signin" && <ActiveScreenBottom />

    return (
        <SafeAreaView style={authStyles.authMainContainer}>
            <Modal 
                visible={modalActive}
                transparent={true}
            >
                <Pressable style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', }} onPress={() => {setModalActive(!modalActive)}}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : null}
                        style={{flex: 1}}
                    >
                        <SafeAreaView style={{flex: 1}}>
                            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                <View style={authStyles.formContainer}>
                                    <View style={authStyles.navigationTop}>
                                        <View>
                                            <Text 
                                                onPress={() => setActiveScreen("signup")} 
                                                style={[authStyles.navigator, {color: activeScreen == "signup" ? mainColor: null}]}
                                            >
                                                S'enregistrer
                                            </Text>
                                            {upBorder}
                                        </View>
                                        <View>
                                            <Text onPress={() => setActiveScreen("signin")} 
                                                style={[authStyles.navigator, {color: activeScreen == "signin" ? mainColor: null}]}
                                            >
                                                Se connecter</Text>
                                            {inBorder}
                                        </View>
                                    </View>

                                    {activeCreenView}
                                </View>
                            </TouchableWithoutFeedback>
                        </SafeAreaView>
                    </KeyboardAvoidingView>
                </Pressable>
            </Modal>

            <>
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
                            setModalActive(!modalActive) 
                            setActiveScreen('signup')
                        }}
                    />
                    <BtnValidation 
                        title="Se connecter"                     
                        style={authStyles.signInButton}
                        textStyle={{color: mainColor}}
                        onPress={() => {
                            setModalActive(!modalActive) 
                            setActiveScreen('signin')
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
            </>
        </SafeAreaView>
    )
}