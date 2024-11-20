import React from 'react'

const Job = () => {
  return (
   <section className='max-w-screen-lg mx-auto'>
    <header className='flex items-center justify-between border-y border-[#00030A14] py-2'>
        <div>
        <h2 className='font-medium text-[32px] leading-10'>UI-Ux designer</h2>
        <small className='text-[12px] leading-[18px] font-normal text-[#00030AA3]'>Lagos, Nigeria</small>
        </div>
        <div>
            <button className='bg-[#0041C4] text-white py-3 px-5 rounded-md font-semibold leading-4'>Apply now!</button>
        </div>
    </header>

    <article>
        <h3>Job description</h3>

        <div></div>
    </article>
   </section>
  )
}

export default Job