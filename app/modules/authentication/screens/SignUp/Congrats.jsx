import { View, Text } from "react-native";
import { styles } from "../../../shared/styles";
import {SvgXml} from 'react-native-svg';

import { congratsIllustration } from "../../../shared/assets/svgs";
import { authStyles } from "../../../shared/styles/authentication";
import { mainColor } from "../../../shared/utils/colors";
import BtnValidation from "../../../shared/components/BtnValidation";

export default ({navigation}) => {

    return (
        <View  style={styles.container}>
            <View style={{marginBottom: 20}}>
                <SvgXml xml={congratsIllustration} />
            </View>

            <View>
                <Text style={[authStyles.indexTitle, {fontSize: 35, marginBottom: 20, color: mainColor, fontWeight: '300'}]}>Félicitations</Text>
            </View>

            <View style={{marginBottom: 20}}>
                <Text style={authStyles.indexText}>Votre profil est prêt.</Text>
            </View>

            <BtnValidation
                title= 'Terminé'
                style={{width: '65%', position: 'absolute', bottom: 50}}
                onPress={() => {navigation.navigate('signin')}}
            />
        </View>
    )
}