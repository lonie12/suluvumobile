import { View } from 'react-native';
import TextEditable from '../../shared/components/TextEditable';
import BtnValidation from '../../shared/components/BtnValidation';
import BtnWithLeftIcon from '../../shared/components/BtnWithLeftIcon';
import { googleAuthIcon } from '../../shared/assets/svgs';

export default () => {

    return (
        <View style={{marginTop: 40, padding: 10}}>
            <TextEditable 
                title= "Noms et prénoms"
                placeholder= "Ex: John Doe"
            />
            <TextEditable 
                title= "Adresse mail"
                placeholder= "Ex: example@gmail.com"
            />
            <TextEditable 
                title= "Mot de passe"
                placeholder= "***** **** ****"
                secureTextEntry
            />
            <BtnValidation 
                style={{
                    width: "80%", 
                    alignSelf: 'center',
                    paddingVertical: 15,
                    marginBottom: 12
                }}
                title="S'enregistrer"
            />
            <BtnWithLeftIcon 
                style={{
                    width: "80%", 
                    alignSelf: 'center',
                    paddingVertical: 15,
                    backgroundColor: "lightgray"
                }}
                title="S'enregistrer avec google"
                xml={googleAuthIcon}
            />
        </View>
    )
}