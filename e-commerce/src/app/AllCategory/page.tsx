import { getAllCategoryPage } from '@/services/Category'
import React from 'react'
import { FaLayerGroup } from 'react-icons/fa'
import AllCategory from '../_components/AllCategory'


export default async function page() {

    const AllCategoryVar = await getAllCategoryPage()

    return (
        <>
            <div className="bg-gradient-to-r from-[#16A34A] via-[#22C55E] to-[#4ADE80] w-full min-h-60 flex items-center px-6 md:px-10 lg:px-20 py-10">

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-3">

                    {/* Icon */}
                    <div className="text-white bg-[#FFFFFF33] text-3xl sm:text-4xl p-3 rounded-lg w-fit">
                        <FaLayerGroup />
                    </div>

                    {/* Text */}
                    <div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold">
                            All Categories
                        </h3>

                        <p className="text-[#FFFFFFCC] text-xs sm:text-sm">
                            Browse our wide range of product categories
                        </p>
                    </div>

                </div>

            </div>

            <div className="container mx-auto p-5 grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5">

                {AllCategoryVar?.map((category) => <AllCategory Category={category as any} key={category._id} />)}
            </div>
        </>
    )
}
