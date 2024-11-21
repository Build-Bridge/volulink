'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars, FaHeartCrack, FaBook, FaComment, FaUser, FaGear } from 'react-icons/fa6'

const Sidebar = () => {
    const [expand, setExpand] = useState(false)

    const handleExpand = () => {
        setExpand(prev => !prev)
    }
    const nav_links = [
        {
            route: '/',
            name: 'Volunteer',
            icon: <FaHeartCrack size={20}/>
        },
        {
            route: '/',
            name: 'Organisation',
            icon: <FaBook size={20}/>
        },
        {
            route: '/',
            name: 'Commmunity',
            icon: <FaComment size={20}/>
        }
    ]

    const account = [
        {
            route: '/',
            name: 'Your data',
            icon: <FaUser size={20}/>
        },
        {
            route: '/',
            name: 'Settings',
            icon: <FaGear size={20}/>
        }
    ]
  return (
  <aside className={`bg-[#00030A14] min-h-[25%] rounded-2xl p-4 flex flex-col justify-between gap-10 ${expand ? 'w-[200px] transition-all duration-200' : 'w-[60px] items-center transition-all duration-200'}`}>
    <div>
        <FaBars className='cursor-pointer' onClick={handleExpand} size={30}/>
    </div>

    <div className='flex flex-col gap-4 flex-1'>
  {
    nav_links.map((link, index) => (
        <Link key={index} href={link.route} className='flex items-center gap-5'>
            <small>
                {link.icon}
            </small>
            <p className={`text-[14px] leading-[14px] text-[#00030AA3] ${expand ? 'block transition-all duration-200' : 'hidden transition-all duration-200'}`}>{link.name}</p>
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
            <p className={`text-[14px] leading-[14px] text-[#00030AA3] ${expand ? 'block transition-all duration-200' : 'hidden transition-all duration-200'}`}>{link.name}</p>
        </Link>
    )
    )
  }
    </div>

  </aside>
  )
}

export default Sidebar