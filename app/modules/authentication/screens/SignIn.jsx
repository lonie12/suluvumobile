import { View, Text, SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import BtnValidation from '../../shared/components/BtnValidation';
import TextEditable from '../../shared/components/TextEditable';
import TextEditableIcon from '../../shared/components/TextEditableIcon';
import { styles } from '../../shared/styles';
import { authStyles } from '../../shared/styles/authentication';
import { mainColor, titleColor } from '../../shared/utils/colors';

export default ({navigation}) => {

    return (
        <View style={styles.container}>
            <>
                <Text style={[authStyles.indexTitle, {fontSize: 35, marginBottom: 20}]}>Connexion</Text>

                <Text style={[authStyles.indexText]}>Connectez vous en saisissant votre identifant et votre mot de passe.</Text>

                <View style={{marginBottom: 15}}>
                    <TextEditableIcon style={{width: '85%', marginBottom: 0}} inputStyle={{fontSize: 16}} placeholder="Entrer un nom d'utilisateur">
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#F06B6B'}}>ID</Text>
                    </TextEditableIcon>
                    <TextEditableIcon style={{width: '85%', marginBottom: 0}} inputStyle={{fontSize: 16}} placeholder="Entrer un mot de passe">
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#F06B6B'}}>MP</Text>
                    </TextEditableIcon>
                </View>

                <View style={{marginBottom: 15, alignSelf: 'flex-end', marginRight: '8%'}}>
                    <Text onPress={() => {navigation.navigate('signup')}} style={{fontSize: 16, color: mainColor}}>Mot de passe oublié ?</Text>
                </View>

                <BtnValidation
                    title= 'Suivant'
                    style={{width: '65%'}}
                    onPress={() => {navigation.navigate('appcontainere')}}
                />

                <View style={{marginTop: 15, alignSelf: 'flex-end', marginRight: '8%'}}>
                    <Text onPress={() => {navigation.navigate('signup')}} style={{fontSize: 16, color: titleColor}}>Ou Inscrivez-vous</Text>
                </View>

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