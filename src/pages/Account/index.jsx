import React from 'react'
import { getContactManagerDetails, updatePassword } from '../../apiFunctions/partner';
import { useMutation , useQuery} from 'react-query';
import { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { toast } from 'react-toastify';
import UserImg from '../../assets/images/overview/Group 17.png'
import SmalllFooter from '../footer/smalllFooter';

export default function Account() {

    const updatePasswordMutation = useMutation({
        mutationFn: updatePassword,
        onSuccess: (data) => {
            console.log(data)
            toast.success('Password updated successfully')
        },
        onError: (error) => {
            toast.error(error)
        }
    })

    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const contactManagerRes = useQuery({
        queryKey:["getContactManagerDetails"],
        queryFn:getContactManagerDetails
    })

    const ManagerData = contactManagerRes?.data?.data ?? {}

  const openWhatsApp = () => {
    window.open(`https://wa.me/${ManagerData?.contactManagerContactNumber}`, '_blank');
  };

    const submit = () => {
        if (!password || !confirmPassword) {
            toast.error('Please fill all the fields')
            return
        }
        if (password !== confirmPassword) {
            toast.error('Password and Confirm Password does not match')
            return
        }
        updatePasswordMutation.mutate({ password, confirmPassword })
    }
    

    return (
        <>
            <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-6 mt-2 lg:mb-96'>
                <div className='flex flex-col w-11/12 md:w-[60%] mt-10 lg:mt-40'>
                    <div className='ml-0 lg:ml-12 lg:-mt-36 rounded-md shadow-xl border-2'>
                        <div className='px-8 py-4 flex justify-between items-center border-b-2'>
                            <h2 className='text-lg font-medium'>Change Password</h2>
                            <button onClick={submit} className='bg-primary px-6 py-1 rounded-sm text-white'>Save</button>
                        </div>
                        <div className='flex flex-col p-4'>
                            <div className='flex gap-2 lg:gap-10 p-4 border-b-2 items-center'>
                                <h2 className='font-medium text-gray-400'>Password</h2>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='********' className=' font-medium text-gray-400 outline-none' />
                            </div>
                            <div className='flex gap-10 p-4'>
                                <h2 className=' font-medium text-gray-400'>Confirm password</h2>
                                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='********' className=' font-medium text-gray-400 outline-none' />
                            </div>
                        </div>
                    </div>

                    <div className='ml-0 lg:ml-12 mt-10 '>
                        <div className='px-6 lg:px-8 py-4 flex justify-between items-center borderb-2'>
                            <h2 className='text-lg font-medium'></h2>
                            <p className='bg-prmary px-6 py-1 rounded-sm text-white'></p>
                        </div>
                        <div className='flex gap-6 p-4'>
                            <h2 className='text-ray-400 px-2 lg:px-4'></h2>
                            <h2 className='text-rimary font-medium'></h2>
                        </div>
                    </div>

                </div>

                <div className=' w-11/12 md:w-7/12 lg:w-[22%] mt-8 rounded-md shadow-xl'>
                    <div className='px-4 shadow-lg shadow-gray-300 rounded-lg mt-4 py-4 border-2'>
                        <h2 className='text-lg font-medium border-b-2 mb-4'>Need help?</h2>
                        <h2 className='text-gray-500 '>Tips $ Best Practices</h2>
                        <p className='p-1 text-gray-400'>Contact a new lead within 8hrs to
                            win more jobs</p>
                        <p className='p-1 text-gray-400'>If you cannot get hold of the potential
                            client, send an email to start the
                            converstation</p>
                        <p className='p-1 text-gray-400'>Use our fair reclaims services for
                            incorrect telephone numbers. <span className='text-[#13C265]'>Terms & Conditions</span></p>

                        <div className='flex items-center justify-between border-b-2 mt-4'>
                            <h2 className=' font-medium mb-4'>Help Desk</h2>
                            <IoIosArrowForward />
                        </div>
                        <div className='flex gap-6 mt-3 py-4'>
                            <img src={UserImg} alt="" className=' cursor-pointer' />
                            <div>
                                <h2 className='text-md md:text-lg'>{ManagerData?.contactManagerName}</h2>
                                <button onClick={openWhatsApp} className=' bg-[#1ABD5E] text-white text-sm md:text-lg px-4 lg:px-4 rounded-sm py-1 mt-1'>Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SmalllFooter />
        </>
    )
}
