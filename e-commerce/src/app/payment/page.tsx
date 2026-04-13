"use client"

import React, { useContext } from "react"
import {
    FaMapMarkerAlt,
    FaPlus,
    FaLock,
    FaTruck,
    FaMoneyBillWave,
    FaCreditCard,
    FaShieldAlt,
    FaShoppingBag,
    FaReceipt,
    FaBookmark,
    FaPhoneAlt,
    FaCity,
    FaWallet,
    FaCcVisa,
    FaCcMastercard
} from "react-icons/fa"
import { RiInbox2Fill } from "react-icons/ri"
import { TiHome } from "react-icons/ti";
import { IoInformationCircle } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { LiaCcAmex } from "react-icons/lia";
import imagevisa from "../../assets/images/0e94574711ea9741cdac98288cc582dad230b8f4.png"
import imageMaster from "../../assets/images/76e57b0fe02a2553e233806952be89300ed5a670.png"
import imageAmex from "../../assets/images/148a1780579090910062527ad5c2049b09485367.png"
import { Controller, useForm } from "react-hook-form"
import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { shippingAddressType } from "@/types/order.type";
import { creatCashOrder, creatVisaOrder } from "../_actions/order.action";
import { cartContext } from "../_context/CartContextProvider";
import { toast } from "sonner";





const paymentSchema = zod.object({
    city: zod.string().min(1, "enter your city"),
    details: zod.string().min(3, "enter your Street Address"),
    phone: zod.string().min(11, "enter your phone").regex(/^(010|011|012|015)\d{8}$/, "Invalid phone number. It should start with 010, 011, 012, or 015 and be 11 digits long."),
    type: zod.string()
})



