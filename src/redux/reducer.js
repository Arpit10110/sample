import {createAction, createReducer} from "@reduxjs/toolkit"
const addtocart=createAction('addtocart')
export const cartreducer = createReducer({
    cart:localStorage.getItem("cart")? JSON.parse(localStorage.getItem("cart")):[],
    price:0
},
(builder)=>{
    builder.addCase(addtocart, (state,action)=>{
        const items=action.payload;
        state.cart.push(items);
        localStorage.setItem("cart", JSON.stringify(state.cart))
    }
    )
})