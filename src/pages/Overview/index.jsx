import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import UserImg from '../../../src/assets/images/overview/Group 17.png'


let Projects = [
    { Name: "Bilal", Date: "20-04-2000" },
    { Name: "Anas", Date: "20-04-2000" },
    { Name: "Asad", Date: "20-04-2000" },
    { Name: "salman", Date: "20-04-2000" }

]

export default function Overview() {
    return (
        <div>
            <div className='flex flex-col lg:flex-row items-center justify-center'>
                <div className='flex items-center justify-center flex-col'>
                    <div className=' w-4/5 md:w-4/6 bg-[#D0E9F4] px-6 py-8 mt-20 lg:-mt-20 lg:ml-40'>
                        <h2 className=' text-lg md:text-2xl font-semibold'>Welcome to Moving24!</h2>
                        <p className='text-md md:text-lg pt-2'>We are currently verifying your business so your Free Trail can begin. This usually takes
                            1-2 working days. You may start to receive job requests - if so, you will find them below,
                            and we will send them your email.</p>
                    </div>
                    <div className='w-4/5 md:w-4/6 bg-[#D1F2DF] px-6 py-8 mt-8 lg:ml-40'>
                        <h2 className=' text-lg md:text-2xl font-semibold'>More accepted quotes?</h2>
                        <p className='text-md md:text-lg pt-2'>Did you know that 84% of customers first check your company profile? Complete your
                            company profile and request (external) reviews.</p>
                        <button className='bg-[#1ABD5E] px-4 py-2 text-white mt-6 rounded-sm'>Let’s get started!</button>
                    </div>

                </div>
                <div className='w-4/5 lg:w-2/5 flex flex-col sm:flex-row gap-3 lg:gap-0 lg:flex-col items-start justify-center mt-10'>
                    <div className='w-full shadow-xl rounded-md px-4 py-6'>
                        <div className='border-b-2 w-full'>
                            <h2 className='font-semibold text-lg pb-2'>Account details</h2>
                        </div>
                        <div>
                            <h2 className='w-full font-semibold pt-2 text-lg'>User Name</h2>
                            <p className='text-lg text-gray-400'>Account status</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div>
                                <h2 className='w-full font-semibold pt-2 text-lg'>Account status</h2>
                                <p className='text-lg font-light text-red-600'>Waiting for verification</p>
                            </div>
                            <div>
                                <IoIosArrowForward size={35} />
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div>
                                <h2 className='w-full font-semibold pt-2 text-lg'>Targeting</h2>
                                <p className='text-lg text-gray-400'>Radius 20 mils from Seattle, WA,
                                    USA</p>
                            </div>
                            <div>
                                <IoIosArrowForward size={35} />
                            </div>
                        </div>
                    </div>
                    <div className='w-full shadow-xl rounded-md px-4 py-6 lg:mt-8'>
                        <div className='border-b-2 w-full'>
                            <h2 className='font-semibold text-lg pb-2'>Need help?</h2>
                        </div>

                        <div className='flex items-center justify-between border-b-2'>
                            <div>
                                <h2 className='w-full font-medium py-4 text-md'>Help Desk</h2>
                            </div>
                            <div>
                                <IoIosArrowForward size={25} />
                            </div>
                        </div>
                        <div className='flex flex-col justify-between'>
                            <div>
                                <p className='text-lg text-gray-400 mt-4'>Or contact your Account Manager</p>
                            </div>
                            <div className='flex gap-6 mt-3'>
                                <img src={UserImg} alt="" className=' cursor-pointer' />
                                <div>
                                    <h2 className=' text-lg'>Asad Khan</h2>
                                    <button className=' bg-[#1ABD5E] text-white text-md px-10 rounded-sm py-1 mt-1'>Contact</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center flex-col mt-6 sm:mt-28 lg:flex-col'>
                <div className='w-4/5 md:w-1/2 py-8 mt-1 md:-mt-28 lg:ml-40 rounded-sm lg:mr-96'>
                    <div className='bg-white shadow-lg'>
                        <h2 className='text-lg px-4 py-4 font-medium'>5 most recent Quote Requests</h2>
                    </div>
                </div>
                <div className='w-4/5 md:w-1/2 -mt-8 lg:ml-40 bg-[#EFF2F3] rounded-lg lg:mr-96'>
                    <div className='bg-[#E6EBEC] flex justify-between px-6 py-4 font-semibold text-[#6A6A6A]'>
                        <h2>Name</h2>
                        <h2>Date</h2>
                    </div>

                    <div className='h-64 flex mt-2 justify-start'>
                        {Projects.length > 0 ? (

                            < div className='w-full'>
                                {Projects.map(project => (
                                    <div className='flex justify-between' key={project.Name}>
                                        <h2 className='px-6'>{project.Name}</h2>
                                        <h2 className='px-6' >{project.Date}</h2>
                                    </div>
                                ))}

                            </div>
                        ) : (
                            <p className='text-md font-light flex items-center justify-center text-center w-full'>No quote requests received yet. We will email you once we have suitable projects.</p>
                        )}

                    </div>
                </div>
            </div>

        </div >
    )
}
