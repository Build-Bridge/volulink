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
      <div className='sticky top-0 hidden md:block'>
        <Nav/>
      </div>
     <div className='flex gap-2 p-5'>
        <div>
            <Sidebar/>
        </div>
        <div className='flex-1'>{children}</div>
     </div>
    </section>
    
  )
}

export default DashboardLayout