import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './panier/cartReducer';

export default configureStore({
    reducer: {
        cart: cartReducer
    }
})