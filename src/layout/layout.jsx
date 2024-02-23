import Header from "../pages/header/header"
import { Outlet } from "react-router-dom"

const LayoutMain  = () => {
    return (
        <div className=" max-w-[1440px] mx-auto">
        <Header />
        <Outlet />
        </div>
    )
}

export default LayoutMain
