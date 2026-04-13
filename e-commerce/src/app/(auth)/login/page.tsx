"use client"
import React from 'react'
import { FaClock, FaFacebook, FaGoogle, FaShieldAlt, FaStar, FaTruck, FaUserPlus } from 'react-icons/fa'
import { FaTruckFast } from 'react-icons/fa6'
import { Controller, useForm } from 'react-hook-form'
import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { TbLockPassword } from 'react-icons/tb'
import { MdEmail } from "react-icons/md";
import imageSignIn from "@/images/381609d78c4d97f9277837bc4bdf05035b888463.png"
import {signIn} from "next-auth/react"



const signInSchema = zod.object(
  {
    email: zod.email("enter a valid email address"),
    password: zod.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"),
  }
)

export type signInDataType = zod.infer<typeof signInSchema>


export default function page() {

  const router = useRouter()

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },

    resolver: zodResolver(signInSchema),
    mode: "onChange"
  })

  async function handleSignUp(values: signInDataType) {

   const res = await signIn(  "credentials" , {
      redirect:false,
      callbackUrl:"/",
      ...values,

    })

    // const signInOk = await signInAction(values)



    if (res?.ok) {
      toast.success("Welcome back! You have signed in successfully.", {
        position: "top-center",
        richColors: true
      })

      form.reset({
        email: "",
        password: "",
      })

      router.push(res.url || "/")

    } else {
      toast.error("Invalid email or password. Please try again.", {
        position: "top-center",
        richColors: true
      })
    }

  }

  return (
    <>
      <div className='grid grid-cols-12 w-10/12 mx-auto mt-10'>

        <div className='col-span-12 mb-7 lg:col-span-6 lg:mb-0 mt-25'>

          <img src={imageSignIn.src} alt="SignIn" className="w-full  max-w-2xl mx-auto  shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] rounded-2xl object-cover h-100 sm:h-100 md:h-100 lg:h-100 " />

          <h1 className='text-3xl font-bold text-center pt-5'>FreshCart - Your One-Stop Shop for Fresh Products</h1>
          <p className='text-[#4A5565] text-xl text-center pt-5'>Join thousands of happy customers who trust FreshCart for their daily grocery needs</p>

          <div className='flex justify-center gap-8 pt-5'>
            <div className='text-[#6A7282] flex items-center gap-2'><FaTruck className='text-[#16A34A]' /> Free Delivery</div>
            <div className='text-[#6A7282] flex items-center gap-2'><FaShieldAlt className='text-[#16A34A]' /> Free Delivery</div>
            <div className='text-[#6A7282] flex items-center gap-2'><FaClock className='text-[#16A34A]' /> Free Delivery</div>
          </div>


        </div>

        <div className='col-span-12 mb-7 lg:col-span-6 lg:mb-0 bg-white p-5 rounded-2xl shadow-[0_4px_6px_-4px_#000000] ms-10 '>

          <div className='text-center my-10'>
            <h1 className=' text-4xl font-semibold pb-3'><span className='text-[#16A34A]'>Fresh</span>Cart</h1>
            <h2 className='text-2xl font-semibold pb-1'>Welcome Back!</h2>
            <p className='text-[#364153] text-lg'>Sign in to continue your fresh shopping experience</p>
          </div>
          <div className='flex items-center flex-col gap-2 justify-center mb-5'>
            <h3 className='flex w-full items-center justify-center gap-2 text-[#364153]  rounded-lg bg-white py-6 text-lg px-4 cursor-pointer border h-10   border-[#D1D5DC]'><FaGoogle className='text-[#E7000B] ' /> Continue with Google</h3>
            <h3 className='flex w-full items-center gap-2 justify-center text-[#364153]  rounded-lg bg-white py-6 text-lg cursor-pointer px-4 border h-10  border-[#D1D5DC]'><FaFacebook className='text-[#155DFC]' />Continue with Facebook</h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex-1 h-px bg-[#D1D5DC4D]"></span>
            <span className="text-lg text-[#6A7282] px-2">OR CONTINUE WITH EMAIL</span>
            <span className="flex-1 h-px bg-[#D1D5DC4D]"></span>
          </div>

          <form action="" onSubmit={form.handleSubmit(handleSignUp)}>

            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field className='mt-5' data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name} className='text-lg text-[#364153]'>Email Address</FieldLabel>
                  <div className='relative'>
                    <Input className='placeholder:text-lg  ps-12 placeholder:text-[#36415380] py-6'
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter your email"
                      autoComplete="off"
                      type='email'
                    />

                    <span className="absolute left-3 top-1/2 -translate-y-1/2">
                      <MdEmail className='text-[#99A1AF] text-2xl' />
                    </span>

                  </div>

                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field className='mt-5' data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name} className='text-lg text-[#364153]'>Password</FieldLabel>
                  <div className="relative">
                    <Input
                      className="placeholder:text-lg ps-12 placeholder:text-[#36415380]  py-6 pr-12" // pr-12 مساحة للأيكون
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter your password"
                      autoComplete="off"
                      type="password"
                    />

                    <span className="absolute left-3 top-1/2 -translate-y-1/2">
                      <TbLockPassword className='text-[#99A1AF] text-2xl' />
                    </span>
                  </div>

                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <div className='flex items-center gap-2 my-5'>
              <input type="checkbox" />
              <p className='text-lg text-[#364153]'>Keep me signed in</p>
            </div>

            <Button className='cursor-pointer w-full text-white bg-[#16A34A] text-lg py-6 '><FaUserPlus /> Sign In</Button>
            <div className='w-full h-[1px] bg-[#D1D5DC4D] mt-4 mb-7'></div>
            <h3 className='text-center text-lg text-[#364153]'>New to FreshCart? <span className='text-[#16A34A]'><Link href={"/signUp"}>Create an account</Link></span></h3>
          </form>

        </div>

      </div>
    </>
  )
}

