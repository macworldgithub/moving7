import React, { useState } from 'react';
import Logo from "../../../assets/images/partner-logo/icon-32-logo 1.svg";
import { IoIosArrowDown } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import MobileMenu from './forMobile';

export default function PartnerHeader() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div className='flex items-center justify-between px-5 md:px-12 md:justify-between lg:justify-evenly py-4 shadow-md font-medium text-lg lg:flex'>
            <div className='w-2/5 ml-8 lg:ml-0 md:w-auto'>
                <img src={Logo} alt="" />
            </div>
            <div className='hidden lg:gap-10 lg:flex'>
                <div className='flex gap-4 border-r-2 px-2'>
                    <h2>Overview</h2>
                    <h2>Quote Requests</h2>
                    <h2>Company Profile</h2>
                    <h2>Targeting</h2>
                    <h2>Help Desk</h2>
                </div>
                <div className='flex items-center gap-3'>
                    <h2>Account</h2>
                    <IoIosArrowDown />
                </div>
            </div>
            <div className='block lg:hidden'>
                <div className=' relative h-4 w-4'>
                    <div className=' absolute right-0'>
                        {showMenu && <MobileMenu />}
                    </div>
                    <MdMenu onClick={toggleMenu} className='absolute z-10' />
                </div>
            </div>
        </div>
    );
}
