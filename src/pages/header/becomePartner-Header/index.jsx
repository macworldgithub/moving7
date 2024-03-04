import React, { useState } from 'react';
import Logo from "../../../assets/images/partner-logo/icon-32-logo 1.svg";
import { IoIosArrowDown } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import MobileMenu from './forMobile';
import { Link } from "react-router-dom";


export default function PartnerHeader() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div className='flex items-center justify-between px-5 md:px-12 lg:px-0 md:justify-between lg:justify-evenly py-4 shadow-md font-medium text-lg lg:flex'>
            <div className='w-2/5 ml-8 lg:ml-0 md:w-auto'>
                <Link to="/">
                    <img src={Logo} alt="" />
                </Link>
            </div>
            <div className='hidden lg:gap-10 lg:flex'>
                <div className='flex gap-8 border-r-2 px-2'>
                    <Link to="/overview">
                        <h2>Overview</h2>
                    </Link>
                    <Link to="/quoteRequest">
                        <h2>Quote Requests</h2>
                    </Link>
                    <Link to="/">
                        <h2>Company Profile</h2>
                    </Link>
                    <Link to="/targeting">
                        <h2>Targeting</h2>
                    </Link>
                    <Link to="/">
                        <h2>Help Desk</h2>
                    </Link>
                </div>
                <div className='flex items-center gap-3'>
                    <Link to="/account">
                        <h2>Account</h2>
                    </Link>
                    <IoIosArrowDown />
                </div>
            </div>
            <div className='block lg:hidden'>
                <div className=' relative h-4 w-4'>
                    <div className=' absolute right-0 z-50'>
                        {showMenu && <MobileMenu />}
                    </div>
                    <MdMenu onClick={toggleMenu} className='absolute z-10' />
                </div>
            </div>
        </div >
    );
}
