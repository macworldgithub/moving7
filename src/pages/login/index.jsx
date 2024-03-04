import React, { useState } from 'react'
import { partnerSignIn } from '../../apiFunctions/partner'
import { useMutation } from 'react-query'
import { Link, useNavigate } from 'react-router-dom'
import UserImg from '../../assets/images/login/Group.svg'
import UserIcon from '../../assets/images/login/Vector (1).svg'
import Lock from '../../assets/images/login/Vector (2).svg'
import Footer from '../footer/footer'
import { toast } from 'react-toastify'

export default function Login() {
    const navigate = useNavigate()
    const partnerSigInMutation = useMutation({
        mutationKey:"partnerSignIn",
        mutationFn:partnerSignIn,
        onSuccess:(data) => {
            window.localStorage.setItem("userData",JSON.stringify(data?.data))
            toast.success("Logged in Suuccessfully!")
            if (data?.data?.proof){
                navigate(`/partner/overview/${data?.data?._id}`)
            }else {
                navigate("/partner/documentsverification")
            }
        },
        onError:(err) => {
            console.log(err)
            toast.error(err?.response?.data?.message)
        },
        onSettled:(d,e) => console.log(d,e),
    })

    const [credentials, setCredentials] = useState({
        password: "",
        email: ""
    })

    const handleChange = (key, val) => {
        setCredentials({
            ...credentials,
            [key]: val
        })
    }


    const handleSubmit = () => {
        partnerSigInMutation.mutate(credentials)
    } 


    return (
        <>
            <div className=' w-4/5 xl:w-1/3 sm:mt-36 lg:mt-32 bg-[#EDEDED] mx-auto relative rounded-3xl'>
                <div className='flex items-center justify-center flex-col mt-40 md:mt-0'>
                    <div className='bg-[#13C265] rounded-full h-[5rem] w-[5rem] md:h-[10rem] md:w-[10rem] lg:h-32 lg:w-32 flex items-center justify-center p-[1.25rem] md:p-9 -mt-[3rem] md:-mt-20 mb-12'>
                        <img src={UserImg} />
                    </div>
                    <div className='flex'>
                        <div className='bg-[#13C265] p-2'>
                            <img src={UserIcon} alt="" className='md:w-6' />
                        </div>
                        <input type="text" value={credentials.email} onChange={(e) => handleChange("email", e.target.value)} placeholder='Email ID' className=' md:h-12 md:w-80 pl-3 bg-[#BEDBBE] placeholder:text-white' />
                    </div>
                    <div className='flex mt-4'>
                        <div className='bg-[#13C265] p-2'>
                            <img src={Lock} alt="" className='md:w-6 flex items-center justify-between' />
                        </div>
                        <input type="password" value={credentials.password} onChange={(e) => handleChange("password", e.target.value)}  placeholder='Password' className=' md:h-12 md:w-80 pl-3 bg-[#BEDBBE] placeholder:text-white' />
                    </div>
                    <div className='flex flex-col flex-wrap sm:flex-row gap-4 lg:gap-6 mt-11'>
                        <div className='flex gap-2'>
                            <input type="checkbox" />
                            <h2 className='font-light'>Remember me</h2>
                        </div>
                        <div>
                            <h2 className='font-light italic'>Forget Password?</h2>
                        </div>
                    </div>
                    <div>
                        <Link to={"/partner"}>
                            <h2 className='italic text-[#13C265] font-medium cursor-pointer mt-3 mb-3'>Create account</h2>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center bg-slate-300 w-44 md:w-96 mx-auto py-4 rounded-b-3xl bg-gradient-to-b from-[#13C265] to-[#BEDBBE] text-white md:text-2xl mb-20 lg:mb-20'>
                <button onClick={handleSubmit}>Login</button>
            </div>
            <Footer />
        </>
    )
}
