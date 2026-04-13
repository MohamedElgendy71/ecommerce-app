import { getAllBrands } from '@/services/Brands'
import React from 'react'
import { MdDiscount } from 'react-icons/md'
import Brands from '../_components/Brands'

export default async function page() {

  const brands = await getAllBrands()

  return (
    <>
      <div className="bg-gradient-to-r from-[#7F22FE] via-[#8E51FF] to-[#C27AFF] w-full min-h-60 flex items-center px-6 md:px-10 lg:px-20 py-10">

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-3">

          {/* Icon */}
          <div className="text-white bg-[#FFFFFF33] text-3xl sm:text-4xl p-3 rounded-lg w-fit">
            <MdDiscount />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold">
              Top Brands
            </h3>

            <p className="text-[#FFFFFFCC] text-xs sm:text-sm">
              Shop from your favorite brands
            </p>
          </div>

        </div>

      </div>

      <div className="container mx-auto p-5 grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {brands?.map((brand) => (
          <Brands key={brand._id} brand={brand as any} />
        ))}
      </div>
    </>
  )
}
