import { getAllCategory } from '@/services/Category'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

export default async function ShopByCategory() {

    const Categories = await getAllCategory()
    return (
        <>
            <div className=' mx-auto p-3'>

                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between  mx-auto pt-5 mb-3">

                    <h2 className="font-bold text-2xl md:text-3xl flex items-center mb-5 ">
                        <span className="w-1 me-2 rounded-t-3xl rounded-b-3xl h-6 bg-gradient-to-b from-[#00BC7D] to-[#007A55] inline-block"></span>
                        Shop By
                        <span className="text-[#009966] ps-1">Category</span>
                    </h2>

                    <Link
                        className="text-[#16A34A] flex items-center gap-2 text-sm md:text-base"
                        href={"/Category"}
                    >
                        View All Categories
                        <FaArrowRightLong />
                    </Link>

                </div>

                <div className='grid grid-cols-2 md:grid-cols-6 gap-4'>
                    {Categories.map((item) => <div key={item._id} className=' bg-white shadow-[0_1px_3px_0px_rgba(0,0,0,0.1)] p-3 rounded-2xl'>

                        <img className='w-20 h-20 rounded-full m-auto ' src={item.image} alt={item.name} />
                        <h3 className='text-center text-lg'>{item.name}</h3>


                    </div>)}
                </div>

            </div>
        </>
    )
}
