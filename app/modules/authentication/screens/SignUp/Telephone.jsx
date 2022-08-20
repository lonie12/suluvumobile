import { View, Text, SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import BtnValidation from '../../../shared/components/BtnValidation';
import TextEditable from '../../../shared/components/TextEditable';
import TextEditableIcon from '../../../shared/components/TextEditableIcon';
import { styles } from '../../../shared/styles';
import { authStyles } from '../../../shared/styles/authentication';
import { mainColor } from '../../../shared/utils/colors';

export default ({navigation}) => {

    return (
        <View style={styles.container}>
            <>
                <Text style={[authStyles.indexTitle, {fontSize: 35, marginBottom: 20}]}>Inscription</Text>

                <Text style={authStyles.indexText}>Entrer votre numéro de téléphone. Un code de vérification vous sera envoyé pour confirmation.</Text>

                <TextEditableIcon keyboard placeholder="Ex: 90 22 64 43">
                    <Text style={{fontSize: 18, fontWeight: 'bold', color: '#F06B6B'}}>+228</Text>
                </TextEditableIcon>

                <BtnValidation
                    title= 'Suivant'
                    style={{width: '65%'}}
                    onPress={() => {navigation.navigate('verification')}}
                />

                <View style={{position: 'absolute', bottom: 20}}>
                    <Text style={authStyles.policy}>
                        En vous connectant ou en vous inscrivant, vous acceptez 
                        <Text style={{color: mainColor}}> les conditions générales</Text> et 
                        <Text style={{color: mainColor}}> la politique de cofidentialité</Text>.  
                    </Text>
                </View>
            </>

        </View>
    )
}