import React from 'react'
import { RiFacebookFill, RiInstagramFill, RiLinkedinFill, RiTwitterFill, RiYoutubeFill } from 'react-icons/ri'

const Footer = () => {
    const footerProps = [
        {title : 'product' ,list: ['Features','pricing', 'case studies', 'reviews', 'updates']},
        {title: 'company', list: ['about', 'contact us', 'careers', 'culture', 'blog']},
        {title: 'support',list: ['getting started', 'help center','server status','report a bug','chat support']}

    ]
  return (
    <div className='flex flex-col gap-9'>
        <div className='border-y px-20 md:flex justify-between py-5 items-center'>
            <h1 className='font-semibold text-2xl'>Volulink</h1>
            <p className='text-off-black'>Discover meaningful volunteer opportunities or find dedicated volunteers <br className='max-md:hidden'/> to support your cause.</p>
        </div>

        <div className='section px-8 grid md:grid-cols-[2fr__2fr__2fr__3fr] gap-3 py-3 md:px-28'>
            {footerProps.map((item:any) => {
                return (
                    <div className='flex flex-col gap-3'>
                        <h2 className='text-lg font-medium'>{item.title}</h2>
                        <ul>
                            {item.list.map((list : any) => {
                                return (
                                    <li className='text-off-black text-sm'>
                                        {list}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}

            <div className='flex flex-col gap-3'>
                <h2 className='text-base font-medium'>
                    Suscribe to our newsletter
                </h2>
                <p className='text-off-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus commodi itaque laborum?</p>
                <div className='flex flex-col gap-2'>
                    <input type="email" name="" placeholder='Enter your email' className='btn border' id="" />
                    <button className='btn bg-black text-white w-fit'>
                        Suscribe
                    </button>
                </div>
            </div>
        </div>

        {/* <hr /> */}

        <div className='flex justify-between mx-24 border-t py-6'>
            <p className='text-off-black'>
                Copyright &copy; 2024 funaab | All Right reserved
            </p>
            <div className='flex gap-2'>
                <RiFacebookFill />
                <RiTwitterFill />
                <RiInstagramFill />
                <RiLinkedinFill />
                <RiYoutubeFill />
            </div>
        </div>
    </div>
  )
}

export default Footer