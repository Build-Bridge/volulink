import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import ControlledInput from '../Reusables/ControlledInput';

const Signup = () => {
  return (
    <div className='w-full max-w-[430px] mx-auto py-10'>
        <div>
            <IoMdArrowBack size={25} />
        </div>
        <div className='my-5'>
            <h1 className='font-medium text-[32px] leading-[40px] my-2'>Let&apos;s get started</h1>
            <p className='text-[#00030AA3] text-[14px] leading-[21px]'>Are you a volunteer looking for oppurtunities? you are just one click away.</p>


            <form className='my-5 space-y-5'>
                <div>
                    <ControlledInput type="email" placeholder='Enter your email address' />
                </div>
                <div>
                    <ControlledInput type="password" placeholder='Password' />
                </div>
                <div>
                    <ControlledInput type="password" placeholder='Confirm Password' />
                </div>
                <div></div>
            </form>
        </div>
    </div>
  )
}

export default Signup