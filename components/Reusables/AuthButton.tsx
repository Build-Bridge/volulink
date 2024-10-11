import Image from 'next/image'
import React from 'react'

interface AuthButtonProp {
  icon: string;
  text: string;
  textColor: string;
  bgColor: string;
}

const AuthButton: React.FC<AuthButtonProp> = ({icon, text, textColor, bgColor}) => {
  return (
    <div className='w-full max-w-[400px] flex items-center justify-center m-2'>
   <button className={`w-full text-center bg-transparent text-black font-semibold leading-4 p-3 rounded-md flex items-center justify-center gap-3 border border-[#00030A52]`}>
    {
      icon && (
      <Image src={icon} alt={text} priority width={20} height={20} /> 
      )
    }
   {text}
   </button>
    </div>
  )
}

export default AuthButton