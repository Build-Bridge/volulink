import React, { ReactNode } from 'react'
import Nav from '../Widgets/Nav'
import Image from 'next/image'
import Sidebar from '../Dashboard/Sidebar';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({children}) => {
  return (
    <section className='relative'>
      <div className='sticky top-0 left-0 right-0 hidden md:block'>
        <Nav/>
      </div>
     <div className='flex gap-5 p-5 min-h-full'>
        <div className='static top-[80px] max-h-[25%] left-0 z-20'> 
            <Sidebar/>
        </div>
        <div className='flex-1'>{children}</div>
     </div>
    </section>
    
  )
}

export default DashboardLayout