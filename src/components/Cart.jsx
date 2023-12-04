import React from 'react'
import {useSelector } from 'react-redux'
const Cart = () => {
    const {cart} =useSelector(state=>state.cart);
  return (
  <>
  {
    cart.map((i)=>{
       return(
        <div>
            <h1>{i.name}</h1>
            <h1>{i.price}</h1>
            <h1>{i.img}</h1>
        </div>
       )
    })
  }
  </>
  )
}

export default Cart
