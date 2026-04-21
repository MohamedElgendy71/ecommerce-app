"use client"
import { useState } from 'react'
import Counter from '@/app/_components/Counter'

export default function ProductActions({ price }: { price: number }) {
    const [count, setCount] = useState(1)

    return (
        <>
            <div className='flex items-center gap-5 my-3'>
                <Counter count={count} setCount={setCount} />
                <p className='text-gray-600'>220 available</p>
            </div>

            <div className='flex items-center justify-between bg-[#F9FAFB] rounded-xl p-3 my-3'>
                <p className='text-gray-600'>Total Price:</p>
                <h3 className='text-[#16A34A] text-2xl font-bold'>
                    {price * count} EGP
                </h3>
            </div>
        </>
    )
}