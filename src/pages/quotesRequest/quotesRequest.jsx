import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import QuotePicker from '../quotesRequest/datePicker'
import QuoteDropdown from '../quotesRequest/DropDown'
import TimeLine from '../quotesRequest/Timeline'
import { IoIosArrowForward } from "react-icons/io";
import UserImg from '../../assets/images/overview/Group 17.png'



export default function QuotesRequest() {
    return (
        <div className='flex flex-col md:flex-row mt-80 gap-4 px-4'>
            <div className=' shadow-sm rounded-md shadow-gray-600 w-[65%] flex ml-32 py-4 px-8 h-28'>
                <div>
                    <h2>Quote Request</h2>
                    <div className='flex justify-between gap-10 '>
                        <QuotePicker />
                        <QuoteDropdown />
                        <div className='flex'>
                            <input type="search" placeholder='E.g. Peter' className='border border-gray-300 py-2 px-6 w-28 outline-none rounded-md' />
                            <button className=' bg-[#13C265] text-white py-2 px-6 text-md rounded-sm'>Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[25%]'>
                <div className='px-4 shadow-lg shadow-gray-300 rounded-lg'>
                    <h2 className='text-lg font-medium text-center border-b-2 mb-4'>How to get customers reviews</h2>
                    <TimeLine />
                </div>
                <div className='px-4 shadow-lg shadow-gray-300 rounded-lg mt-4'>
                    <h2 className='text-lg font-medium border-b-2 mb-4'>Need help?</h2>
                    <h2 className='text-gray-300 '>Tips $ Best Practices</h2>
                    <p className='p-1'>Contact a new lead within 8hrs to
                        win more jobs</p>
                    <p className='p-1'>If you cannot get hold of the potential
                        client, send an email to start the
                        converstation</p>
                    <p className='p-1'>Use our fair reclaims services for
                        incorrect telephone numbers. <span className='text-[#13C265]'>Terms & Conditions</span></p>

                    <div className='flex items-center justify-between border-b-2 mt-4'>
                        <h2 className=' font-medium mb-4'>Help Desk</h2>
                        <IoIosArrowForward />
                    </div>
                    <div className='flex gap-6 mt-3'>
                        <img src={UserImg} alt="" className=' cursor-pointer' />
                        <div>
                            <h2 className='text-md md:text-lg'>Asad Khan</h2>
                            <button className=' bg-[#1ABD5E] text-white text-sm md:text-lg px-4 lg:px-4 rounded-sm py-1 mt-1'>Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
