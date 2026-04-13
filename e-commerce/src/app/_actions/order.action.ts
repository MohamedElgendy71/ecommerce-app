"use server"

import { shippingAddressType } from "@/types/order.type";
import { getMyToken } from "@/utils/getMyToken";

export async function creatCashOrder(cartId: string, shippingAddress: shippingAddressType) {

    const token = await getMyToken()


    const res = await fetch(`https://ecommerce.routemisr.com/api/v2/orders/${cartId}`, {
        method: "POST",

        headers: {
            token: token as string,
            "Content-Type": "application/json"
        },

        body: JSON.stringify(shippingAddress)

    })

    const finalRes = res.json()

    return finalRes


    
}


export async function creatVisaOrder(cartId: string, shippingAddress: shippingAddressType) {

    const token = await getMyToken()


    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=https://ecommerce-app-ea49.vercel.app`, {
        method: "POST",

        headers: {
            token: token as string,
            "Content-Type": "application/json"
        },

        body: JSON.stringify(shippingAddress)

    })

    const finalRes = await res.json()

    return finalRes


    
}