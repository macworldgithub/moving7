import React from 'react'
import MapImg from '../../../../../assets/images/Map 1.png'
import RegionAccordion from '../../Accordion'
export default function FreeTrialForm() {
    return (
        <div className='flex items-center justify-center mx-auto'>
            <div>
                <h2 className='lg:font-semibold text-3xl text-center p-6 mb-4'>Welcome to free trial</h2>
                <div className=' bg-[#E8FFF3] flex items-center flex-col flex-wrap justify-center rounded-md border-gray-200 border-2 p-3 w-11/12 lg:w-[1010px] mx-auto'>
                    <h2 className='text-[#13C265] text-2xl'>Select removal types</h2>
                    <div className='flex flex-col flex-wrap md:flex-row'>
                        <button className=' bg-[#f0f0f0] w-40 flex-wrap m-2 p-1 rounded shadow text-md sm:text-base lg:text-lg active:text-red-blue'>
                            Local
                        </button>
                        <button className=' bg-[#f0f0f0] w-40 flex-wrap m-2 p-1 rounded shadow text-md sm:text-base lg:text-lg active:text-red-blue'>
                            International
                        </button>
                        <button className=' bg-[#f0f0f0] w-40 flex-wrap m-2 p-1 rounded shadow text-md sm:text-base lg:text-lg active:text-red-blue'>
                            Storage
                        </button>
                    </div>
                    <div>
                        <h2 className='text-[#13C265] text-2xl text-center p-3'>Set a radius or select areas</h2>
                        <div className=' bg-white rounded-md border-[#13C26580] border-[1.5px]'>
                            <div className='flex w-[255px] md:w-[516px] px-2 py-1'>
                                <input type="radio" />
                                <p className='ml-2'>Set a radius</p>
                            </div>
                        </div>
                        <div>
                            <div className=' bg-white mt-2 rounded-md border-[#13C26580] border-[1.5px]'>
                                <div className='flex w-[255px] md:w-[516px] px-2 py-1'>
                                    <input type="radio" />
                                    <p className='ml-2'>Set a region</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    < RegionAccordion />
                    <div className='p-3'>
                        <div>
                            <h2 className='text-[#13C265] text-2xl text-center'>Provide your location and select a radius</h2>
                            <h3 className='text-gray-400 font-extralight text-xl'>Maximum of 20 miles during free trial</h3>
                        </div>
                        <div className='flex flex-wrap gap-2 md:gap-4 mt-4'>
                            <div>
                                <h3>Your Location</h3>
                                <input type="text" placeholder='Address' className='w-[14rem] md:w-[18rem] px-2 py-1 rounded-md border-[#13C26580] border-[1.5px]' />
                            </div>
                            <div>
                                <h3>Radius</h3>
                                <input type="number" placeholder='5 miles' className=' w-[6rem] md:w-[12rem] px-2 py-1 rounded-md border-[#13C26580] border-[1.5px]' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={MapImg} alt="" className=' w-3/4 flex items-center justify-center mx-auto' />
                    </div>
                    <div>
                        <h2 className='text-[#13C265] text-2xl text-center p-4'>Company details</h2>
                        <div>
                            <input type="text" placeholder='Company name' className='w-[255px] md:w-[516px] px-2 py-1 rounded-md border-[#13C26580] border-[1.5px]' />
                        </div>
                        <div className='mt-2'>
                            <h3 className='text-[#13C265]'>Business type</h3>
                            <div className=' bg-white rounded-md border-[#13C26580] border-[1.5px]'>
                                <div className='flex w-[255px] md:w-[516px] px-2 py-1'>
                                    <input type="radio" />
                                    <p className='ml-2'>Sole trader</p>
                                </div>
                            </div>
                            <div className=' bg-white mt-2 rounded-md  border-[#13C26580] border-[1.5px]'>
                                <div className='flex w-[255px] md:w-[516px] px-2 py-1 '>
                                    <input type="radio" />
                                    <p className='ml-2'>Company</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-2 mb-4'>
                            <h3 className='text-[#13C265]'>Number of employees</h3>
                            <input type="number" placeholder='Select' className='w-[255px] md:w-[516px] px-2 py-1 rounded-md border-[#13C26580] border-[1.5px]' />
                        </div>
                        <div>
                            <h2 className=' text-[#13C265]'>Email</h2>
                            <input type="text" placeholder='example@gmail.com' className='w-[255px] md:w-[516px] px-2 py-1 rounded-md border-[#13C26580] border-[1.5px]' />
                        </div>
                        <div>
                            <h2 className=' text-[#13C265] mt-3'>Telephone</h2>
                            <input type="text" placeholder='Telephone' className='w-[255px] md:w-[516px] px-2 py-1 rounded-md border-[#13C26580] border-[1.5px]' />
                        </div>
                        <div>
                            <h2 className=' text-[#13C265] mt-3'>Address line 1</h2>
                            <input type="text" placeholder='Address line 1' className='w-[255px] md:w-[516px] px-2 py-1 rounded-md border-[#13C26580] border-[1.5px]' />
                        </div>
                        <div>
                            <h2 className=' text-[#13C265] mt-3'>Town/City</h2>
                            <input type="text" placeholder='Town/City' className='w-[255px] md:w-[516px] px-2 py-1 rounded-md border-[#13C26580] border-[1.5px]' />
                        </div>
                        <div>
                            <h2 className=' text-[#13C265] mt-3'>State </h2>
                            <input type="text" placeholder='Select a State' className='w-[255px] md:w-[516px] px-2 py-1 rounded-md border-[#13C26580] border-[1.5px]' />
                        </div>
                        <div>
                            <h2 className='text-[#13C265] text-2xl text-center pt-6'>Contact person</h2>
                            <div>
                                <h2 className=' text-[#13C265]'>Salutation</h2>
                                <input type="text" placeholder='Salutation' className='w-[255px] md:w-[516px] px-2 py-1 rounded-md border-[#13C26580] border-[1.5px]' />
                            </div>
                            <div>
                                <h2 className=' text-[#13C265] mt-3'>First name</h2>
                                <input type="text" placeholder='First name' className='w-[255px] md:w-[516px] px-2 py-1 rounded-md border-[#13C26580] border-[1.5px]' />
                            </div>
                            <div>
                                <h2 className=' text-[#13C265] mt-3'>Last name</h2>
                                <input type="text" placeholder='Last name' className='w-[255px] md:w-[516px] px-2 py-1 rounded-md border-[#13C26580] border-[1.5px] mb-4' />
                            </div>

                            <button className='w-[255px] md:w-[516px] text-white p-2 bg-[#00DD68] mt-4 rounded-md'>Create an new account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
