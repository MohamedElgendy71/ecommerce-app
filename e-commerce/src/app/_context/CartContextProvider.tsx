"use client"
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { getUserCart } from '../_actions/cart.actions'
import { CartItemType } from '@/types/cart.type'

export const cartContext = createContext({} as any)

export default function CartContextProvider({ children }: { children: ReactNode }) {


    const [numOfCartItems, setNumOfCartItems] = useState(0)
    const [totalPriceOfCart, setTotalPriceOfCart] = useState(0)
    const [cartProducts, setCartProducts] = useState<CartItemType[]>([])
    const [cartId, setCartId] = useState<string | null>(null)

    const clearCartUI = () => {
        setCartProducts([]);
        setTotalPriceOfCart(0);
        setNumOfCartItems(0);
    };

    async function getDataFromApi() {
        const userCart = await getUserCart()

        setNumOfCartItems(userCart?.numOfCartItems)
        setCartProducts(userCart?.data.products)
        setTotalPriceOfCart(userCart?.data.totalCartPrice)
        setCartId(userCart?.cartId)
    }

    useEffect(() => {
        getDataFromApi()
    }, [])

    return (
        <cartContext.Provider value={{
            numOfCartItems,
            setNumOfCartItems,
            totalPriceOfCart,
            setTotalPriceOfCart,
            cartProducts,
            setCartProducts,
            setCartId,
            cartId,
            clearCartUI
        }}>
            {children}
        </cartContext.Provider>
    )
}