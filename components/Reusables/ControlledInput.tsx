import React from 'react'
import { PiEyeThin, PiEyeSlashThin } from "react-icons/pi";

const ControlledInput = () => {
  return (
    <div className='flex items-center gap-3 p-3 w-full max-w-[400px] border border-[#00030AA3] rounded my-1'>
      <input className='flex-1 text-[#00030A52] text-[14px]' type="text" placeholder='Enter your email address' />
      <PiEyeSlashThin className='text-[#00030A52]' size={20} />
    </div>
  )
}

export default ControlledInput