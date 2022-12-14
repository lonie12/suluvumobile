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
                <Text style={[authStyles.indexTitle, {fontSize: 35, marginBottom: 20}]}>Inscription</Text>

                <Text style={[authStyles.indexText]}>Entrer votre identifiant et un mot de passe pour continuer.</Text>

                <View style={{marginBottom: 15}}>
                    <TextEditableIcon style={{width: '85%', marginBottom: 0}} inputStyle={{fontSize: 16}} placeholder="Entrer un nom d'utilisateur">
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#F06B6B'}}>ID</Text>
                    </TextEditableIcon>
                    <TextEditableIcon style={{width: '85%', marginBottom: 0}} inputStyle={{fontSize: 16}} placeholder="Entrer un mot de passe">
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#F06B6B'}}>MP</Text>
                    </TextEditableIcon>
                </View>

                <BtnValidation
                    title= 'Suivant'
                    style={{width: '65%'}}
                    onPress={() => {navigation.navigate('Sdone')}}
                />

                <View style={{marginTop: 15, alignSelf: 'flex-end', marginRight: '8%'}}>
                    <Text onPress={() => {navigation.navigate('signin')}} style={{fontSize: 16, color: titleColor}}>Ou Connectez-vous</Text>
                </View>

                <View style={{position: 'absolute', bottom: 20}}>
                    <Text style={authStyles.policy}>
                        En vous connectant ou en vous inscrivant, vous acceptez 
                        <Text style={{color: mainColor}}> les conditions g??n??rales</Text> et 
                        <Text style={{color: mainColor}}> la politique de cofidentialit??</Text>.  
                    </Text>
                </View>
            </>

        </View>
    )
}