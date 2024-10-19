'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import AuthButton from '../Reusables/AuthButton'

const Success = () => {
    const router =  useRouter()
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
        Congratulations
        </h1>
        <p className="text-[#00030AA3] text-[14px] leading-[21px]">
        You have successfully completed your registration.
        </p>

        <div className='flex items-center justify-center'>
            <Image src={'/img/congratulations.svg'} alt='congratulations' width={300} height={300} priority />
        </div>
        <div className='my-5'>
            <AuthButton
              text="Go to homepage"
              bgColor="bg-black"
              textColor="text-white"
            />
          </div>
       
      </div>
    </div>
  )
}

export default Success