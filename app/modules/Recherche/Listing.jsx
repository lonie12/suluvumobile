import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import ProductItem from "../shared/components/ProductItem";
import SearchBar from "../shared/components/SearchBar";
import {useDispatch, useSelector} from 'react-redux';
import { add, update } from "../shared/store/panier/cartReducer";


const data = [
    {
        id: 1,
        name: 'Cocacola',
        price: '3000',
        image: 'Pils',
        quantity: 2,
        initialPrice: '3000'
    },
    {
        id: 2,
        name: 'Malta',
        price: '3500',
        image: 'Pils',
        quantity: 2,
        initialPrice: '3500'
    },
    {
        id: 3,
        name: 'Pils',
        price: '2000',
        image: 'Pils',
        quantity: 2,
        initialPrice: '2000'
    },
    {
        id: 4,
        name: 'Djama',
        price: '4000',
        image: 'Pils',
        quantity: 2,
        initialPrice: '4000'
    },
    {
        id: 5,
        name: 'Chateau de france',
        price: '2500',
        image: 'Pils',
        quantity: 2,
        initialPrice: '2500'
    },
    {
        id: 6,
        name: 'Vodka',
        price: '4500',
        image: 'Pils',
        quantity: 2,
        initialPrice: '4500'
    },
]

export default () => {

    const cart = useSelector(state => state.cart.data);
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const [articles, setArticles] = useState(data);
    const [store, setStore] = useState([]);

    const itemClicked = async (setActive, active, data) => {
        const value = !active;
        setActive(value);
        if(value) {
            dispatch(add(data))
        } else {
            const dataValue = cart.length != 0 && cart.filter(item => item.id !== data.id);
            console.log(dataValue)
            dispatch(update(dataValue))
        }
    }

    const handleSearchChange = (e) => {
        setSearchValue(e);
    }

    return (
        <View style={{flex: 1}}>
            <SearchBar value={searchValue} onChange={handleSearchChange} style={{marginVertical: 15, width: '92%'}} />

            <ScrollView style={{flex: 1, width: '95%', alignSelf: 'center'}}>
                {articles.map(article => {
                    if(article.name.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase()) == -1) {
                        return
                    }
                    return (
                        <ProductItem key={article.id} data={article} onPress={itemClicked} />
                    )
                })} 
            </ScrollView>
        </View>
    )
}