import React, { lazy, Suspense, } from 'react'
import ProductCard from './_components/productCard'
import { getAllProducts } from '@/services/Products'
import MySlider from './_components/MySlider'
import imgSlider from '@/images/19b048dcec278f9d9c89514b670e0d9f8909f6dc.png'
import imgSlider1 from '@/images/19b048dcec278f9d9c89514b670e0d9f8909f6dc.png'
import imgSlider2 from '@/images/19b048dcec278f9d9c89514b670e0d9f8909f6dc.png'
import { Button } from '@/components/ui/button'
import { FaTruckFast } from 'react-icons/fa6'
import { IoReload } from 'react-icons/io5'
import { FaShieldAlt, FaTruck } from 'react-icons/fa'
import { SlEarphonesAlt } from 'react-icons/sl'
import { HiH3 } from 'react-icons/hi2'
import CategorySkeleton from './_components/skeleton/CategorySkeleton'



const ShopByCategoryAsLazyComp = lazy(() => import("./_components/ShopByCategory"))

const images = [imgSlider.src, imgSlider1.src, imgSlider2.src]

const slides = [
  {
    image: imgSlider.src,
    content: (
      <>
        <Button className="bg-white text-green-500 py-6 px-7 font-semibold text-xl cursor-pointer">
          Shop Now
        </Button>

      </>
    ),
    title: "Fresh Products Delivered",
    subtitle: "to your Door",
    desc: "Get 20% off your first order",
    button1: "Shop Now",
    button2: "View Deals",
  },
  {
    image: imgSlider1.src,
    content: (
      <>
        <Button className="bg-white text-blue-500 py-6 px-7 font-semibold text-xl cursor-pointer">
          Shop Now
        </Button>

      </>
    ),
    title: "Premium Quality",
    subtitle: "Guaranteed",
    desc: "Fresh from farm to your table",
    button1: "Shop Now",
    button2: "Learn More",
  },
  {
    image: imgSlider2.src,
    content: (
      <>
        <Button className="bg-white text-purple-500 py-6 px-7 font-semibold text-xl cursor-pointer">
          Order Now
        </Button>

      </>
    ),
    title: "Fast & Free Delivery",
    subtitle: "Same day delivery available",
    desc: "Free Delivery over $50",
    button1: "Order Now",
    button2: "Delivery Info",
  }
];


export default async function page() {







  const products = await getAllProducts()

  return (
    <>


      <div className='relative h-96 w-full overflow-hidden'>


        <MySlider slides={slides} slidesPerView={1} />

      </div>

      <div className="mx-5 md:mx-10 my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        <div className="flex items-center gap-3 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.2)] py-5 px-4 rounded-xl">
          <div className="bg-[#FEF2F2] h-10 w-10 rounded-full text-[#2B7FFF] flex justify-center items-center text-xl">
            <FaTruck />
          </div>
          <div className="leading-tight">
            <h5 className="font-semibold">Free Delivery</h5>
            <p className="text-xs text-gray-400">On orders over 500 EGP</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.2)] py-5 px-4 rounded-xl">
          <div className="bg-[#ECFDF5] h-10 w-10 rounded-full text-[#00BC7D] flex justify-center items-center text-xl">
            <FaShieldAlt />
          </div>
          <div className="leading-tight">
            <h5 className="font-semibold">Secure Payment</h5>
            <p className="text-xs text-gray-400">100% secure transactions</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.2)] py-5 px-4 rounded-xl">
          <div className="bg-[#F3F4F6] h-10 w-10 rounded-full text-[#FF6900] flex justify-center items-center text-xl">
            <IoReload />
          </div>
          <div className="leading-tight">
            <h5 className="font-semibold">Easy Returns</h5>
            <p className="text-xs text-gray-400">14-day return policy</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.2)] py-5 px-4 rounded-xl">
          <div className="bg-[#F9FAFB] h-10 w-10 rounded-full text-[#AD46FF] flex justify-center items-center text-xl">
            <SlEarphonesAlt />
          </div>
          <div className="leading-tight">
            <h5 className="font-semibold">24/7 Support</h5>
            <p className="text-xs text-gray-400">Dedicated support team</p>
          </div>
        </div>

      </div>

      <Suspense fallback={<CategorySkeleton />}>
        <ShopByCategoryAsLazyComp />
      </Suspense>


      <h2 className=' mx-auto mb-5 font-bold text-3xl ps-5 pt-5 flex items-center'><span className="w-1 me-2 rounded-t-3xl rounded-b-3xl h-6  bg-gradient-to-b from-[#00BC7D] to-[#007A55] inline-block"></span>Featured <span className='text-[#009966] ps-1'>Products</span></h2>


      <div className='countainer  mx-auto p-5 grid gap-5 md:grid-cols-4 xl:grid-cols-5 '>
        {products?.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>


    </>
  )
}
