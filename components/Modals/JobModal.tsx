import React from 'react'
import { IoIosSearch } from 'react-icons/io'

const JobModal = () => {
  return (
    <div className='bg-white fixed top-10 w-[790px] h-[500px] border border-[#00030A] rounded-xl p-2 overflow-hidden'>
      <div className='border border-[#00030A29] p-2 rounded-lg flex items-center justify-between gap-2'>
      <IoIosSearch size={25} className="mx-1.5"/>
        <input className='flex-1 focus:outline-none' placeholder='Ui' type="text" />
        <button className='bg-black py-3 px-5 text-white rounded-md capitalize font-semibold leading-4'>search</button>
      </div>

      <div className='p-2'>
      {Array.from({ length: 20 }).map((_, index) => (
        <div className='text-[#00030AA3] border-y border-[#00030A14] py-1 my-1'>
          <p className='font-medium text-[14px] leading-[21px]'>UI/<span className='font-normal'>Ux Designer </span></p>
          <small>Lagos, Nigeria</small>
        </div>
        ))}
      </div>
    </div>
  )
}

export default JobModal