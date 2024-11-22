import React from 'react'
import {account, nav_links} from '../Constant/index'
import Link from 'next/link'
import { IoCloseSharp } from "react-icons/io5";

interface MobileMenuProps {
    setShowMenu: (args: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({setShowMenu}) => {
  return (
    <aside className='h-dvh bg-white w-[65%] flex flex-col justify-between gap-10 p-5 fixed top-0 left-0'>
        <button onClick={() => setShowMenu(false)} className='flex items-center justify-end w-full'>
            <IoCloseSharp size={25} />
        </button>
  <div className='flex flex-col gap-4 flex-1'>
  {
    nav_links.map((link, index) => (
        <Link key={index} href={link.route} className='flex items-center gap-5'>
            <small>
                {link.icon}
            </small>
            <p className={`text-[14px] leading-[14px] text-[#00030AA3]`}>{link.name}</p>
        </Link>
    )
    )
  }
    </div>

    <div className='flex flex-col gap-4'>
  {
    account.map((link, index) => (
        <Link key={index} href={link.route} className='flex items-center gap-5'>
            <small>
                {link.icon}
            </small>
            <p className={`text-[14px] leading-[14px] text-[#00030AA3]`}>{link.name}</p>
        </Link>
    )
    )
  }
    </div>
    </aside>
  )
}

export default MobileMenu