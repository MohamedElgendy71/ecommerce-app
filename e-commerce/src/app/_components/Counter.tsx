"use client"
import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

interface CounterProps {
    count: number
    setCount: (val: number) => void
}

export default function Counter({ count, setCount }: CounterProps) {
    return (
        <div className='border w-fit border-2 rounded-xl border-gray-200 py-2 px-6'>
            <p className='flex items-center gap-5 text-gray-600'>
                <FaMinus className='cursor-pointer'
                    onClick={() => setCount(count > 1 ? count - 1 : 1)}
                />
                {count}
                <FaPlus className='cursor-pointer'
                    onClick={() => setCount(count + 1)}
                />
            </p>
        </div>
    )
}