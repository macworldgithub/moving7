const AvailablePartners  = ()=>{
    const partnerData = [
        {
            name:"Jacob",
            job:"Driver"
        },
        {
            name:"John",
            job:"Worker"
        },
        {
            name:"Smith",
            job:"Worker"
        },
        {
            name:"James",
            job:"Worker"
        },
    ]
    return(
        <div className="flex flex-col items-center justify-center w-full h-[70vh] md:h-[65vh] py-2">
            <div className="w-[60%] bg-green-100 border-green-500 h-[30%] md:h-[20%] border-green-800 rounded-lg">
                <p className="text-center mt-6">Thank you for using our us! Your Quote to send our partners</p> </div>
                <div>
                    <p className="text-green-500 text-xl text-center my-4">Available Partners</p>
                    <div className="flex flex-row flex-wrap gap-6 w-full justify-center  ">
                        {partnerData.map((item , index)=>(
                            <div className="flex flex-row w-[40%] bg-gray-100 p-2 py-4 gap-6">
                                <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                                <div className="flex flex-col">
                                    <p className="text-bleck font-bold">{item.name}</p>
                                    <p>{item.job}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
        </div>
    )
}
export default AvailablePartners;