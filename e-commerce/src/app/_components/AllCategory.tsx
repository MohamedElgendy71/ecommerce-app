import React from 'react'

import imagebrand from "@/images/def365fb404adf41deebc88aa4ee4f1d0d6798c3.jpg"
import { CategoryType } from '@/types/Product.type'

interface AllCategoryCardType {
    Category : CategoryType
}



export default function AllCategory({Category} : AllCategoryCardType) {

    
    return (
        <>
            <div className="p-3 border bg-white border-[#F3F4F6] rounded-xl text-center hover:shadow-md transition">

                <div className="bg-[#F9FAFB] p-5 sm:p-7 rounded-xl flex items-center justify-center">
                    <img
                        src={Category.image}
                        alt={Category.name}
                        className="h-[231px] w-[231px] object-contain object-cover rounded-xl"
                    />
                </div>

                <h3 className="mt-4 text-base sm:text-lg font-medium text-gray-800">
                    {Category.name}
                </h3>

            </div>
        </>
    )
}
