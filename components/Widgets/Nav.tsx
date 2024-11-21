import React from 'react'
import ControlledSearch from '../Reusables/ControlledSearch'
import AvatarWithUsername from '../Reusables/AvatarWithUsername'
import Link from 'next/link'

const Nav = () => {
  return (
   <nav className='flex items-center justify-between py-2 px-3 bg-white border-b z-50'>
    <Link href={'/'}>
      <h1 className='font-semibold text-[24px] leading-[30px] capitalize'>volulink</h1>
    </Link>
    <div className='flex-1'>
      <ControlledSearch/>
    </div>
    <div>
      <AvatarWithUsername/>
    </div>
   </nav>
  )
}

export default Nav