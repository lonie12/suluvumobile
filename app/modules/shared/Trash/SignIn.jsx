import { View, Text } from 'react-native';
import TextEditable from '../../shared/components/TextEditable';
import BtnValidation from '../../shared/components/BtnValidation';
import BtnWithLeftIcon from '../../shared/components/BtnWithLeftIcon';
import { googleAuthIcon } from '../../shared/assets/svgs';
import { mainColor } from '../../shared/utils/colors';

export default () => {

    return (
        <View style={{marginTop: 40, padding: 10}}>
            <TextEditable 
                title= "Adresse mail"
                placeholder= "Ex: example@gmail.com"
            />
            <TextEditable 
                title= "Mot de passe"
                placeholder= "***** **** ****"
                secureTextEntry
            />

            <View style={{marginBottom: 69}}>
                <Text style={{alignSelf: 'flex-end', color: mainColor}}>Mot de passe oublié ?</Text>
            </View>

            <BtnValidation 
                style={{
                    width: "80%", 
                    alignSelf: 'center',
                    paddingVertical: 15,
                    marginBottom: 12
                }}
                title="Se connecter"
            />
            <BtnWithLeftIcon 
                style={{
                    width: "80%", 
                    alignSelf: 'center',
                    paddingVertical: 15,
                    backgroundColor: "lightgray",
                }}
                title="Continuer avec google"
                xml={googleAuthIcon}
            />
        </View>
    )
}