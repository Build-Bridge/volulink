import React from 'react'
import ControlledSearch from '../Reusables/ControlledSearch'
import AvatarWithUsername from '../Reusables/AvatarWithUsername'

const Nav = () => {
  return (
   <nav className='flex items-center justify-between py-2 px-3'>
    <div>
      <h1 className='font-semibold text-[24px] leading-[30px] capitalize'>volulink</h1>
    </div>
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