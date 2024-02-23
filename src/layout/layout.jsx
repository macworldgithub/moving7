import Header from "../pages/header/header"
import { Outlet } from "react-router-dom"

const LayoutMain  = () => {
    return (
        <div>
        <Header />
        <Outlet />
        </div>
    )
}

export default LayoutMain
