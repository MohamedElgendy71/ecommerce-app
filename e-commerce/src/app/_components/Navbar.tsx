"use client"

import React, { useContext } from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import logo from "@/images/freshcart-logo.png"
import Image from "next/image"
import { FaRegHeart, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa"
import { CgProfile } from "react-icons/cg"
import { signOut, useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { cartContext } from "../_context/CartContextProvider"

export default function Navbar() {

  const { numOfCartItems } = useContext(cartContext)

  const session = useSession()

  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [mobileCategoryOpen, setMobileCategoryOpen] = React.useState(false)

  function handelLogOut() {
    signOut({
      redirect: true,
      callbackUrl: "/login"
    })
  }

  return (
    <nav className="bg-gray-50 py-3 px-5 md:px-20 relative">

      {/* TOP NAV */}
      <div className="flex justify-between items-center">

        {/* Logo */}
        <Image src={logo} alt="logo" className="w-28 md:w-36" />

        {/* Search (Desktop) */}
        <div className="hidden md:block w-1/2">
          <input
            type="text"
            className="border-2 w-full py-3 px-5 rounded-2xl"
            placeholder="search product"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(true)}>
            <FaBars size={24} />
          </button>
        </div>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:flex items-center gap-2 lg:gap-4">
          <NavigationMenuList className="flex items-center gap-2 lg:gap-4">

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/cart">Shop</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Categories */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Categories</NavigationMenuTrigger>

              <NavigationMenuContent>
                <ul className="w-72 p-2 flex flex-col gap-1">
                  <li><Link className="block px-3 py-2 hover:bg-gray-100 rounded-md" href="/AllCategory">All Categories</Link></li>
                  <li><a className="block px-3 py-2 hover:bg-gray-100 rounded-md" href="/categories/women">Women's Fashion</a></li>
                  <li><a className="block px-3 py-2 hover:bg-gray-100 rounded-md" href="/categories/men">Men's Fashion</a></li>
                  <li><a className="block px-3 py-2 hover:bg-gray-100 rounded-md" href="/categories/electronics">Electronics</a></li>
                  <li><a className="block px-3 py-2 hover:bg-gray-100 rounded-md" href="/categories/beauty-health">Beauty & Health</a></li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/brands">Brands</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Icons */}
            <div className="flex items-center gap-3 text-gray-600">

              <Link href={"/"}><FaRegHeart /></Link>


              <div className="relative inline-block">
                <Link className="" href={"/cart"}>
                  <FaShoppingCart />
                </Link>

                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[12px] w-4 h-4 flex items-center justify-center rounded-full">
                  {numOfCartItems}
                </span>
              </div>



            </div>

            {

              session.data ? <>
                <Link href={"/"}><CgProfile /></Link>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Button className="cursor-pointer bg-black hover:bg-black" onClick={handelLogOut}>Log Out</Button>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </> : <>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/login">Sign In</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/signUp">Sign Up</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </>
            }





          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden mt-3">
        <input
          type="text"
          className="border-2 w-full py-2 px-4 rounded-xl"
          placeholder="search product"
        />
      </div>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div className="fixed top-0 left-0 w-3/4 h-full bg-white z-50 p-5 shadow-lg md:hidden transition-transform duration-300">

          {/* Close Button */}
          <div className="flex justify-end mb-4">
            <button onClick={() => setMobileOpen(false)}>
              <FaTimes size={24} />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <Link href="/">Home</Link>
            <Link href="/cart">Shop</Link>

            {/* Categories */}
            <div>
              <button
                onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
                className="w-full text-left font-medium"
              >
                Categories
              </button>

              {mobileCategoryOpen && (
                <ul className="pl-4 mt-2 space-y-2 text-gray-600">
                  <li><Link href="#">Category 1</Link></li>
                  <li><Link href="#">Category 2</Link></li>
                  <li><Link href="#">Category 3</Link></li>
                </ul>
              )}
            </div>

            <Link href="/brands">Brands</Link>

            {
              session.data ? <Button className="cursor-pointer w-full md:w-auto">Log Out</Button> : <>
                <Link href="/login">Sign In</Link>
                <Link href="/signUp">Sign Up</Link></>
            }




            {/* Icons */}
            <div className="flex gap-4 text-gray-600 pt-4">
              <FaRegHeart />
              <FaShoppingCart />
              <CgProfile />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

function ListItem({ title, children, href, ...props }) {
  return (
    <li {...props} className="p-2 hover:bg-gray-100 rounded-lg">
      <Link href={href}>
        <div className="flex flex-col gap-1">
          <div className="font-medium">{title}</div>
          <div className="text-sm text-gray-500">{children}</div>
        </div>
      </Link>
    </li>
  )
}