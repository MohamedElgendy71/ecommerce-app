"use client"
import React, { useContext, useEffect } from 'react'
import { FaLock, FaMinus, FaPlus, FaShieldAlt, FaShoppingBag, FaShoppingCart, FaTruck } from 'react-icons/fa'
import imageShop from "@/images/def365fb404adf41deebc88aa4ee4f1d0d6798c3.jpg"
import { MdDelete } from 'react-icons/md'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { clearAllCart, deleteItemFromCart, getUserCart, updateProductCart } from '../_actions/cart.actions'
import { cartContext } from '../_context/CartContextProvider'
import { CartItemType } from '@/types/cart.type'
import { toast } from 'sonner'

export default function page() {

  const { cartProducts, totalPriceOfCart, numOfCartItems, setCartProducts, setTotalPriceOfCart, setNumOfCartItems } = useContext(cartContext)

  async function handleDeleteItem(id: string) {


    const res = await deleteItemFromCart(id)


    if (res.status == "success") {

      setCartProducts(res.data.products)
      setTotalPriceOfCart(res.data.totalCartPrice)
      setNumOfCartItems(res.numOfCartItems)

      toast.success(res.message, { position: "top-center" })
    } else {
      toast.error(res.message)
    }

  }

  async function handleUpdate(id: string, count: number) {




    const res = await updateProductCart(id, count)

    if (res.status == "success") {

      setCartProducts(res.data.products)
      setTotalPriceOfCart(res.data.totalCartPrice)
      setNumOfCartItems(res.numOfCartItems)

      toast.success(res.message, { position: "top-center" })
    } else {
      toast.error(res.message)
    }



  }

  async function handleClearAllCart() {

    const res = await clearAllCart()

    if (res.status == "success") {

      setCartProducts(res.data.products)
      setTotalPriceOfCart(res.data.totalCartPrice)
      setNumOfCartItems(res.numOfCartItems)

      toast.success(res.message, { position: "top-center" })
    } else {
      toast.error(res.message)
    }

  }
   
  


  return (
    <>

      <div className='mt-7 mx-5'>
        <div className='flex items-center gap-2'>
          <div className='bg-gradient-to-r from-[#16A34A] to-[#15803D] text-white w-fit p-2 rounded-lg text-3xl'>
            <FaShoppingCart />
          </div>
          <h3 className='text-[#101828] font-bold text-3xl'>
            Shopping Cart
          </h3>
        </div>

        <h3 className='text-[#6A7282]'>
          You have <span className='text-[#16A34A]'>{numOfCartItems} items </span> in your cart
        </h3>
      </div>

      {/* GRID RESPONSIVE */}
      <div className='flex flex-col lg:flex-row mx-5 mt-5 gap-5 lg:gap-8 items-start lg:min-h-screen'>

        {/* LEFT SIDE - PRODUCTS */}
        <div className='flex-1 lg:w-3/4 flex flex-col gap-5 lg:pr-8'>

          {cartProducts && cartProducts.length > 0 ? (
            cartProducts.map((item: CartItemType) => (
              <div key={item.product.id}>

                <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 
      bg-white shadow-[0_0px_5px_3px_rgba(0,0,0,0.08)] rounded-lg border border-[#F3F4F6] 
      h-fit px-4 sm:px-5 py-4'>

                  {/* IMAGE */}
                  <div className='bg-gradient-to-r from-[#F9FAFB] via-[#FFFFFF] to-[#F3F4F6] 
        w-full sm:w-32 h-40 sm:h-32 rounded-xl flex justify-center items-center overflow-hidden'>

                    <img
                      src={item.product.imageCover}
                      alt={item.product.title}
                      className='w-28 sm:w-24 h-28 sm:h-24 object-contain'
                    />
                  </div>

                  {/* CONTENT */}
                  <div className='flex flex-col gap-3 flex-1 w-full'>

                    <h3 className='text-[#101828] text-base sm:text-lg leading-snug break-words'>
                      {item.product.title}
                    </h3>

                    <p className='text-[#15803D] bg-gradient-to-r from-[#F0FDF4] to-[#F3F4F6] 
          w-fit px-2 py-1 rounded-full text-xs sm:text-sm'>
                      {item.product.category.name}
                    </p>

                    <h3 className='text-[#16A34A] font-bold text-base sm:text-lg'>
                      {item.price} EGP
                    </h3>

                    {/* BOTTOM ROW */}
                    <div className='flex flex-col sm:flex-row justify-between gap-4 sm:items-center'>

                      {/* COUNTER */}
                      <div className='border border-gray-200 rounded-xl py-2 px-4 sm:px-6 w-full sm:w-fit'>
                        <p className='flex items-center justify-between sm:justify-start gap-5 text-gray-600'>
                          <FaMinus onClick={() => handleUpdate(item.product.id, item.count - 1)} className='cursor-pointer' />
                          {item.count}
                          <FaPlus onClick={() => handleUpdate(item.product.id, item.count + 1)} className='cursor-pointer' />
                        </p>
                      </div>

                      {/* TOTAL + DELETE */}
                      <div className='flex items-center justify-between sm:justify-start gap-3'>

                        <div>
                          <p className='text-end text-xs sm:text-sm'>Total</p>
                          <h3 className='text-sm sm:text-base'>{item.count * item.price} EGP</h3>
                        </div>

                        <div className='text-[#FB2C36] p-2 rounded-lg bg-[#FEF2F2]'>
                          <MdDelete className='cursor-pointer' onClick={() => handleDeleteItem(item.product.id)} />
                        </div>

                      </div>

                    </div>

                  </div>

                </div>


              </div>
            ))
          ) : (
            <div className='flex flex-col items-center justify-center py-20 text-center'>
              <h2>Your cart is empty 🛒</h2>
            </div>
          )}

          <div className='h-[1px] w-full bg-gray-500  opacity-15'></div>
          <div className='flex justify-between items-center'>
            <Link href={"/"} className='text-[#16A34A]'>← Continue Shopping</Link>
            <h3 onClick={handleClearAllCart} className='flex items-center gap-1 text-red-500 cursor-pointer'><MdDelete  />Clear all items</h3>
          </div>
        </div>

        {/* RIGHT SIDE - SUMMARY */}
        <div className='lg:w-1/4 w-full h-fit bg-white shadow-[0_0px_5px_3px_rgba(0,0,0,0.08)] rounded-lg 
lg:sticky lg:top-5 z-10 lg:self-start'>

          <div className='bg-gradient-to-r from-[#16A34A] to-[#15803D] leading-6 py-3 ps-3 rounded-t-lg'>
            <h3 className='text-white flex items-center gap-3'>
              <FaShoppingBag /> Order Summary
            </h3>
            <p className='text-[#DCFCE7]'>{numOfCartItems} items in your cart</p>
          </div>

          <div className='px-3 pb-7'>

            {/* FREE SHIPPING */}
            <div className='flex items-center gap-2 bg-gradient-to-r from-[#F0FDF4] to-[#F3F4F6] 
    w-full sm:w-10/12 mx-auto ps-3 mt-3 py-3 rounded-lg'>
              <div className='bg-[#DCFCE7] text-[#00A63E] p-2 rounded-lg text-xl'>
                <FaTruck />
              </div>
              <div>
                <h3 className='text-[#008236]'>Free Shipping!</h3>
                <p className='text-[#00A63E]'>You qualify for free delivery</p>
              </div>
            </div>

            {/* SUBTOTAL */}
            <div className='flex justify-between items-center mt-3'>
              <h3 className='text-[#4A5565]'>Subtotal</h3>
              <h3 className='text-[#101828]'>{totalPriceOfCart || 0} EGP</h3>
            </div>

            {/* SHIPPING */}
            <div className='flex justify-between items-center mt-3'>
              <h3 className='text-[#4A5565]'>Shipping</h3>
              <h3 className='text-[#00A63E]'>
                {totalPriceOfCart > 0 ? "FREE" : "0 EGP"}
              </h3>
            </div>

            <div className='h-[1px] w-full bg-gray-500 opacity-15 mt-3'></div>

            {/* TOTAL */}
            <div className='flex justify-between items-center mt-3'>
              <h3 className='text-[#101828]'>Total</h3>
              <h3 className='text-[#101828] text-lg font-bold'>
                {totalPriceOfCart || 0} <span className='text-[#6A7282] text-xs'>EGP</span>
              </h3>
            </div>

            {/* BUTTON */}
            <Link
              href={cartProducts.length > 0 ? "/payment" : "#"}
              className={`inline-flex items-center justify-center w-full py-6 gap-3 text-lg mt-3 px-6 rounded-lg font-medium h-14
      ${cartProducts.length > 0
                  ? "bg-gradient-to-r from-[#16A34A] to-[#15803D] text-white hover:shadow-lg"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"}
      `}
            >
              <FaLock className='text-sm' /> Secure Checkout
            </Link>

          </div>

        </div>
      </div>

    </>
  )
}