export default function CheckoutPage() {

    const { cartId, clearCartUI, cartProducts, totalPriceOfCart, numOfCartItems } = useContext(cartContext)



    const form = useForm({
        defaultValues: {
            "details": "",
            "phone": "",
            "city": "",
            "type": "cash"
        },


        resolver: zodResolver(paymentSchema)
    })

    async function handlePayment(value : any) {

        console.log("values", value);

        const userData: shippingAddressType = {
            shippingAddress: {
                city: value.city,
                details: value.details,
                phone: value.phone
            }
        }

        if (value.type == "cash") {

            const res = await creatCashOrder(cartId, userData)

            console.log("cash order", res);

            if (res.status === "success") {

                toast.success("Order created successfully!", { position: "top-center", richColors: true })

                clearCartUI()

            } else {
                toast.error("Failed to create order", { position: "top-center", richColors: true })
            }



        } else if (value.type == "visa") {
            const res = await creatVisaOrder(cartId, userData)

            console.log("visa order", res);

            if (res.status === "success") {

                toast.success("Order created successfully!", { position: "top-center", richColors: true })

                window.open(res.session.url)

                clearCartUI()



            } else {
                toast.error("Failed to create order", { position: "top-center", richColors: true })
            }

        }


    }





    return (
        <div className="bg-[#F9FAFB] min-h-screen p-4 md:p-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* LEFT SIDE */}
                <div className="lg:col-span-2 space-y-6">

                    {/* TITLE */}
                    <div>
                        <h1 className="text-2xl font-bold flex items-center gap-2 mb-2">
                            <div className="bg-gradient-to-r from-[#16A34A] to-[#15803D] p-2 rounded-lg">
                                <FaReceipt className="text-white" />
                            </div>
                            Complete Your Order
                        </h1>
                        <p className="text-gray-500 text-sm">
                            Review your items and complete your purchase
                        </p>
                    </div>

                    {/* SHIPPING */}
                    <div className="bg-white shadow rounded-lg border ">
                        <div className="bg-gradient-to-r from-[#16A34A] to-[#15803D] text-white p-3  rounded-t-lg mb-4 font-semibold ">
                            <div className="flex items-center gap-1 text-lg">
                                <TiHome />
                                Shipping Address</div>
                            <p className="text-[#DCFCE7] text-xs">Where should we deliver your order?</p>
                        </div>

                        <div className="px-5">

                            <div>
                                <h3 className="text-[#1E2939] flex items-center gap-1 mb-1"><FaBookmark className="text-[#22C55E]" />Saved Addresses</h3>
                                <p className="text-xs text-[#4A5565] mb-3">Select a saved address or enter a new one below</p>
                            </div>

                            <div className="border rounded-lg p-4 mb-4 flex items-start gap-3">
                                <div className="bg-[#F3F4F6] p-2 rounded-lg">
                                    <FaMapMarkerAlt className="text-[#6A7282]" />
                                </div>
                                <div>
                                    <p className="font-semibold text-lg">Sadat City</p>
                                    <p className="text-sm text-gray-500 ">Sadat City</p>
                                    <div className="flex items-center gap-5">
                                        <h3 className="text-[#6A7282] flex items-center text-sm gap-1"><FaPhoneAlt className="text-[#6A7282]" />01012345678</h3>
                                        <h3 className="text-[#6A7282] flex items-center text-sm gap-1"><FaCity className="text-[#6A7282]" />Sadat City</h3>

                                    </div>
                                </div>
                            </div>

                            <button className="w-full border-2 border-dashed border-green-500 text-green-600 p-4 rounded-lg mb-4 flex items-center gap-3 bg-green-50 hover:bg-green-100 transition duration-200">

                                <div className="bg-green-500 text-white p-2 rounded-lg flex items-center justify-center">
                                    <FaPlus className="text-sm" />
                                </div>

                                <div className="text-left">
                                    <h3 className="text-green-700 font-semibold">
                                        Use a different address
                                    </h3>
                                    <p className="text-gray-500 text-sm">
                                        Enter a new shipping address manually
                                    </p>
                                </div>

                            </button>

                            <div className="bg-green-50 text-green-700 p-3 rounded-md mb-4 text-sm flex items-center gap-2">
                                <div className="bg-[#DCFCE7] text-[#155DFC] p-2 rounded-full">
                                    <IoInformationCircle />

                                </div>
                                <div>
                                    <h3 className="text-[#193CB8]">Delivery Information</h3>
                                    <p className="text-[#155DFC] text-xs">Please ensure your address is accurate for smooth delivery</p>
                                </div>
                            </div>

                            <form action="" onSubmit={form.handleSubmit(handlePayment)} id="checkoutForm">

                                <Controller
                                    name="city"
                                    control={form.control}
                                    render={({ field, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor={field.name}>City *</FieldLabel>
                                            <Input
                                                {...field}
                                                id={field.name}
                                                aria-invalid={fieldState.invalid}
                                                placeholder="e.g. Cairo, Alexandria, Giza"
                                                autoComplete="off"
                                            />
                                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />
                                <Controller
                                    name="details"
                                    control={form.control}
                                    render={({ field, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor={field.name}>Street Address *</FieldLabel>
                                            <Input
                                                {...field}
                                                id={field.name}
                                                aria-invalid={fieldState.invalid}
                                                placeholder="Street name, building number, floor, apartment..."
                                                autoComplete="off"
                                            />
                                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />
                                <Controller
                                    name="phone"
                                    control={form.control}
                                    render={({ field, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor={field.name}>Phone Number *</FieldLabel>
                                            <Input
                                                {...field}
                                                id={field.name}
                                                aria-invalid={fieldState.invalid}
                                                placeholder="01xxxxxxxxx"
                                                autoComplete="off"
                                            />
                                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />

                            </form>

                        </div>
                    </div>

                    {/* PAYMENT */}
                    <div className="bg-white rounded-lg shadow border ">
                        <div className="bg-gradient-to-r from-[#16A34A] to-[#15803D]  text-white p-3 rounded-t-lg mb-4 font-semibold">
                            <div className="flex items-center gap-2 text-lg">
                                <FaWallet />
                                <h3>Payment Method</h3>
                            </div>
                            <div>
                                <p className="text-[#DCFCE7] text-xs">Choose how you'd like to pay</p>
                            </div>
                        </div>



                        <div className="px-5">
                            <Controller
                                name="type"
                                control={form.control}
                                defaultValue="cash"
                                render={({ field }) => (
                                    <div className="space-y-3">
                                        {/* Option 1: Cash on Delivery */}
                                        <div
                                            onClick={() => field.onChange("cash")}
                                            className={`flex items-center justify-between border rounded-lg p-4 cursor-pointer transition ${field.value === "cash" ? "border-green-500 bg-green-50" : "hover:border-green-500"
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`p-2 rounded-lg ${field.value === "cash" ? "bg-green-600" : "bg-gray-200"}`}>
                                                    <FaMoneyBillWave className="text-white text-lg" />
                                                </div>
                                                <div>
                                                    <p className={`font-semibold ${field.value === "cash" ? "text-green-700" : ""}`}>
                                                        Cash on Delivery
                                                    </p>
                                                    <p className="text-xs text-[#6A7282]">Pay when your order arrives at your doorstep</p>
                                                </div>
                                            </div>
                                            <input
                                                type="radio"
                                                checked={field.value === "cash"}
                                                onChange={() => { }} // يتم التحكم به عبر الـ div
                                                className="accent-green-600 w-4 h-4"
                                            />
                                        </div>

                                        {/* Option 2: Online Payment */}
                                        <div
                                            onClick={() => field.onChange("visa")}
                                            className={`flex items-center justify-between border rounded-lg p-4 cursor-pointer transition ${field.value === "visa" ? "border-green-500 bg-green-50" : "hover:border-green-500"
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`p-2 rounded-lg ${field.value === "visa" ? "bg-green-600" : "bg-gray-200"}`}>
                                                    <FaCreditCard className="text-white text-lg" />
                                                </div>
                                                <div>
                                                    <p className={`font-semibold ${field.value === "visa" ? "text-green-700" : ""}`}>
                                                        Pay Online
                                                    </p>
                                                    <p className="text-sm text-[#6A7282]">Secure payment via Stripe</p>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <img src={imagevisa.src} alt="Visa" className="w-8" />
                                                        <img src={imageMaster.src} alt="Master" className="w-8" />
                                                        <img src={imageAmex.src} alt="Amex" className="w-8" />
                                                    </div>
                                                </div>
                                            </div>
                                            <input
                                                type="radio"
                                                checked={field.value === "visa"}
                                                onChange={() => { }}
                                                className="accent-green-600 w-4 h-4"
                                            />
                                        </div>
                                    </div>
                                )}
                            />

                            <div className="flex items-center gap-2 bg-gradient-to-r from-[#F0FDF4] to-[#F3F4F6] p-5 rounded-lg mb-5 text-sm mt-4">
                                <div className="bg-[#DCFCE7] text-[#00A63E] p-2 rounded-full">
                                    <FaShieldAlt />
                                </div>
                                <div>
                                    <h3 className="text-[#016630]">Secure & Encrypted</h3>
                                    <p className="text-[#00A63E]">Your payment info is protected with 256-bit SSL encryption</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE - SUMMARY */}
                <div className="bg-white rounded-lg shadow border h-fit lg:sticky lg:top-5">

                    <div className="bg-gradient-to-r from-[#16A34A] to-[#15803D] p-4 rounded-t-lg">
                        <h3 className="text-white flex items-center gap-2 font-semibold">
                            <FaShoppingBag />
                            Order Summary
                        </h3>
                        <p className="text-[#DCFCE7] text-sm">{numOfCartItems} items in your cart</p>
                    </div>

                    <div className="p-5">

                        <div className="space-y-4 mb-4">
                            {cartProducts?.map((item : any) => (
                                <div key={item.product._id} className="flex justify-between items-center text-sm border-b pb-2 gap-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-md border bg-gray-50">
                                            <img
                                                src={item.product.imageCover} 
                                                alt={item.product.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <div className="flex flex-col">
                                            <p className="font-medium line-clamp-1 text-[#1E293B]">{item.product.title}</p>
                                            <p className="text-xs text-gray-500">Qty: {item.count}</p>
                                            <p className="text-xs font-semibold text-gray-400 md:hidden">{item.price} EGP</p>
                                        </div>
                                    </div>

                                    <p className="font-semibold text-[#16A34A] hidden md:block">
                                        {item.price} EGP
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="border-t pt-4 space-y-2">
                            <div className="flex justify-between text-sm text-[#4A5565]">
                                <p>Subtotal</p>
                                <p>{totalPriceOfCart} EGP</p>
                            </div>

                            <div className="flex justify-between text-sm">
                                <p className="flex items-center gap-1 text-[#4A5565]">
                                    <FaTruck className="text-[#99A1AF]" />
                                    Shipping
                                </p>
                                <p className="text-green-600">FREE</p>
                            </div>

                            <div className="flex justify-between font-bold text-lg">
                                <p>Total</p>
                                <p className="text-[#16A34A]">
                                    {totalPriceOfCart} <span className="text-[#6A7282] text-xs">EGP</span>
                                </p>
                            </div>
                        </div>

                        <button form="checkoutForm" className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#16A34A] to-[#15803D] text-white py-3 rounded-lg mt-5 hover:opacity-90 transition">
                            <RiInbox2Fill />
                            Place Order
                        </button>

                        <div className="flex justify-center items-center gap-3 text-xs mt-4">
                            <div className="flex items-center gap-1 text-[#6A7282]">
                                <FaShieldAlt className="text-[#00C950]" />
                                Secure
                            </div>

                            <div className="w-[1px] h-3 bg-[#E5E7EB]" />

                            <div className="flex items-center gap-1 text-[#6A7282]">
                                <FaTruck className="text-[#2B7FFF]" />
                                Fast Delivery
                            </div>

                            <div className="w-[1px] h-3 bg-[#E5E7EB]" />

                            <div className="flex items-center gap-1 text-[#6A7282]">
                                <RiInbox2Fill className="text-[#FF6900]" />
                                Easy Returns
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}