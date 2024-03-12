import React, { useState } from 'react';
import QuoteDropdown from '../../quotesRequest/DropDown';
import {Dropdown} from 'antd';
import { toast } from 'react-toastify';
import Logo from "../../../assets/images/partner-logo/icon-32-logo 1.svg";
import { IoIosArrowDown } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import MobileMenu from './forMobile';
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function PartnerHeader({ user }) {
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <>
            <ToastContainer />
            <div className='flex items-center justify-between px-5 md:px-12 md:justify-between lg:justify-evenly py-4 shadow-md font-medium text-lg lg:flex'>
                <div className='w-2/5 ml-8 lg:ml-0 md:w-auto'>
                    <img src={Logo} alt="" />
                </div>
                <div className='hidden lg:gap-10 lg:flex'>
                    <div className='flex gap-4 border-r-2 px-2'>
                        <h2 className='cursor-pointer'
                            onClick={() => {
                                if (user?.proof) {
                                    navigate(`/partner/overview/${user?._id}`)
                                } else {
                                    console.log("ran")
                                    toast.error("Please complete your profile first")
                                }
                            }
                            }
                        >Overview</h2>
                        <h2
                            onClick={() => {
                                if (user?.proof) {
                                    navigate(`/partner/quoteRequest/${user?._id}`)
                                } else {
                                    toast.error("Please complete your profile first")
                                }
                            }
                            }
                            className='cursor-pointer'>Quote Requests</h2>
                        <h2

                            onClick={() => {
                                if (user?.proof) {
                                    navigate(`/partner/companyprofile/${user?._id}`)
                                } else {
                                    toast.error("Please complete your profile first")
                                }
                            }
                            }
                            className='cursor-pointer'>Company Profile</h2>
                        {/*<h2
                            onClick={() => {
                                if (user?.proof) {
                                    navigate(`/partner/targeting/${user?._id}`)
                                } else {
                                    toast.error("Please complete your profile first")
                                }
                            }
                            }
                            className='cursor-pointer'>Targeting</h2> */}
                        <h2
                            onClick={() => {
                                if (user?.proof) {
                                    navigate(`/partner/overview/${user?._id}`)
                                } else {
                                    toast.error("Please complete your profile first")
                                }
                            }
                            }
                            className='cursor-pointer'>Help Desk</h2>
                    </div>
                    <div className='flex items-center gap-3'>
                        {
                            user?.proof ? (
                                <>
                                    <h2
                                        className='cursor-pointer'
                                        onClick={() => {
                                            navigate(`/partner/account/${user?._id}`)
                                        }
                                        }
                                    >Account</h2>
                                <QuoteDropdown />
                                </>
                            ) : (
                                <h2 onClick={() => {
                                    window.localStorage.removeItem('userData');
                                    navigate('/')
                                }} className="cursor-pointer">Logout </h2>
                            )
                        }
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
        </>
    );
}
