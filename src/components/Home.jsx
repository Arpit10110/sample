import React from 'react'
import { useDispatch } from 'react-redux'
const Home = () => {
  const dispatch = useDispatch();
    const cart=(option)=>{
        console.log(option)
        dispatch({
          type:"addtocart",
          payload : option,
        })
    }
  return (
    <>
    <h1>Name:Piza</h1>
    <h1>Prize:550</h1>
    <button onClick={()=>{cart({name:"Pizza",img:12,price:550,id:1,qty:1})}} >Add to cart</button>
    </>
  )
}

export default Home
