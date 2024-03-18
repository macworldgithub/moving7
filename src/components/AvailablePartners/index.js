import { Link, useLocation } from "react-router-dom";
import NoProfileImage from '../../assets/images/overview/NOprofile.jpg'
import { useQuery } from "react-query";
import { getPartnerByEmails } from "../../apiFunctions/partner";



const AvailablePartners  = ()=>{
    

        const location = useLocation()
    const emails = location?.state?.emails
    const partnersRes  =useQuery({
        queryKey:["fetchPartnerByEmails",emails],
        queryFn: getPartnerByEmails
    })

    console.log(emails,"emailssssssss")
    console.log(partnersRes?.data?.data,"ressssssss")


    const partnerData =partnersRes?.data?.data  ?? []
    return(
        <div className="flex flex-col items-center justify-center w-full h-[70vh] md:h-[65vh] py-2">
            <div className="w-[60%] bg-green-100 border-green-500 h-[30%] md:h-[20%] border-green-800 rounded-lg">
                <p className="text-center mt-6">Thank you for using our service! {emails?.length ? " you request has been sent to following partners:" : "Sorry, there no partners currently working in your area :("}</p> </div>
                <div>
        {
            emails?.length && 
            <p className="text-green-500 text-xl text-center my-4">Available Partners</p>
        }
                    <div className="flex flex-row flex-wrap gap-6 w-full justify-center  ">
                        {partnerData.map((item , index)=>(
                    <Link to={`/companyprofile/${item?._id}`}>
                            <div className="flex flex-row w-[20rem] px-4 cursor-pointer bg-gray-100 p-2 py-4 gap-6">
                                <img  img src={item?.profileImage ? item?.profileImage : NoProfileImage}  className="w-12 h-12 rounded-full bg-gray-300" />
                                <div className="flex flex-col">
                                    <p className="text-bleck w-full text-wrap font-bold">{item?.companyName}</p>
                                    <p className="text-wrap w-full text-wrap">{item?.email}</p>
                                </div>
                            </div>
                    </Link>
                        ))}
                    </div>
                </div>
        </div>
    )
}
export default AvailablePartners;
