import React, { ReactNode } from 'react'
import Nav from '../Widgets/Nav'
import Image from 'next/image'

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({children}) => {
  return (
    <section className='relative'>
      <div className='sticky top-0'>
        <Nav/>
      </div>
      <div className='grid grid-cols-2 w-full gap-5 min-h-dvh'>
        <div className='h-full w-full'>
          <Image className='h-full w-full object-cover' src={'/img/auth_img.svg'} alt="auth" priority width={100} height={100} />
        </div>
        <div className='w-full h-full'>
          {children}
        </div>
      </div>
    </section>
  )
}

export default AuthLayout