import MyModal from "../../components/Modal/Modal"
import { GoogleMap, Marker, useJsApiLoader, Circle } from "@react-google-maps/api";
import { AiOutlineRight, AiOutlineLeft, AiOutlinePlus } from "react-icons/ai";
import { Carousel } from 'antd';
import { useState } from "react";
import { toast } from "react-toastify";

;

const containerStyle = {
    width: "100%",
    height: "400px",
};


const CompanyProfile = () => {
    const [images, setImages] = useState([])
    const [showImageModal, setShowImageModal] = useState(false)
    const [currImage, setCurrImage] = useState(0)
    const [latlong, setLatlong] = useState({
        lat: -3.745,
        lng: -38.523,
    });
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyBmlfCX9N5NAKdGidMbSxMXkc4CNHcT6rQ",
    });

    console.log(images)
    return (
        <div className="relative z-10">
            <div className="mb-40 mx-10 mt-4">
                <div className="flex flex-wrap">
                    <div className=" flex lg:w-3/4 flex-wrap sm:w-96">
                        <div>
                            <img src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.98259409.1708992000&semt=sph" className="rounded-full lg:w-[240px] sm:w-full z-10 relative" />
                        </div>
                        <div className="mx-8 flex justify-between flex-col mt-2">
                            <div>
                                <h1 className=" text-xl font-semibold">
                                    Asad Khan
                                </h1>
                                <p className="text-gray-500">
                                    Location
                                </p>

                            </div>
                            <div className="mb-4">
                                <div className="flex items-center mt-2">
                                    <div className="rounded bg-gray-300 me-2 px-2">
                                        -/10
                                    </div>
                                    <p className="text-gray-500">
                                        No reviews
                                    </p>
                                </div>
                                <p className="text-gray-500">
                                    This company recently joined Moving24 and is not yet verified by us.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 pt-2 sm:w-full lg:w-1/4">
                        <h1 className="font-semibold text-xl">
                            Contact information
                        </h1>
                        <p className="text-gray-500 mt-1">
                            +324902949042
                        </p>
                        <p className="text-gray-500 mt-1">
                            siddiquiusman@gmail.com
                        </p>
                        <div className="bg-primary w-max px-3 py-1 rounded text-white mt-6 cursor-pointer">
                            Copy Profile URL
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="flex border-b-2 pb-1">
                        <p className="px-3 mx-1 cursor-pointer">
                            About Us
                        </p>
                        <p className="px-3 mx-1 cursor-pointer">
                            Project Images
                        </p>
                        <p className="px-3 mx-1 cursor-pointer">
                            Reviews
                        </p>
                        <p className="px-3 mx-1 cursor-pointer">
                            Q&A
                        </p>
                    </div>


                    <div className="flex justify-between flex-wrap mt-4">

                        <div className="lg:w-4/6  w-full sm:w-full bg-rd-200">

                            <h1 className="text-3xl font-[#4B4B4B] font-semibold ">
                                About the company
                            </h1>
                            <p className="text-gray-500 mt-1">
                                There is no information about the company yet.
                            </p>
                            <div className="flex items-center justify-between">
                                <h1 className="text-2xl font-semibold ">
                                    Project images
                                </h1>
                                <button className="my-2 bg-primary text-white px-4 py-1 rounded">
                                    Save
                                </button>
                            </div>

                            <div onClick={() => {
                                if (images.length) {
                                    setShowImageModal(true)
                                }
                            }} className="images cursor-pointer overflow-hidden flex sm:w-full w-full bg-gray-200 h-72 my-3">
                                {
                                    images.length > 0 ? (
                                        <>
                                            <img className="w-[44rem]" src={`${images[0]}`} />
                                            <div>
                                                <img className="h-1/2" src={`${images.length >= 2 ? images[1] : null}`} />
                                                <img className="h-1/2" src={`${images.length >= 3 ? images[1] : null}`} />

                                            </div>
                                        </>
                                    ) : (
                                        <div className="flex flex-col items-center relative justify-center w-full">
                                            <input multiple={true} type={"file"} onChange={(e) => {
                                                console.log(e.target.files)
                                                let files = e.target.files
                                                if (files.length + images.length > 5) {
                                                    toast.error("Cannot upload more than 5 images!")
                                                    return
                                                }
                                                for (let i = 0; i < files.length; i++) {
                                                    let reader = new FileReader()
                                                    reader.readAsDataURL(files[i])
                                                    reader.addEventListener("load", function() {
                                                        setImages((prev) => {
                                                            return [...prev, this.result]
                                                        })
                                                    });
                                                }
                                            }} className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" />
                                            <AiOutlinePlus className="text-primary bg-white rounded-full p-3" style={{
                                                fontSize: "60px"
                                            }} />
                                            <p className="text-2xl mt-2">
                                                Add Image
                                            </p>
                                        </div>
                                    )
                                }

                            </div>
                            <div className="flex flex-wrap justify-between sm:w-full w-full ">
                                <div className="flex items-center">
                                    <div className="bg-gray-300 px-3 py-1 text-gray-500">
                                        -/10
                                    </div>
                                    <p className="mx-1 text-gray-500" s>
                                        No reviews
                                    </p>
                                </div>
                                <div className="flex">
                                    <p className="me-3">
                                        Finished a project?
                                    </p>
                                    <div className="bg-primary cursor-pointer text-white px-2 mx-1 rounded flex items-center">
                                        Request new
                                    </div>
                                </div>
                            </div>

                            <hr className="mt-3" />
                            <p className="text-gray-500 mt-5">
                                There is no information about the company yet.
                            </p>

                            <div className="py-4 bg-[#D0E9F4] px-6 mt-4">
                                <h1 className="font-semibold my-1 text-lg">
                                    Request reviews
                                </h1>
                                <p>
                                    To strengthen your company profile, you can request reviews from previously completed
                                    projects outside of moving 24. The first three reviews that are submitted, will be shown
                                    on your company profile. Before showing these reviews, we will verify them.
                                </p>
                                <button className="my-2 bg-primary text-white px-4 py-1 rounded">
                                    Request Review
                                </button>

                            </div>


                            <h1 className="mt-8 font-semibold text-2xl my-5">
                                Q & A
                            </h1>
                            <div className="my-3">
                                <p className="font-semibold text-xl">
                                    How did your start your business?
                                </p>
                                <p className="text-xl">
                                    The company has not yet answered this question.
                                </p>
                            </div>
                            <div className="my-3">
                                <p className="font-semibold text-xl">
                                    How did your start your business?
                                </p>
                                <p className="text-xl">
                                    The company has not yet answered this question.
                                </p>
                            </div>
                            <div className="my-3">
                                <p className="font-semibold text-xl">
                                    How did your start your business?
                                </p>
                                <p className="text-xl">
                                    The company has not yet answered this question.
                                </p>
                            </div>


                            <h1 className="mt-8 font-semibold text-2xl my-5">
                                Company Location
                            </h1>
                            {isLoaded ? (
                                <GoogleMap
                                    mapContainerStyle={containerStyle}
                                    center={latlong}
                                    zoom={13}
                                >
                                    {/* Child components, such as markers, info windows, etc. */}
                                    <Circle
                                        center={latlong}
                                        radius={1609.34 * 2}
                                        options={{
                                            fillColor: "coral",
                                            fillOpacity: 0.3,
                                            strokeWeight: 2,
                                            strokeColor: "coral",
                                            clickable: false,
                                            editable: true,
                                            zIndex: 1
                                        }}
                                        onCenterChanged={() => console.log("onCenterChanged")}
                                        onRadiusChanged={() => console.log("onRadiusChanged")}
                                    />
                                    <Marker position={latlong} />
                                </GoogleMap>
                            ) : (
                                <>
                                </>
                            )}



                        </div>

                        <div className="lg:w-1/4 w-full sm:w-full bg-ble-200">
                            <div className="bg-white py-4 shadow-lg border-gray-100 mt-5 py-1">
                                <h1 className="text-lg px-5">
                                    Create your company profile
                                </h1>
                                <hr className="my-2" />
                                <h2 className="px-5 text-gray-500 font-semibold">
                                    Type of business
                                </h2>
                                <p className="px-5 text-gray-500">
                                    unknown
                                </p>
                                <hr className="my-2" />
                                <h2 className="px-5 text-gray-500 font-semibold">
                                    Type of business
                                </h2>
                                <p className="px-5 text-gray-500">
                                    unknown
                                </p>
                                <hr className="my-2" />
                                <h2 className="px-5 text-gray-500 font-semibold">
                                    Type of business
                                </h2>
                                <p className="px-5 text-gray-500">
                                    unknown
                                </p>
                            </div>
                            <div className="bg-white shadow-lg border-gray-100 mt-5 py-1">
                                <h1 className="text-lg px-5">
                                    Who will see your company profile?
                                </h1>
                                <hr className="my-2" />
                                <p className="px-5 py-4 text-gray-500">
                                    Your company profile will be shown to customers
                                    right after they have completed a project
                                    request.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            {
                showImageModal && (
                    <MyModal>
                        <div className="bg-white relative w-4/5 rounded-lg px-5 py-5" style={{ width: "60rem", height: "35rem" }}>
                            <div
                                onClick={() => setShowImageModal(false)}
                                style={{
                                    fontSize: "40px"
                                }} className="absolute cursor-pointer text-white right-7">
                                X
                            </div>

                            <img className="h-full w-full" src={images[currImage]} />
                            <div className="" >
                                <AiOutlineLeft
                                    onClick={() => {
                                        let temp = currImage - 1
                                        if (temp < 0) {
                                            temp = images.length - 1
                                        }
                                        setCurrImage(temp)
                                    }}
                                    style={{
                                        fontSize: "50px"
                                    }}
                                    className="absolute cursor-pointer inset-y-1/2 text-white" />
                            </div>
                            <div className="">
                                <AiOutlineRight
                                    onClick={() => setCurrImage((currImage + 1) % images.length)}
                                    style={{
                                        fontSize: "50px"
                                    }} className="cursor-pointer absolute right-5 text-white inset-y-1/2" />
                            </div>
                        </div>
                    </MyModal>
                )
            }

        </div>
    )
}

export default CompanyProfile
