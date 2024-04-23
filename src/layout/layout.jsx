import React from "react";
import Header from "../pages/header/header";
import Header_Two from "../pages/header/becomePartner-Header/index";
import { Outlet, useLocation } from "react-router-dom";

const LayoutMain = ({user, setUser}) => {
    
    return (
        <div>
        <Header  user={user} setUser={setUser}/>
        <Outlet />
        </div>
    )
};

export default LayoutMain;
