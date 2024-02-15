import React from 'react'
export default function OnlineAccForm() {
    return (
        <div className='flex items-center justify-center mx-auto'>
            <div>
                <h2 className='lg:font-semibold text-3xl text-center p-6 mb-4'>Welcome to free trial</h2>
                <div className=' bg-[#E8FFF3] flex items-center flex-col flex-wrap justify-center rounded-md border-gray-200 border-2 p-3 w-11/12 sm:w-full lg:w-[1010px] mx-auto'>
                    <h2 className='text-[#13C265] text-2xl'>Create Your Online Account</h2>
                    <div>
                        
                        <div>
                            <h2 className=' text-[#13C265]'>Username</h2>
                            <input type="text" placeholder='Name@gmail.com' className='w-[255px] md:w-[516px] px-2 py-1 rounded-md border-[#13C26580] border-[1.5px]' />
                        </div>
                        <div>
                            <h2 className=' text-[#13C265] mt-3'>Choose your password</h2>
                            <input type="text" className='w-[255px] md:w-[516px] px-2 py-1 rounded-md border-[#13C26580] border-[1.5px]' />
                        </div>
                        <div>
                            <h2 className=' text-[#13C265] mt-3'>Confirm your password</h2>
                            <input type="text" className='w-[255px] md:w-[516px] px-2 py-1 rounded-md border-[#13C26580] border-[1.5px] mb-4' />
                        </div>
                        
                        <button className='w-[255px] md:w-[516px] text-white p-2 bg-[#00DD68] mt-4 rounded-md'>Create account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
