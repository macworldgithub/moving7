import React from 'react'
import Logo from "../../../assets/images/partner-logo/icon-32-logo 1.svg"
import { IoIosArrowDown } from "react-icons/io";
import { MdMenu } from "react-icons/md";

export default function PartnerHeader() {
    return (
        <div className='flex items-center justify-around md:px-12 md:justify-between lg:justify-evenly py-4 shadow-md text-lg'>
            <div className='w-2/5 md:w-auto'>
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
            <div className='blocl lg:hidden'>
                <MdMenu />
            </div>
        </div>
    )
}
