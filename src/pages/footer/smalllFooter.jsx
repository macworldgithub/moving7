import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SmalllFooter() {
    const navigate = useNavigate()
    return (
        <div className='shadow-2xl shadow-black mt-10 gap-2 flex flex-col sm:flex-row sm:justify-around md:justify-start md:gap-8 items-center justify-center w-full text-md md:text-lg py-4 px-10 sm:pl-28'>
            <h2 className='cursor-pointer sm:border-r-2 sm:pr-2' onClick={() => navigate("/aboutus")}>About us</h2>
            <h2 className='cursor-pointer sm:border-r-2 sm:pr-2' onClick={() => navigate("/")}>To Consumer Site</h2>
        </div>
    )
}
