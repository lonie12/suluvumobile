import { View, Text } from "react-native"
import PaymentItem from "../shared/components/PaymentItem"
import { titleColor } from "../shared/utils/colors"


export default () => {

    return (
        <View style={{flex: 1, alignItems: 'center'}}>
            <View style={{alignSelf: 'center', marginVertical: 15, alignSelf: 'flex-start'}}>
                <Text style={{fontSize: 30, color: titleColor}}>Paiement</Text>
            </View>

            {/* <View style={{alignSelf: 'center'}}>
                <Text style={{fontSize: 18, color: titleColor}}>Choisissez une méthode de paiement</Text>
            </View> */}

            <View style={{width: '90%', marginVertical: 20,}}>
                <PaymentItem image={require('../shared/assets/images/togocel.png')} title='Tmoney' />
                <PaymentItem image={require('../shared/assets/images/moov.png')} title='Moov money' />
                <PaymentItem image={require('../shared/assets/images/espece.png')} title='Espèces' />
            </View>
        </View>
    )
}