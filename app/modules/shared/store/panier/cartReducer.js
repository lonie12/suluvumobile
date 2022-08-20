import { createSlice } from '@reduxjs/toolkit';


export const updateCart = createSlice({
    name: 'cart',

    initialState: {
        data: []
    },

    reducers: {
        add: (state, {payload}) => {
            state.data = [...state.data, payload];
        },
        update: (state,  {payload}) => {
            state.data = payload;
        },
        updateQuantity: (state, {payload}) => {
            // const {id, operation} = payload;
            const product = state.data.filter((e) => e.id == payload.data.id)[0];
            product.quantity += payload.type;
            product.price = product.quantity * product.initialPrice
            // // // const data = state.data.filter((e) => e.id != id);
            // // // data.push(product);
            // // // state.data = data;
            // console.log(product);
            // state.data = [...state.data, ];
            // state.data = state.data.filter(e => e.id == payload.data.id)
        },
    }
})

export const {update, add, updateQuantity} = updateCart.actions;

export default updateCart.reducer;