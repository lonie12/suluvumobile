import { Text, View, Dimensions, ScrollView } from "react-native";
import {useDispatch, useSelector} from 'react-redux';
import BtnValidation from "../shared/components/BtnValidation";
import CartItem from "../shared/components/CartItem";
import ProductItem from "../shared/components/ProductItem";
import { titleColor } from "../shared/utils/colors";
import { updateQuantity } from "../shared/store/panier/cartReducer";

const height = Dimensions.get('window').height;

export default ({navigation}) => {

    const dispatch = useDispatch();
    const cartData = useSelector(state => state.cart.data);

    const setQuantity = (data, type) => {
        let operation = type == 'plus' ? 1: -1
        dispatch(updateQuantity({data: data, type: operation}));
    }

    const output = cartData.length != 0 ? (
        <View style={{flex: 1}}>
            <ScrollView style={{height: height - 189, marginTop: 20, width: '95%', alignSelf: 'center'}}>
                {
                    cartData && cartData.length != 0 && cartData.map(e => {
                        return (
                            <CartItem key={e.id} data={e} onPress={setQuantity} />
                        )
                    })
                }
            </ScrollView>

            <View style={{height: 120, width: '100%', position: 'absolute', bottom: 0, borderTopColor: "gray", borderTopWidth: 2, alignItems: 'center', justifyContent: 'space-around'}}>

                <View style={{flexDirection: 'row', width: '100%', paddingHorizontal: 20, justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={{fontSize: 25, fontWeight: 'bold'}}>Total</Text>
                    <Text style={{fontSize: 20, color: '#F06B6B'}}>5000 FCFA</Text>
                </View>

                <BtnValidation 
                    title="Terminé"
                    style={{width: '70%'}}
                    onPress={() => navigation.navigate('pay')}
                />
            </View>
        </View>
    ): (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 22, color: titleColor}}>Oups! Rien dans votre panier.</Text>
        </View>
    )

    return (
        <>
            {output}
        </>
    )
}