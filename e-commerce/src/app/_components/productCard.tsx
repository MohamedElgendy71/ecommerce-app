import { productType } from '@/types/Product.type'
import Link from 'next/link'
import React from 'react'
import { FaEye, FaRegHeart, FaStar } from 'react-icons/fa'
import { TfiReload } from 'react-icons/tfi'
import AddToCartBtn from './AddToCartBtn'

interface ProductCardPropsType {
    product: productType
}

export default function ProductCard({ product }: ProductCardPropsType) {


    return (
        <>
            <div className='p-3 border rounded-xl relative '>

                <div className='absolute top-4 right-1 flex flex-col gap-3 text-gray-600'>

                    <div className='bg-white cursor-pointer border shadow-2xl h-8 w-8 rounded-full flex items-center justify-center'><FaRegHeart /></div>

                    <div className='bg-white cursor-pointer border shadow-2xl h-8 w-8 rounded-full flex items-center justify-center '><TfiReload /></div>

                    <Link href={`/product/${product.id}`} className='bg-white cursor-pointer border shadow-2xl h-8 w-8 rounded-full flex items-center justify-center'><FaEye /></Link>


                </div>

                <img src={product.imageCover} alt={product.title} className='w-full' />

                <p className='text-gray-600 text-xs mt-3'>{product.category.name}</p>

                <h3 className='text-lg font-semibold line-clamp-1'>{product.title}</h3>

                <div className='flex items-center gap-2'>
                    {Array.from({ length: Math.floor(product.ratingsAverage) }).map(() =>
                        <FaStar key={product.id} className='text-yellow-400 ' />)}
                    {product.ratingsAverage}
                </div>

                <div className='flex justify-between items-center mt-3'>
                    {product.priceAfterDiscount ? <div><span className='text-emerald-500 text-xl font-semibold'>{product.priceAfterDiscount} EGP</span> <span className='text-gray-400 text-xm line-through'>{product.price} EGP</span></div> : <h4>{product.price} EGP</h4>}
                    <AddToCartBtn productId={product.id}/>
                </div>

            </div>

        </>
    )
}
