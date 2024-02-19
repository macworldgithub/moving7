
import React from 'react'

import UserImg from '../../assets/images/login/Group.svg'
import UserIcon from '../../assets/images/login/Vector (1).svg'
import Lock from '../../assets/images/login/Vector (2).svg'
import Footer from '../footer/footer'

export default function Login() {
    return (
        <>
            <div className=' w-4/5 xl:w-1/3 sm:mt-60 lg:mt-96 bg-[#EDEDED] mx-auto relative rounded-3xl'>
                <div className='flex items-center justify-center flex-col mt-40 md:mt-0'>
                    <div className='bg-[#13C265] rounded-full h-[5rem] w-[5rem] md:h-40 md:w-40 flex items-center justify-center p-[1.25rem] md:p-9 -mt-[3rem]  md:-mt-20 mb-12'>
                        <img src={UserImg} />
                    </div>
                    <div className='flex'>
                        <div className='bg-[#13C265] p-3'>
                            <img src={UserIcon} alt="" className=' h-6 md:h-auto' />
                        </div>
                        <input type="text" placeholder='Email ID' className=' md:w-80 pl-3 bg-[#BEDBBE] placeholder:text-white' />
                    </div>
                    <div className='flex mt-4'>
                        <div className='bg-[#13C265] p-3'>
                            <img src={Lock} alt="" className=' h-6 md:h-auto' />
                        </div>
                        <input type="text" placeholder='Password' className=' md:w-80 pl-3 bg-[#BEDBBE] placeholder:text-white' />
                    </div>
                    <div className='flex flex-col sm:flex-row gap-2 md:gap-28 mt-11 mb-9'>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <h2 className='font-light'>Remember me</h2>
                        </div>
                        <div>
                            <h2 className='font-light italic'>Forget Password?</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center bg-slate-300 w-44 md:w-96 mx-auto py-4 rounded-b-3xl bg-gradient-to-b from-[#13C265] to-[#BEDBBE] text-white md:text-2xl mb-20 lg:mb-96'>
                <button>Login</button>
            </div>
            <Footer />
        </>
    )
}
