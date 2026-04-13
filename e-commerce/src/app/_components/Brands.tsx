import React from 'react'
import { BrandType } from '@/types/Product.type'


interface BrandCardType {
    brand: BrandType
}

export default function Brands({ brand }: BrandCardType) {
    return (
        <>
            <div className="p-3 border bg-white border-[#F3F4F6] rounded-xl text-center hover:shadow-md transition">

                <div className="bg-[#F9FAFB] p-5 sm:p-7 rounded-xl flex items-center justify-center">
                    <img
                        src={brand.image}
                        alt={brand.name}
                        className="w-20 h-20 object-contain"
                    />
                </div>

                <h3 className="mt-4 text-base sm:text-lg font-medium text-gray-800">
                    {brand.name}
                </h3>

            </div>
        </>
    )
}
