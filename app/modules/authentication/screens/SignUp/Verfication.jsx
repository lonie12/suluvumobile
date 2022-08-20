import { View, Text } from 'react-native';
import BtnValidation from '../../../shared/components/BtnValidation';
import VerificationInput from '../../../shared/components/VerificationInput';
import { styles } from '../../../shared/styles';
import { authStyles } from '../../../shared/styles/authentication';
import { mainColor } from '../../../shared/utils/colors';

export default ({navigation}) => {

    return (
        <View style={styles.container}>
            {/* <Text onPress={() => {navigation.navigate('Ssignup')}}>Vérification</Text> */}

            <Text style={[authStyles.indexTitle, {fontSize: 35, marginBottom: 20}]}>Verification</Text>

            <Text style={authStyles.indexText}>Entrer le code de 4 chiffres envoyé au numéro: <Text style={{fontWeight: 'bold'}}>+228 91 47 57 00</Text>.</Text>

            <VerificationInput />

            <Text style={[authStyles.indexText, {paddingHorizontal: 10, marginBottom: 20}]}>Vous n'avez pas reçu de code? <Text style={{color: "#F06B6B"}}>Renvoyer</Text> </Text>
            
            <BtnValidation
                title= 'Suivant'
                style={{width: '65%'}}
                onPress={() => {navigation.navigate('Ssignup')}}
            />

            <View style={{position: 'absolute', bottom: 20}}>
                <Text style={authStyles.policy}>
                    En vous connectant ou en vous inscrivant, vous acceptez 
                    <Text style={{color: mainColor}}> les conditions générales</Text> et 
                    <Text style={{color: mainColor}}> la politique de cofidentialité</Text>.  
                </Text>
            </View>
        </View>
    )
}