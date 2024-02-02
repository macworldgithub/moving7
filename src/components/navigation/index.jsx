import React from 'react'
import Header from '../../pages/header/header'
import { Outlet } from "react-router-dom";

export default function Navigation() {
    return (
        <div className=" max-w-[1440px] mx-auto">
            <Header />
            <div id='content'>
                <Outlet />
            </div>
        </div>
    )
}
