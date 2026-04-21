"use client"
import React, { useState } from 'react'
import { FaFacebook, FaGoogle, FaShieldAlt, FaStar, FaUserPlus } from 'react-icons/fa'
import { FaTruckFast } from 'react-icons/fa6'
import imgSignIn from "@/images/7be87acff8878d0ff905ef9dcd5bf7d2fd7a6c6f.png"
import { Controller, useForm } from 'react-hook-form'
import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { IoEye, IoEyeOff } from 'react-icons/io5'


const signUpSchema = zod.object(
  {
    name: zod.string().regex(/^[A-Z][a-z0-9_-]{1,23}( [A-Z][a-z0-9_-]{1,23})*$/, "Name must start with a capital letter and be 3–25 characters long."),
    email: zod.email("enter a valid email address"),
    password: zod.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"),
    rePassword: zod.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"),
    phone: zod.string().regex(/^(010|011|012|015)\d{8}$/, "Invalid phone number. It should start with 010, 011, 012, or 015 and be 11 digits long.")
  }
).refine(function (params) {
  return params.password === params.rePassword
}, {
  error: "password and rePassword not matched",
  path: ["rePassword"]
})

type signUpDataType = zod.infer<typeof signUpSchema>


export default function page() {


  const [showPassword, setShowPassword] = useState(false)

  const [showRePassword, setShowRePassword] = useState(false)

  const router = useRouter()

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: ""
    },

    resolver: zodResolver(signUpSchema),
    mode: "onChange"
  })

  async function handleSignUp(values: signUpDataType) {

    const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signup", {
      body: JSON.stringify(values),
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const finalRes = await res.json()
    console.log("finalRes :", finalRes);


    if (res.ok) {
      toast.success("Sign up successful!", {
        position: "top-center",
        richColors: true
      })

      form.reset({
        name: "",
        email: "",
        password: "",
        rePassword: "",
        phone: ""
      })

      router.push("/login")

    } else {
      toast.error("Something went wrong. Please try again.", {
        position: "top-center",
        richColors: true
      })
    }

  }

  return (
    <>
<div className='grid grid-cols-12 w-11/12 sm:w-10/12 mx-auto mt-6 sm:mt-10 lg:items-start gap-y-6 lg:gap-y-0'>

  {/* Left Column */}
  <div className='col-span-12 lg:col-span-6 lg:mb-0'>

    <h1 className='text-2xl sm:text-3xl font-bold text-[#364153]'>
      Welcome to <span className='text-[#16A34A]'>FreshCart</span>
    </h1>
    <p className='text-[#364153] text-base sm:text-lg w-full sm:w-3/4'>
      Join thousands of happy customers who enjoy fresh groceries delivered right to their doorstep.
    </p>

    {/* Feature Items */}
    {[
      { icon: <FaStar className='text-[#16A34A] text-2xl' />, title: 'Premium Quality', desc: 'Premium quality products sourced from trusted suppliers.' },
      { icon: <FaTruckFast className='text-[#16A34A] text-2xl' />, title: 'Fast Delivery', desc: 'Same-day delivery available in most areas' },
      { icon: <FaShieldAlt className='text-[#16A34A] text-2xl' />, title: 'Secure Shopping', desc: 'Your data and payments are completely secure' },
    ].map((item) => (
      <div key={item.title} className='flex items-center gap-2 mt-5'>
        <div className='w-12 h-12 shrink-0 flex justify-center items-center bg-[#BBF7D0] rounded-full'>
          {item.icon}
        </div>
        <div className='leading-5'>
          <h3 className='text-[#364153] text-lg sm:text-xl'>{item.title}</h3>
          <p className='text-[#4A5565] text-sm sm:text-base'>{item.desc}</p>
        </div>
      </div>
    ))}

    {/* Testimonial */}
    <div className='mt-5 bg-white p-4 sm:p-5 shadow-[0_1px_2px_-1px_rgba(0,0,0,0.3)] rounded-xl'>
      <div className='flex items-center gap-2'>
        <img src={imgSignIn.src} alt="SignIn" className='w-10 h-10 rounded-full object-cover shrink-0' />
        <div>
          <h3 className='text-[#364153]'>Sarah Johnson</h3>
          <div className='flex items-center text-yellow-300'>
            {Array.from({ length: 5 }).map((_, i) => <FaStar key={i} />)}
          </div>
        </div>
      </div>
      <p className='text-[#4A5565] w-full sm:w-3/4 mt-3 italic text-sm sm:text-base'>
        "FreshCart has transformed my shopping experience. The quality of the products is outstanding, and the delivery is always on time. Highly recommend!"
      </p>
    </div>

  </div>

  {/* Right Column */}
  <div className='col-span-12 lg:col-span-6 bg-white p-5 rounded-2xl shadow-[0_4px_6px_-4px_#000000] mx-0 lg:ms-10'>

    <div className='text-center leading-7 my-5 sm:my-10'>
      <h1 className='text-[#364153] text-2xl sm:text-3xl font-semibold'>Create Your Account</h1>
      <p className='text-[#364153] text-base sm:text-lg'>Start your fresh journey with us today</p>
    </div>

    {/* Google & Facebook Buttons */}
    <div className='flex flex-col sm:flex-row items-center gap-2 justify-center mb-5'>
      <h3 className='cursor-pointer flex items-center justify-center gap-2 text-[#101828] font-semibold rounded-lg bg-white py-2 px-4 border h-10 w-full sm:w-64 border-[#D1D5DC]'>
        <FaGoogle className='text-[#E7000B]' /> Google
      </h3>
      <h3 className='cursor-pointer flex items-center gap-2 justify-center text-[#101828] font-semibold rounded-lg bg-white py-2 px-4 border h-10 w-full sm:w-64 border-[#D1D5DC]'>
        <FaFacebook className='text-[#155DFC]' /> Facebook
      </h3>
    </div>

    <div className="flex items-center gap-2">
      <span className="flex-1 h-px bg-[#D1D5DC4D]"></span>
      <span className="text-base sm:text-lg text-[#6A7282] px-2">or</span>
      <span className="flex-1 h-px bg-[#D1D5DC4D]"></span>
    </div>

    <form action="" onSubmit={form.handleSubmit(handleSignUp)}>

      <Controller name="name" control={form.control}
        render={({ field, fieldState }) => (
          <Field className='mt-5' data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name} className='text-base sm:text-lg text-[#364153]'>Name*</FieldLabel>
            <Input className='placeholder:text-base sm:placeholder:text-lg placeholder:text-[#36415380] py-5 sm:py-6'
              {...field} id={field.name} aria-invalid={fieldState.invalid}
              placeholder="Mohamed" autoComplete="off"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Controller name="email" control={form.control}
        render={({ field, fieldState }) => (
          <Field className='mt-5' data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name} className='text-base sm:text-lg text-[#364153]'>Email*</FieldLabel>
            <Input className='placeholder:text-base sm:placeholder:text-lg placeholder:text-[#36415380] py-5 sm:py-6'
              {...field} id={field.name} aria-invalid={fieldState.invalid}
              placeholder="mohamed@example.com" autoComplete="off" type='email'
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Controller name="password" control={form.control}
        render={({ field, fieldState }) => (
          <Field className='mt-5' data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name} className='text-base sm:text-lg text-[#364153]'>Password*</FieldLabel>
            <div className='relative'>
              <Input className='placeholder:text-base sm:placeholder:text-lg placeholder:text-[#36415380] py-5 sm:py-6'
                {...field} id={field.name} aria-invalid={fieldState.invalid}
                placeholder="create a strong password" autoComplete="off"
                type={showPassword ? "text" : "password"}
              />
              {showPassword
                ? <IoEyeOff onClick={() => setShowPassword(false)} className='absolute top-1/4 cursor-pointer right-3 text-xl' />
                : <IoEye onClick={() => setShowPassword(true)} className='absolute top-1/4 cursor-pointer right-3 text-xl' />}
            </div>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Controller name="rePassword" control={form.control}
        render={({ field, fieldState }) => (
          <Field className='mt-5' data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name} className='text-base sm:text-lg text-[#364153]'>Confirm Password*</FieldLabel>
            <div className='relative'>
              <Input className='placeholder:text-base sm:placeholder:text-lg placeholder:text-[#36415380] py-5 sm:py-6'
                {...field} id={field.name} aria-invalid={fieldState.invalid}
                placeholder="confirm your password" autoComplete="off"
                type={showRePassword ? "text" : "password"}
              />
              {showRePassword
                ? <IoEyeOff onClick={() => setShowRePassword(false)} className='absolute top-1/4 cursor-pointer right-3 text-xl' />
                : <IoEye onClick={() => setShowRePassword(true)} className='absolute top-1/4 cursor-pointer right-3 text-xl' />}
            </div>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Controller name="phone" control={form.control}
        render={({ field, fieldState }) => (
          <Field className='mt-5' data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name} className='text-base sm:text-lg'>Phone Number*</FieldLabel>
            <Input className='placeholder:text-base sm:placeholder:text-lg placeholder:text-[#36415380] py-5 sm:py-6'
              {...field} id={field.name} aria-invalid={fieldState.invalid}
              placeholder="+1 234 567 8900" autoComplete="off" type='tel'
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <div className='flex items-start gap-2 my-5'>
        <input type="checkbox" className='mt-1 shrink-0' />
        <p className='text-sm sm:text-base text-[#364153]'>
          I agree to the <span className='text-[#16A34A]'><Link href={"/"}>Terms of Service</Link></span> and <span className='text-[#16A34A]'><Link href={"/"}>Privacy Policy</Link></span> *
        </p>
      </div>

      <Button className='cursor-pointer w-full text-white bg-[#16A34A] text-base sm:text-lg py-5 sm:py-6'>
        <FaUserPlus /> Create My Account
      </Button>

      <div className='w-full h-[1px] bg-[#D1D5DC4D] mt-4 mb-7'></div>
      <h3 className='text-center text-base sm:text-lg text-[#364153]'>
        Already have an account? <span className='text-[#16A34A]'><Link href={"/login"}>Sign In</Link></span>
      </h3>

    </form>
  </div>

</div>
    </>
  )
}
