import { Button } from '@/components/ui/button'
import { getProductByID } from '@/services/Products'
import { Heart } from 'lucide-react'
import React from 'react'
import { FaMinus, FaPlus, FaShareAlt, FaShieldAlt, FaStar } from 'react-icons/fa'
import { FaCartShopping, FaTruckFast } from 'react-icons/fa6'
import { IoReload } from 'react-icons/io5'
import { PiLightningFill } from 'react-icons/pi'
import { TbPointFilled } from 'react-icons/tb'



export default async function page({ params } :any) {

    const myParams = await params

    const product = await getProductByID(myParams.id)
    return (
        <>


            <div className='grid grid-cols-1 gap-4 w-10/12 mx-auto my-5 md:grid-cols-4'>

                <div className='col-span-1  bg-white shadow-[0_1px_3px_rgba(0,0,0,0.2)] p-5 rounded-xl h-fit'>
                    <div>
                        <img src={product?.imageCover} alt={product?.title} className='w-full' />
                    </div>
                    <div className='flex'>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>

                <div className='col-span-3  bg-white shadow-[0_1px_3px_rgba(0,0,0,0.2)] p-5 rounded-xl'>
                    <div className='my-3'>
                        <span className='text-green-700 bg-[#F0FDF4] p-2 rounded-2xl me-2 text-xs' >{product?.category.name}</span>
                        <span className='text-[#364153] bg-[#F3F4F6] p-2 rounded-2xl text-xs'>{product?.brand.name}</span>
                    </div>
                    <h3 className='text-3xl font-bold my-3'>{product?.title}</h3>
                    <div className='flex items-center gap-2 my-3'>
                        {Array.from({ length: Math.floor(product?.ratingsAverage || 0) }).map(() =>
                            <FaStar key={product?.id} className='text-yellow-400 ' />)}
                        {product?.ratingsAverage}
                    </div>
                    <h3 className='text-3xl font-bold my-3'>{product?.price} EGP</h3>
                    <h5 className='text-green-700 my-3 flex items-center bg-[#F0FDF4] px-2 rounded-2xl w-fit'><TbPointFilled className='text-green-500 text-xl' />In Stock</h5>
                    <div className='w-full h-0.25 my-3 bg-gray-200'></div>
                    <p className='text-gray-600 my-3'>{product?.description}</p>
                    <p className='text-gray-600 my-3'>Quantity</p>
                    <div className='flex items-center gap-5 my-3'>
                        <div className='border w-fit border-2 rounded-xl border-gray-200 py-2 px-6'>
                            <p className='flex items-center gap-5 text-gray-600'><FaMinus className='cursor-pointer' /> 1 <FaPlus className='cursor-pointer' /> </p>
                        </div>
                        <div className='text-gray-600 my-3'>
                            <p>220 available</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between bg-[#F9FAFB] rounded-xl p-3 my-3 '>
                        <p className='text-gray-600'>Total Price:</p>
                        <h3 className='text-[#16A34A] text-2xl font-bold'>149</h3>
                    </div>
                    <div className='my-3 flex flex-col md:flex-row gap-2'>
                        <Button className='flex-1 text-xl bg-[#16A34A] py-3 md:py-5.5 cursor-pointer'>
                            <FaCartShopping /> Add to Cart
                        </Button>

                        <Button className='flex-1 text-xl bg-[#101828] py-3 md:py-5.5 cursor-pointer'>
                            <PiLightningFill /> Buy Now
                        </Button>
                    </div>
                    <div className='grid grid-cols-12'>
                        <Button className='cursor-pointer text-xl bg-transparent col-span-10 md:col-span-11 text-black border border-2 border-gray-200 w-full  py-5.5'><Heart /> Add to Wishlist</Button>
                        <div className='cursor-pointer text-xl bg-transparent col-span-2 md:col-span-1 text-black border border-2 border-gray-200 flex justify-center items-center h-12 w-12 ms-2 rounded-xl'>
                            <FaShareAlt />
                        </div>
                    </div>
                    <div className='w-full h-0.25 my-3 bg-gray-200'></div>
                    <div className='flex flex-col md:flex-row gap-4 md:justify-between my-5'>
                        <div className='flex items-center gap-2'>
                            <div className='bg-[#DCFCE7] h-10 w-10 rounded-full text-[#16A34A] flex justify-center items-center text-xl'><FaTruckFast /></div>
                            <div className='leading-tight'>
                                <h5>Free Delivery</h5>
                                <p className='text-xs text-gray-400'>Orders over $50</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='bg-[#DCFCE7] h-10 w-10 rounded-full text-[#16A34A] flex justify-center items-center text-xl'><IoReload /></div>
                            <div className='leading-tight'>
                                <h5>30 Days Return</h5>
                                <p className='text-xs text-gray-400'>Money back</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='bg-[#DCFCE7] h-10 w-10 rounded-full text-[#16A34A] flex justify-center items-center text-xl'><FaShieldAlt /></div>
                            <div className='leading-tight'>
                                <h5>Secure Payment</h5>
                                <p className='text-xs text-gray-400'>100% Protected</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
