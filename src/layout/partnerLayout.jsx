import { Outlet } from "react-router-dom"
import PartnerHeader from "../pages/header/becomePartner-Header"
import { useNavigate } from "react-router-dom"

const PartnerLayout = () => {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem("userData"))
    console.log(user, "user")
    if (!user?.isPartner) navigate("/")
    if (!user?.proof) navigate("/partner/documentsVerification")
    return (
        <div className=" max-w-[1440px] mx-auto">
            <PartnerHeader  user={user}/>
            <Outlet context={[user]}/>
        </div>
    )
}

export default PartnerLayout
