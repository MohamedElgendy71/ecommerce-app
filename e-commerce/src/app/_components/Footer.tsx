import React from 'react'
import { FaCcMastercard, FaEnvelope, FaFacebookF, FaInstagram, FaPaypal, FaPhoneAlt, FaShieldAlt, FaTruck, FaYoutube } from 'react-icons/fa'
import { IoLocationSharp, IoReload } from 'react-icons/io5'
import { SlEarphonesAlt } from 'react-icons/sl'
import Imagefooter from '@/images/freshcart-logo.png'
import { CgMail } from 'react-icons/cg'
import { FaXTwitter } from 'react-icons/fa6'
import Link from 'next/link'
import { HiMiniCreditCard } from 'react-icons/hi2'

export default function Footer() {
    return (
        <>


            <div className="bg-[#F0FDF4] border-y border-[#DCFCE7] py-7 px-5 mt-11">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="flex items-center gap-3">
                        <div className="bg-[#DCFCE7] text-[#16A34A] p-3 rounded-lg">
                            <FaTruck />
                        </div>
                        <div className="leading-5">
                            <h3 className="font-medium">Free Shipping</h3>
                            <p className="text-[#6A7282] text-sm">On orders over 500 EGP</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="bg-[#DCFCE7] text-[#16A34A] p-3 rounded-lg">
                            <IoReload />
                        </div>
                        <div className="leading-5">
                            <h3 className="font-medium">Easy Returns</h3>
                            <p className="text-[#6A7282] text-sm">30 days return policy</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="bg-[#DCFCE7] text-[#16A34A] p-3 rounded-lg">
                            <FaShieldAlt />
                        </div>
                        <div className="leading-5">
                            <h3 className="font-medium">Secure Payment</h3>
                            <p className="text-[#6A7282] text-sm">100% secure payment</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="bg-[#DCFCE7] text-[#16A34A] p-3 rounded-lg">
                            <SlEarphonesAlt />
                        </div>
                        <div className="leading-5">
                            <h3 className="font-medium">24/7 Support</h3>
                            <p className="text-[#6A7282] text-sm">Dedicated support</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className="bg-[#101828] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 py-10 px-5 gap-8">

                {/* القسم الكبير */}
                <div className="lg:col-span-4">
                    <img className="bg-white p-2 rounded-lg mb-5 w-fit" src={Imagefooter.src} alt="" />

                    <p className="text-[#99A1AF] mb-5 max-w-md leading-relaxed">
                        FreshCart is your one-stop destination for quality products. From fashion to electronics, we bring you the best brands at competitive prices with a seamless shopping experience.
                    </p>

                    <h3 className="text-[#99A1AF] flex items-center gap-2 mb-2">
                        <FaPhoneAlt className="text-[#22C55E]" /> +1 (800) 123-4567
                    </h3>

                    <h3 className="text-[#99A1AF] flex items-center gap-2 mb-2">
                        <FaEnvelope className="text-[#22C55E]" /> support@freshcart.com
                    </h3>

                    <h3 className="text-[#99A1AF] flex items-center gap-2 mb-5">
                        <IoLocationSharp className="text-[#22C55E]" /> 123 Commerce Street
                    </h3>

                    <div className="flex items-center gap-3">
                        <div className="bg-[#1E2939] text-[#99A1AF] p-3 rounded-full cursor-pointer hover:bg-[#22C55E] hover:text-white transition">
                            <FaFacebookF />
                        </div>
                        <div className="bg-[#1E2939] text-[#99A1AF] p-3 rounded-full cursor-pointer hover:bg-[#22C55E] hover:text-white transition">
                            <FaXTwitter />
                        </div>
                        <div className="bg-[#1E2939] text-[#99A1AF] p-3 rounded-full cursor-pointer hover:bg-[#22C55E] hover:text-white transition">
                            <FaInstagram />
                        </div>
                        <div className="bg-[#1E2939] text-[#99A1AF] p-3 rounded-full cursor-pointer hover:bg-[#22C55E] hover:text-white transition">
                            <FaYoutube />
                        </div>
                    </div>
                </div>

                {/* الأعمدة */}
                <div className="flex flex-col gap-3 sm:col-span-1 lg:col-span-2">
                    <h3 className="text-white text-lg">Shop</h3>
                    <Link href="/" className="text-[#99A1AF] hover:text-[#05df72]">All Products</Link>
                    <Link href="/" className="text-[#99A1AF] hover:text-[#05df72]">Categories</Link>
                    <Link href="/" className="text-[#99A1AF] hover:text-[#05df72]">Brands</Link>
                    <Link href="/" className="text-[#99A1AF] hover:text-[#05df72]">Electronics</Link>
                </div>

                <div className="flex flex-col gap-3 sm:col-span-1 lg:col-span-2">
                    <h3 className="text-white text-lg">Account</h3>
                    <Link href="/" className="text-[#99A1AF] hover:text-[#05df72]">My Account</Link>
                    <Link href="/" className="text-[#99A1AF] hover:text-[#05df72]">Order History</Link>
                    <Link href="/" className="text-[#99A1AF] hover:text-[#05df72]">Wishlist</Link>
                </div>

                <div className="flex flex-col gap-3 sm:col-span-1 lg:col-span-2">
                    <h3 className="text-white text-lg">Support</h3>
                    <Link href="/" className="text-[#99A1AF] hover:text-[#05df72]">Contact Us</Link>
                    <Link href="/" className="text-[#99A1AF] hover:text-[#05df72]">Help Center</Link>
                    <Link href="/" className="text-[#99A1AF] hover:text-[#05df72]">Shipping Info</Link>
                </div>

                <div className="flex flex-col gap-3 sm:col-span-1 lg:col-span-2">
                    <h3 className="text-white text-lg">Legal</h3>
                    <Link href="/" className="text-[#99A1AF] hover:text-[#05df72]">Privacy Policy</Link>
                    <Link href="/" className="text-[#99A1AF] hover:text-[#05df72]">Terms</Link>
                </div>

                {/* الخط */}
                <div className="col-span-full h-[1px] bg-gray-500 opacity-25"></div>

                {/* الفوتر تحت */}
                <div className="col-span-full flex flex-col sm:flex-row items-center justify-between gap-4">

                    <h3 className="text-[#6A7282] text-center sm:text-left">
                        © 2026 FreshCart. All rights reserved.
                    </h3>

                    <div className="flex items-center gap-5 flex-wrap justify-center">
                        <h3 className="text-[#6A7282] flex items-center gap-2">
                            <HiMiniCreditCard /> Visa
                        </h3>
                        <h3 className="text-[#6A7282] flex items-center gap-2">
                            <FaCcMastercard /> Mastercard
                        </h3>
                        <h3 className="text-[#6A7282] flex items-center gap-2">
                            <FaPaypal /> PayPal
                        </h3>
                    </div>

                </div>

            </div>



        </>
    )
}
