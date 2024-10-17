import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge';

interface AuthButtonProp {
  icon?: string;
  text: string;
  textColor: string;
  bgColor: string;
}


const AuthButton: React.FC<AuthButtonProp> = ({icon, text, textColor, bgColor}) => {

  const buttonClasses = twMerge(
    `w-full text-center font-semibold leading-4 p-[13px] rounded-md flex items-center justify-center gap-3 cursor-pointer`,
    icon ? 'bg-transparent border border-[#00030A52]' : bgColor,
    textColor
  );

  return (
    <div className='w-full max-w-[400px] flex items-center justify-center my-2'>
   <button className={buttonClasses}>
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