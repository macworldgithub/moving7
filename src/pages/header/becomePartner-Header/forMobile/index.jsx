import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

export default function MobileMenu() {
    return (
        <div className='w-full lg:w-72 flex flex-col flex-wrap items-center justify-center text-sm sm:text-md md:text-lg mt-[2.5rem] font-medium border-b-2 gap-1 px-6 py-8 right-8 z-50 text-white bg-[#1ae073] rounded-md lg:hidden'>
            <h2>Overview</h2>
            <h2>Quote Requests</h2>
            <h2>Company Profile</h2>
            <h2>Targeting</h2>
            <h2>Help Desk</h2>
            <div className='flex items-center gap-2'>
                <h2>Account</h2>
                <IoIosArrowDown />
            </div>
        </div>
    );
}
