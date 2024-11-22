'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const Dashboard = () => {
  const [tabs, setTabs] = useState<'matches' | 'recent'>('matches')
  return (
  <section className='max-w-screen-lg'>
    <div className='flex items-center justify-between'>
      <h3 className='font-semibold text-[14px] leading-[27px] text-nowrap md:text-[18px]'>Volunteers you might like</h3>
      <button className='bg-black py-2 px-3 rounded-lg text-white capitalize text-[14px] text-nowrap md:text-[16px]'>Post volunteer Opportunity</button>
    </div>

{/* Tabs */}
    <div className='flex items-center gap-5 my-5'>
      <p onClick={() => {
        setTabs('matches')
      }} className={`leading-6 py-1 capitalize cursor-pointer  ${tabs === 'matches' ? 'border-b border-[#000000] text-black' : 'border-b border-[#00030A52] text-[#00030A52]'}`}>Best Matches</p>
      <p onClick={() => {
        setTabs('recent')
      }} className={`leading-6 py-1 capitalize cursor-pointer  ${tabs === 'recent' ? 'border-b border-[#000000] text-black' : 'border-b border-[#00030A52] text-[#00030A52]'}`}>Most Recent</p>
    </div>

    <div>
    {  Array.from({length: 10}).map((_,index) => (
      <div className='flex gap-2 items-start border-t border-[#CDCDCD] p-3' key={index}>
        <div>
        <Image src={'/img/Avatar.svg'} className='md:w-[50px] md:h-[50px]' alt='profile' priority width={300} height={300} />
        </div>
        <div className='flex-1'>
          <h3 className='font-normal leading-5 text-[#00030AA3]'>Nuel Uchenna</h3>
          <h1 className='font-semibold text-[18px] leading-6'>Community Outreach Coordinator</h1>
          <small className='text-[#00030AA3] font-medium leading-6'>Lagos, LA</small>
          <p className='font-normal text-[14px] leading-[21px] text-[#00030AA3]'>Researcher who has published articles in journals, and can help you with guaranteed acceptance of paper. Dealing with URGENT/ quick turnover tasks. Dedicated and seasoned professional with extensive experience in research, statistical analysis, and</p>
          <div className='my-3 flex items-center gap-5'>
            <button className='bg-black py-3 px-5 rounded-lg text-white font-semibold leading-4 capitalize'>reach out</button>
            <button className='bg-transparent border border-black py-[10px] px-5 rounded-lg text-black font-semibold leading-4 capitalize'>view profile</button>
          </div>
        </div>
      </div>
    ))}
    </div>
  </section>
  )
}

export default Dashboard