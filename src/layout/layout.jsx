import React from "react";
import Header from "../pages/header/header";
import Header_Two from "../pages/header/becomePartner-Header/index";
import { Outlet, useLocation } from "react-router-dom";

const LayoutMain = () => {
    const location = useLocation();
    const { pathname } = location;

    // Check if the pathname is one of the specified values
    const isSpecialPage =
        pathname === "/overview" ||
        pathname === "/quoteRequest" ||
        pathname === "/targeting";

    return (
        <div className="max-w-[1440px] mx-auto">
            {isSpecialPage ? (
                // Show Header_Two for special pages
                <div>
                    <Header_Two />
                    <Outlet />
                </div>
            ) : (
                // Show Header for other pages
                <div>
                    <Header />
                    <Outlet />
                </div>
            )}
        </div>
    );
};

export default LayoutMain;
