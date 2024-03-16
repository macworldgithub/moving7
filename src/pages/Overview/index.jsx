import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { useQuery } from 'react-query';
import UserImg from '../../../src/assets/images/overview/Group 17.png'
import { getContactManagerDetails, getPartnerOverview, getPartnerSentQuotes } from '../../apiFunctions/partner';
import LoaderLayout from '../../components/Loaders/LoaderLayout';
import Truck from '../../components/Loaders/Truck';
import SmalllFooter from '../footer/smalllFooter';



export default function Overview() {
    const userData = window.localStorage.getItem("userData")
    const json = JSON.parse(userData)
    const partnerOverviewRes = useQuery({
        queryKey: ["fetchPartnerOverview", json?._id],
        queryFn: getPartnerOverview,
    });
    const quotes = useQuery({
        queryKey: ["fetchRequestOfPartner"],
        queryFn: getPartnerSentQuotes,
    });

    const contactManagerRes = useQuery({
        queryKey:["getContactManagerDetails"],
        queryFn:getContactManagerDetails
    })
     
    if (partnerOverviewRes.isLoading || quotes.isLoading || contactManagerRes.isLoading) {
        return <LoaderLayout>
            <Truck />
        </LoaderLayout>
    }

    const ManagerData = contactManagerRes?.data?.data ?? {}

  const openWhatsApp = () => {
    window.open(`https://wa.me/${ManagerData?.contactManagerContactNumber}`, '_blank');
  };
    const quotesData = quotes?.data?.data ?? []
    const partnerOverviewData = partnerOverviewRes?.data?.data ?? {}
    console.log(quotesData, "dataaaa")
    console.log(partnerOverviewData, "overviewdataaaa")
    return (
        <div>
            <div className='flex flex-col lg:flex-row items-center justify-center p-8'>
                <div className='flex items-center justify-center flex-col'>
                    <div className='w-11/12 md:w-4/6 lg:w-11/12 bg-[#D0E9F4] px-6 py-8 mt-20 lg:-mt-20 lg:-ml-[4rem]'>
                        <h2 className='text-md md:text-2xl font-semibold'>Welcome to Moving24!</h2>
                        <p className='text-md md:text-lg pt-2'>We are currently verifying your business. This usually takes
                            1-2 working days. You may start to receive job requests - if so, you will find them below,
                            and we will send them your email.</p>
                    </div>
                    <div className='w-11/12 md:w-4/6 lg:lg:w-11/12 bg-[#D1F2DF] px-6 py-8 mt-8 lg:-ml-[4rem]'>
                        <h2 className=' text-lg md:text-2xl font-semibold'>More accepted quotes?</h2>
                        <p className='text-md md:text-lg pt-2'>Did you know that 84% of customers first check your company profile? Complete your
                            company profile and request (external) reviews.</p>
                        <button className='bg-[#1ABD5E] px-4 py-2 text-white mt-6 rounded-sm'>Let’s get started!</button>
                    </div>

                </div>
                <div className='w-11/12 lg:w-2/4 flex flex-col sm:flex-row gap-3 lg:gap-0 lg:flex-col items-start justify-center mt-10'>
                    <div className='w-full shadow-xl rounded-md px-4 py-6'>
                        <div className='border-b-2 w-full'>
                            <h2 className='font-semibold text-md md:text-lg pb-2'>Company Info</h2>
                        </div>
                        <div>
                            <h2 className='w-full font-semibold pt-2 text-md md:text-lg'>Company Name</h2>
                            <p className='text-md md:text-lg text-gray-400'>{partnerOverviewData?.companyName ?? "None"}</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div>
                                <h2 className='w-full font-semibold pt-2 text-md md:text-lg'>Account status</h2>
                                <p className='text-md md:text-lg font-light'>{partnerOverviewData?.isVerified ? "Verified" : "Not yet verified"}</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div>
                                <h2 className='w-full font-semibold pt-2 text-md md:text-lg'>Targeting</h2>
                                <p className='text-md md:text-lg text-gray-400'>{partnerOverviewData?.areaPreference === "radius" ? `Radius ${partnerOverviewData?.radius ?? "___"} mils from ${partnerOverviewData?.location ?? "___"}` : partnerOverviewData?.regions?.map((region) => region?.name).join(" , ")}</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full shadow-xl rounded-md px-4 py-6 lg:mt-8'>
                        <div className='border-b-2 w-full'>
                            <h2 className='font-semibold text-md md:text-lg pb-2'>Need help?</h2>
                        </div>

                        <div className='flex items-center justify-between border-b-2'>
                            <div>
                                <h2 className='w-full font-medium py-4 text-md md:text-lg'>Help Desk</h2>
                            </div>
                            <div>
                                <IoIosArrowForward size={25} />
                            </div>
                        </div>
                        <div className='flex flex-col justify-between'>
                            <div>
                                <p className='text-md md:text-lg text-gray-400 mt-4'>Or contact your Account Manager</p>
                            </div>
                            <div className='flex gap-6 mt-3'>
                                <img src={UserImg} alt="" className=' cursor-pointer' />
                                <div>
                                    <h2 className='text-md md:text-lg'>{ManagerData?.contactManagerName}</h2>
                                    <button className=' bg-[#1ABD5E] text-white text-sm md:text-lg px-4 lg:px-4 rounded-sm py-1 mt-1' onClick={openWhatsApp}>Contact</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center w-11/12 md:w-4/5 lg:w-[74%] xl:w-[72%]
                 lg:-ml-4 flex-col mt-6 md:mt-20 lg:-mt-20 mx-auto lg:flex-col'>
                <div className='w-[90%] py-8 mt-1 md:-mt-20 rounded-sm'>
                    <div className='bg-white shadow-lg'>
                        <h2 className='text-md md:text-lg px-4 py-4 font-medium'>5 most recent Quote Requests</h2>
                    </div>
                </div>
                <div className='w-[90%] -mt-8 bg-[#EFF2F3] rounded-lg'>
                    <div className='bg-[#E6EBEC] flex justify-between px-6 py-4 font-semibold text-[#6A6A6A]'>
                        <h2>Name</h2>
                        <h2>Email</h2>
                        <h2>Move From</h2>
                        <h2>Move To</h2>
                        <h2>Date</h2>
                    </div>

                    <div className='h-64 flex mt-2 justify-start'>
                        {quotesData?.length > 0 ? (

                            < div className='w-full'>
                                {quotesData.map((elem, idx) => (
                                    <div className='flex justify-between' key={idx}>
                                        <h2 className='px-6'>{elem?.name}</h2>
                                        <h2 className='px-6'>{elem?.email}</h2>
                                        <h2 className='px-6'>{elem?.moveFrom}</h2>
                                        <h2 className='px-6'>{elem?.moveTo}</h2>
                                        <h2 className='px-6' >{new Date(elem?.requestTime).getDate() + "-" + new Date(elem?.requestTime).getMonth() + "-" + new Date(elem?.requestTime).getFullYear()}</h2>
                                    </div>
                                ))}

                            </div>
                        ) : (
                            <p className='text-md font-light flex items-center justify-center text-center w-full'>No quote requests received yet. We will email you once we have suitable projects.</p>
                        )}

                    </div>
                </div>
            </div>
            <SmalllFooter />
        </div >

    )
}
