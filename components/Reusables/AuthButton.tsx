import Image from 'next/image'
import React from 'react'

const AuthButton = () => {
  return (
    <div className='w-full max-w-[400px] flex items-center justify-center m-2'>
   <button className='w-full text-center bg-transparent text-black font-semibold leading-4 p-3 rounded-md flex items-center justify-center gap-3 border border-[#00030A52]'>
    {/* <Image src={'/apple.svg'} alt='google' priority width={20} height={20} /> */}
   Sign up
   </button>
    </div>
  )
}

export default AuthButton