import { View, Text, ScrollView, } from 'react-native';
import SettingItem from '../shared/components/SettingItem';
import { mainColor, titleColor } from '../shared/utils/colors';
import { SvgXml } from 'react-native-svg';
import { Scommandes, Sdisconnect, Spaiement, sPlusInfo, Spolitique, Sprofile, sPSecurite, SRecomm, userProfile } from '../shared/assets/svgs';

const settings = [
    {
        id: 1,
        title: 'Profile',
        image: Sprofile
    },
    {
        id: 2,
        title: 'Mes commandes',
        image: Scommandes
    },
    {
        id: 3,
        title: 'Paiement',
        image: Spaiement
    },
    {
        id: 4,
        title: 'Recommandations',
        image: SRecomm
    },
    {
        id: 5,
        title: 'Politiques de confidentialité',
        image: Spolitique
    },
    {
        id: 6,
        title: 'Politiques de sécurité',
        image: sPSecurite
    },
    {
        id: 7,
        title: "Plus d'infos",
        image: sPlusInfo
    },
    {
        id: 8,
        title: 'Se déconnecter',
        image: Sdisconnect
    },
];

export default () => {

    return (
        <View style={{flex: 1}}>
            <View style={{width: '90%', alignSelf: 'center', borderBottomWidth: 1, height: 150, alignItems: 'center', borderBottomColor: 'gray'}}>
                <View style={{width: 90, height: 90, borderWidth: 1, borderRadius: 45, marginVertical: 5}}>
                    <SvgXml xml={userProfile} width="100%" height='100%' />
                </View>
                <Text style={{color: titleColor, fontSize: 18, marginBottom: 2}}>Lonie Rachid</Text>
                <Text style={{fontSize: 10, color: mainColor, fontWeight: 'bold'}}>+228 91 47 57 00 </Text>
            </View>
            <ScrollView>
                <View style={{marginTop: 20, width: '94%', alignSelf: 'center'}}>
                    {settings.map(e => {
                        return (
                            <SettingItem key={e.id} title={e.title} icon={e.image} />
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}