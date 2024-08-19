import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { getContactManagerDetails, getPartnerProofs, updatePassword, updateProofs } from '../../apiFunctions/partner';
import { useMutation, useQuery } from 'react-query';
import { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { toast } from 'react-toastify';
import UserImg from '../../assets/images/overview/Group 17.png'
import SmalllFooter from '../footer/smalllFooter';
import LoaderLayout from '../../components/Loaders/LoaderLayout';
import Truck from '../../components/Loaders/Truck';
import { DatePicker } from 'antd';
import { uploadImageAndGetURL } from '../../firebase/utils';
import { useNavigate } from 'react-router-dom';
import Contract from '../Contract';

export default function Documents() {

    const navigate = useNavigate()

    const updateProofsMutation = useMutation({
        mutationFn: updateProofs,
        onSuccess: (data) => {
            toast.success('Proofs updated successfully')
            window.location.reload()
        },
        onError: (error) => {
            toast.error(error)
        }
    })

    const [isEditable, setIsEditable] = useState({
        VATcert: false,
        emiratesId: false,
        insuranceCert: false,
        license: false,
    })
    const [proofs, setProofs] = useState({
        VATcert: {
            expirationDate: null,
            url: ""
        },
        emiratesId: {
            expirationDate: null,
            url: ""
        },
        insuranceCert: {
            expirationDate: null,
            url: ""
        },
        license: {
            expirationDate: null,
            url: ""
        },
    })
    const contactManagerRes = useQuery({
        queryKey: ["getContactManagerDetails"],
        queryFn: getContactManagerDetails
    })
    const proofsRes = useQuery({
        queryKey: ["getPartnerProofs"],
        queryFn: getPartnerProofs
    })

    if (updateProofsMutation.isLoading) {
        return <LoaderLayout>
            <Truck />
        </LoaderLayout>
    }
    const ManagerData = contactManagerRes?.data?.data ?? {}
    const ProofsData = proofsRes?.data?.data?.proof ?? {}
    const ContractData = proofsRes?.data?.data?.contract ?? {}

    console.log(ProofsData, "proooooooooofs")

    const openWhatsApp = () => {
        window.open(`https://wa.me/${ManagerData?.contactManagerContactNumber}`, '_blank');
    };


    let isDisabled = () => {
        for (let key in isEditable) {
            if (isEditable[key]) {
                return false
            }
        }
        return true
    }

    const submit = async () => {
        console.log("PRESSEDDDDDDD")
        if (isDisabled()) return;
        let temp = {}
        for (let key in proofs) {
            if (proofs[key].url && !proofs[key].expirationDate) {
                toast.error(`Kindly set expiration date for ${key}`)
                return
            } else if (!proofs[key].url && proofs[key].expirationDate) {
                toast.error(`Kindly select file for ${key}`)
                return
            }
            uploadImageAndGetURL()
            if (proofs[key].url && proofs[key].expirationDate) {
                let firebaseUrl = await uploadImageAndGetURL(ProofsData[key].firebasePath, proofs[key].url)
                temp[key] = {
                    expirationDate: proofs[key].expirationDate,
                    firebasePath: ProofsData[key].firebasePath,
                    name: ProofsData[key].name,
                    verified: ProofsData[key].verified,
                    url: firebaseUrl
                }
            }

        }
        updateProofsMutation.mutate(temp)
        console.log(temp, "TEMPPPPPPP")
    }

    console.log(proofs, "STATEEEEEEEEEEEE")

    console.log(isDisabled())

    return (
        <>
            <div className='w-full flex flex-col lg:flex-row items-start justify-center bg-lue-300 pb-6 gap-6 '>
                <div className='flex flex-col w-11/12 md:w-[60%] mt-10 g-red-400 '>

                    <div className='ml-0  rounded-md shadow- border-2 mb-5'>
                        <div className='px-8 py-4 flex justify-between items-center border-b-2'>
                            <h2 className='text-lg font-medium'>Contract</h2>
                            {
                                !ContractData?.status || Contract?.status === "Rejected" ?
                                    <p>You have not received a contract proposal yet. </p>
                                    :
                                    <button onClick={() => window.open(window.location.origin + "/contract/" + proofsRes?.data?.data?._id, '_blank', 'noopener,noreferrer')} className={`bg-primary  px-6 py-1 rounded-sm text-black`}>
                                        {
                                            ContractData?.status === "Accepted" ?
                                                "View"
                                                :
                                                "Sign Contract"
                                        }
                                    </button>
                            }
                        </div>
                    </div>

                    <div className='ml-0  rounded-md shadow-xl border-2'>
                        <div className='px-8 py-4 flex justify-between items-center border-b-2'>
                            <h2 className='text-lg font-medium'>Partner Documents</h2>
                            <button onClick={submit} className={`${isDisabled() ? 'bg-gray-500 text-white' : "bg-primary text-black"}  px-6 py-1 rounded-sm `}>Save</button>
                        </div>
                        <div className='flex flex-col p-4'>

                            <div className='flex justify-between gap-2 lg:gap-2 p-4 order-b-2 items-center'>
                                <h2 className='font-medium text-black'>VAT Certificate</h2>
                                <div className='flex items-center gap-2'>
                                    {
                                        proofs?.VATcert?.url ? (
                                            <p className='text-primary'>
                                                {proofs?.VATcert?.url?.name}
                                            </p>
                                        ) : (
                                            <a href={ProofsData?.VATcert?.url} target="_blank" className='z-10 text-black'>
                                                Show
                                            </a>
                                        )
                                    }
                                    <input className='absolute opacity-0 z-0'
                                        onClick={() => setIsEditable({ ...isEditable, VATcert: true })}
                                        onChange={(e) => {
                                            const file = e.target.files[0]
                                            setProofs({ ...proofs, VATcert: { ...proofs.VATcert, url: file } })
                                            console.log(file)
                                        }} type={"file"}  >
                                    </input>
                                    <FaRegEdit size={20} onClick={() => setIsEditable({ ...isEditable, VATcert: true })} />
                                </div>
                            </div>
                            <div className='flex flex-col justify-between gap-2 lg:gap-4 p-4 border-b-2 items-center'>
                                <div className='flex items-center justify-between w-full'>
                                    <h2 className='text-sm text-black'>Expiry Date</h2>
                                    {
                                        isEditable?.VATcert ? <DatePicker onChange={(_, dateStr) => { setProofs({ ...proofs, VATcert: { ...proofs.VATcert, expirationDate: dateStr } }) }} /> : (
                                            <p>{new Date(ProofsData?.VATcert?.expirationDate).toDateString()}</p>
                                        )
                                    }
                                </div>
                                <div className='flex items-center justify-between w-full'>
                                    <h2 className='text-sm text-black'>Is Verified</h2>
                                    <p>{ProofsData?.VATcert?.verified ? "Yes" : "No"}</p>
                                </div>
                            </div>



                            <div className='flex justify-between gap-2 lg:gap-2 p-4 order-b-2 items-center'>
                                <h2 className='font-medium text-black'>Emirates Id</h2>
                                <div className='flex items-center gap-2'>
                                    {
                                        proofs?.emiratesId?.url ? (
                                            <p className='text-primary'>
                                                {proofs?.emiratesId?.url?.name}
                                            </p>
                                        ) : (
                                            <a href={ProofsData?.emiratesId?.url} target="_blank" className='z-10 text-black'>
                                                Show
                                            </a>
                                        )
                                    }

                                    <input className='absolute opacity-0 z-0'
                                        onClick={() => setIsEditable({ ...isEditable, emiratesId: true })}
                                        onChange={(e) => {
                                            const file = e.target.files[0]
                                            setProofs({ ...proofs, emiratesId: { ...proofs.emiratesId, url: file } })
                                            console.log(file)
                                        }} type={"file"}  >
                                    </input>
                                    <FaRegEdit size={20} onClick={() => setIsEditable({ ...isEditable, emiratesId: true })} />
                                </div>
                            </div>
                            <div className='flex flex-col justify-between gap-2 lg:gap-4 p-4 border-b-2 items-center'>
                                <div className='flex items-center justify-between w-full'>
                                    <h2 className='text-sm text-black'>Expiry Date</h2>
                                    {
                                        isEditable?.emiratesId ? <DatePicker onChange={(_, dateStr) => { setProofs({ ...proofs, emiratesId: { ...proofs.emiratesId, expirationDate: dateStr } }) }} /> : (
                                            <p>{new Date(ProofsData?.emiratesId?.expirationDate).toDateString()}</p>
                                        )
                                    }
                                </div>
                                <div className='flex items-center justify-between w-full'>
                                    <h2 className='text-sm text-black'>Is Verified</h2>
                                    <p>{ProofsData?.emiratesId?.verified ? "Yes" : "No"}</p>
                                </div>
                            </div>


                            <div className='flex justify-between gap-2 lg:gap-2 p-4 order-b-2 items-center'>
                                <h2 className='font-medium text-black'>Insurance Certificate</h2>
                                <div className='flex items-center gap-2'>
                                    {
                                        proofs?.insuranceCert?.url ? (
                                            <p className='text-primary'>
                                                {proofs?.insuranceCert?.url?.name}
                                            </p>
                                        ) : (
                                            <a href={ProofsData?.insuranceCert?.url} target="_blank" className='z-10 text-black'>
                                                Show
                                            </a>
                                        )
                                    }

                                    <input className='absolute opacity-0 z-0'
                                        onClick={() => setIsEditable({ ...isEditable, insuranceCert: true })}
                                        onChange={(e) => {
                                            const file = e.target.files[0]
                                            setProofs({ ...proofs, insuranceCert: { ...proofs.insuranceCert, url: file } })
                                            console.log(file)
                                        }} type={"file"}  >
                                    </input>
                                    <FaRegEdit size={20} onClick={() => setIsEditable({ ...isEditable, insuranceCert: true })} />
                                </div>
                            </div>
                            <div className='flex flex-col justify-between gap-2 lg:gap-4 p-4 border-b-2 items-center'>
                                <div className='flex items-center justify-between w-full'>
                                    <h2 className='text-sm text-black'>Expiry Date</h2>
                                    {
                                        isEditable?.insuranceCert ? <DatePicker onChange={(_, dateStr) => { setProofs({ ...proofs, insuranceCert: { ...proofs.insuranceCert, expirationDate: dateStr } }) }} /> : (
                                            <p>{new Date(ProofsData?.insuranceCert?.expirationDate).toDateString()}</p>
                                        )
                                    }
                                </div>
                                <div className='flex items-center justify-between w-full'>
                                    <h2 className='text-sm text-black'>Is Verified</h2>
                                    <p>{ProofsData?.insuranceCert?.verified ? "Yes" : "No"}</p>
                                </div>
                            </div>



                            <div className='flex justify-between gap-2 lg:gap-2 p-4 order-b-2 items-center'>
                                <h2 className='font-medium text-black'>License</h2>
                                <div className='flex items-center gap-2'>
                                    {
                                        proofs?.license?.url ? (
                                            <p className='text-primary'>
                                                {proofs?.license?.url?.name}
                                            </p>
                                        ) : (
                                            <a href={ProofsData?.license?.url} target="_blank" className='z-10 text-black'>
                                                Show
                                            </a>
                                        )
                                    }

                                    <input className='absolute opacity-0 z-0'
                                        onClick={() => setIsEditable({ ...isEditable, license: true })}
                                        onChange={(e) => {
                                            const file = e.target.files[0]
                                            setProofs({ ...proofs, license: { ...proofs.license, url: file } })
                                            console.log(file)
                                        }} type={"file"}  >
                                    </input>

                                    <FaRegEdit size={20} onClick={() => setIsEditable({ ...isEditable, license: true })} />
                                </div>
                            </div>
                            <div className='flex flex-col justify-between gap-2 lg:gap-4 p-4 border-b-2 items-center'>
                                <div className='flex items-center justify-between w-full'>
                                    <h2 className='text-sm text-black'>Expiry Date</h2>
                                    {
                                        isEditable?.license ? <DatePicker onChange={(_, dateStr) => {
                                            setProofs({ ...proofs, license: { ...proofs.license, expirationDate: dateStr } })
                                        }} /> : (
                                            <p>{new Date(ProofsData?.license?.expirationDate).toDateString()}</p>
                                        )
                                    }
                                </div>
                                <div className='flex items-center justify-between w-full'>
                                    <h2 className='text-sm text-black'>Is Verified</h2>
                                    <p>{ProofsData?.license?.verified ? "Yes" : "No"}</p>
                                </div>
                            </div>


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
                                <button onClick={openWhatsApp} className=' bg-[#C1E1EE] text-black text-sm md:text-lg px-4 lg:px-4 rounded-sm py-1 mt-1'>Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SmalllFooter />
        </>
    )
}
