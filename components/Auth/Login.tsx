'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import ControlledInput from '../Reusables/ControlledInput'
import AuthButton from '../Reusables/AuthButton'
import Link from 'next/link'

const Login = () => {
    const router = useRouter()
  return (
    <div className="w-full md:max-w-[430px] mx-auto py-10">
      <div>
        <IoMdArrowBack
        className="cursor-pointer"
          onClick={() => {
            router.back()
          }}
          size={25}
        />
      </div>
      <div className="my-5 w-full">
        <h1 className="font-medium text-[32px] leading-[40px] my-2">
         Welcome back
        </h1>
        <p className="text-[#00030AA3] text-[14px] leading-[21px]">
        Let&apos;s see the opportunity that awaits you in just one click.
        </p>

        <form autoComplete="off" className="my-5 space-y-5 w-full">
          <div>
            <ControlledInput
              type="email"
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <ControlledInput type="password" placeholder="Password" />
          </div>
          <div>
            <AuthButton
              text="Log in"
              bgColor="bg-black"
              textColor="text-white"
            />
          </div>
        </form>
        <div className="my-5 space-y-3 w-full">
          <div>
            <AuthButton
              icon="/img/google.svg"
              text="Continue with Google"
              bgColor="bg-transparent"
              textColor="text-black"
            />
          </div>
          <div>
            <AuthButton
              icon="/img/apple.svg"
              text="Continue with Apple"
              bgColor="bg-transparent"
              textColor="text-black"
            />
          </div>
        </div>

        <div className="w-full flex items-center  justify-center">
          <small className="text-[12px] leading-3 text-center">
            Already have an account?{" "}
            <Link className="text-blue-900" href={"/auth/signup"}>
             Sign up
            </Link>
          </small>
        </div>
      </div>
    </div>
  )
}

export default Login