import Image from 'next/image'
import React from 'react'

const AvatarWithUsername = () => {
  return (
    <div className='flex items-center justify-center gap-1'>
        <small className='text-[14px] leading-[14px] text-[#00030AA3]'>Nuel Uchenna</small>
        <Image src={'/img/Avatar.svg'} alt='profile' priority width={20} height={20} />
    </div>
  )
}

export default AvatarWithUsername