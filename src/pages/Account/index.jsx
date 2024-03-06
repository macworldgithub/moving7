import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import UserImg from '../../assets/images/overview/Group 17.png'
import SmalllFooter from '../footer/smalllFooter';

export default function Account() {
    return (
        <>
            <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-6 mt-2 lg:mb-96'>
                <div className='flex flex-col w-11/12 md:w-[60%] mt-10 lg:mt-40'>
                    <div className='ml-0 lg:ml-12 lg:-mt-36 rounded-md shadow-xl border-2'>
                        <div className='px-8 py-4 flex justify-between items-center border-b-2'>
                            <h2 className='text-lg font-medium'>Username</h2>
                            <button className='bg-primary px-6 py-1 rounded-sm text-white'>Edit</button>
                        </div>
                        <div className='flex flex-col p-4'>
                            <div className='flex gap-2 lg:gap-10 p-4 border-b-2 items-center'>
                                <h2 className='font-medium text-gray-400'>Username</h2>
                                <input type="email" placeholder='siddiqui@gmail.com' className=' font-medium text-gray-400 outline-none' />
                            </div>
                            <div className='flex gap-3 md:gap-10 p-4'>
                                <h2 className=' font-medium text-gray-400'>Password</h2>
                                <input type="password" placeholder='********' className=' font-medium text-gray-400 outline-none' />
                            </div>
                        </div>
                    </div>
                    <div className='ml-0 lg:ml-12 mt-10 rounded-md shadow-xl border-2'>
                        <div className='px-6 lg:px-8 py-4 flex justify-between items-center border-b-2'>
                            <h2 className='text-lg font-medium'>Email notifications</h2>
                            <button className='bg-primary px-6 py-1 rounded-sm text-white'>Edit</button>
                        </div>
                        <div className='flex gap-6 p-4'>
                            <h2 className='text-gray-400 px-2 lg:px-4'>Receive email notifications </h2>
                            <h2 className='text-primary font-medium'>On</h2>
                        </div>
                    </div>

                </div>

                <div className=' w-11/12 md:w-7/12 lg:w-[22%] mt-8 rounded-md shadow-xl'>
                    <div className='px-4 shadow-lg shadow-gray-300 rounded-lg mt-4 py-4 border-2'>
                        <h2 className='text-lg font-medium border-b-2 mb-4'>Need help?</h2>
                        <h2 className='text-gray-500 '>Tips $ Best Practices</h2>
                        <p className='p-1 text-gray-400'>Contact a new lead within 8hrs to
                            win more jobs</p>
                        <p className='p-1 text-gray-400'>If you cannot get hold of the potential
                            client, send an email to start the
                            converstation</p>
                        <p className='p-1 text-gray-400'>Use our fair reclaims services for
                            incorrect telephone numbers. <span className='text-[#13C265]'>Terms & Conditions</span></p>

                        <div className='flex items-center justify-between border-b-2 mt-4'>
                            <h2 className=' font-medium mb-4'>Help Desk</h2>
                            <IoIosArrowForward />
                        </div>
                        <div className='flex gap-6 mt-3 py-4'>
                            <img src={UserImg} alt="" className=' cursor-pointer' />
                            <div>
                                <h2 className='text-md md:text-lg'>Asad Khan</h2>
                                <button className=' bg-[#1ABD5E] text-white text-sm md:text-lg px-4 lg:px-4 rounded-sm py-1 mt-1'>Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SmalllFooter />
        </>
    )
}
