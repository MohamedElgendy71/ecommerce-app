"use client"
import React, { useContext } from 'react'
import { addProductToCart } from '../_actions/cart.actions'
import { toast } from 'sonner'
import { cartContext } from '../_context/CartContextProvider'

export default  function AddToCartBtn( {productId} : {productId : string} ) {

  const {setNumOfCartItems , setCartProducts , setTotalPriceOfCart} =  useContext(cartContext)

async function handleAddToCart() {
   const res = await addProductToCart(productId)
    
   if (res.status == "success") {
    toast.success(res.message , {position:"top-center", })

    setNumOfCartItems( res.numOfCartItems )
    setCartProducts( res.data.products )
    setTotalPriceOfCart( res.data.totalCartPrice )
   }
}

    return (
        <>
            <button onClick={handleAddToCart} className='bg-emerald-600 cursor-pointer text-2xl text-white  rounded-full h-10 w-10'>+</button>

        </>
    )
}
