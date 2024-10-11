'use client'
import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi";


const ControlledSearch = () => {
  const [searchInput, setSearchInput] = useState<string>()
  return (
    <div className='bg-[#00030A14] py-2 px-3 w-full max-w-[400px] mx-auto flex items-center gap-3 rounded'>
        <FiSearch />
        <input onChange={(e) => setSearchInput(e.target.value)} type="text" className='bg-transparent focus:outline-none flex-1 w-full' placeholder='Search for Job oppourtunites/volunteers' />
    </div>
  )
}

export default ControlledSearch