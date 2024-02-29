import React from 'react'
// import { IoIosArrowDown } from "react-icons/io";
import QuotePicker from '../quotesRequest/datePicker'
import QuoteDropdown from '../quotesRequest/DropDown'
import TimeLine from '../quotesRequest/Timeline'
import { IoIosArrowForward } from "react-icons/io";
import UserImg from '../../assets/images/overview/Group 17.png'
import SmalllFooter from '../footer/smalllFooter';

let Projects = [
    { Name: "Bilal" },
    { Status: "Open" },
    { Date: "20-04-2000" }

]

export default function QuotesRequest() {
    return (
        <>
            <div className='flex flex-col md:flex-row mt-8 lg:mt-10 gap-4 px-4 relative'>
                <div className='shadow-sm rounded-b-none shadow-gray-400 sm:w-[80%] lg:w-[63%] flex lg:ml-28 py-4 px-8 sm:h-48 md:h-48 lg:h-28'>
                    <div className='w-full'>
                        <h2 className='text-lg font-medium mb-2'>Quote Request</h2>
                        <div className='flex flex-col lg:flex-row justify-between items-center gap-2 xl:gap-10 '>
                            <QuotePicker />
                            <QuoteDropdown />
                            <div className='flex'>
                                <input type="search" placeholder='E.g. Peter' className='border rounded-r-none border-gray-300 px-6 w-28 outline-none rounded-md' />
                                <button className=' bg-[#13C265] text-white py-2 px-6 text-md rounded-sm rounded-l-none'>Search</button>
                            </div>
                        </div>
                        <div className='lg:mt-[18px] w-[91%] sm:w-[44%] sm:mt-4 mt-4 -ml-8 lg:-ml-8 lg:w-[59.4%] xl:w-[61.4%] rounded-b-md absolute'>
                            <div className='flex justify-between px-4 py-2 bg-[#E6EBEC]'>
                                <h2 className='md:w-28'>Name</h2>
                                <h2 className='md:w-28'>Status</h2>
                                <h2 className='md:w-28'>Date</h2>
                            </div>
                            {Projects.length > 0 ? (
                                <div className='flex justify-between py-4 px-4 h-52 bg-[#EFF2F3] overflow-x-scroll'>
                                    {Projects.map((project, index) => (
                                        <div key={index}>
                                            <h2 className=' md:w-28'>{project.Name}</h2>
                                            <h2 className=' md:w-28'>{project.Status}</h2>
                                            <h2 className=' md:w-28'>{project.Date}</h2>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className='bg-[#EFF2F3]'>
                                    <p className='py-16 px-4 text-center text-gray-400'>No quote requests received yet. We will email you once we have suitable projects.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>


                <div className='w-full lg:w-[25%] mt-60 sm:mt-0'>
                    <div className='px-4 shadow-lg shadow-gray-300 rounded-lg'>
                        <h2 className='text-lg font-medium border-b-2 mb-4'>How to get customers reviews</h2>
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
                        <div className='flex gap-6 mt-3 py-4'>
                            <img src={UserImg} alt="" className=' cursor-pointer' />
                            <div>
                                <h2 className='text-md md:text-lg'>Asad Khan</h2>
                                <button className=' bg-[#1ABD5E] text-white text-sm md:text-lg px-4 lg:px-4 rounded-sm py-1 mt-1'>Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <SmalllFooter />
        </>
    )
}
