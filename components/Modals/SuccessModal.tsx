import Image from 'next/image'
import React from 'react'
import AuthButton from '../Reusables/AuthButton'

const SuccessModal = () => {
  return (
    <section className="bg__overlay">
      <div className="flex items-center justify-center w-full h-full">
        <div className="max-w-[560px] w-full bg-white h-fit p-6 rounded-2xl border border-[#00030A]">
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
              text="Continue application"
              bgColor="bg-black"
              textColor="text-white"
            />
          </div>
          <div>
          <AuthButton   
              text="Go to hompage"
              bgColor="bg-transparent"
              textColor="text-black"
            />
          </div>

          
        </div>
      </div>
    </section>
  )
}

export default SuccessModal