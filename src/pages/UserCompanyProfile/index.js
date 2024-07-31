import MyModal from "../../components/Modal/Modal"
import NoProfileImage from '../../assets/images/overview/NOprofile.jpg'
import { setKey, setDefaults, fromAddress } from "react-geocode";
import AddImage from "../../assets/images/partnerChooseimg/addimage.png"
import { copyToClipboard } from "../../utils/CopyFun";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { GoogleMap, Marker, useJsApiLoader, Circle, Polygon } from "@react-google-maps/api";
import { AiOutlineRight, AiOutlineLeft, AiOutlineDelete, AiOutlinePlus, AiOutlineEdit, AiOutlineCheck } from "react-icons/ai";
import { useState } from "react";
import { toast } from "react-toastify";
import { useMutation, useQuery } from "react-query";
import { fetchOnePartner, getPolygon, getUAERegions, partnerSignIn, updateContactInfo, updateNameAdd, updatePartnerDetails } from "../../apiFunctions/partner";
import Footer from "../footer/footer";
import LoaderLayout from "../../components/Loaders/LoaderLayout";
import Truck from "../../components/Loaders/Truck";


setKey("AIzaSyCqw1dzXk74gdrqunxHYiuVLSEIHu4fbcM");



const containerStyle = {
    width: "100%",
    height: "400px",
};


const UserCompanyProfile = () => {
    const { id } = useParams()
    const partnerDataRes = useQuery({
        queryKey: ["fetchOnepartner", id],
        queryFn: fetchOnePartner,
    })

    const partnerData = partnerDataRes?.data?.data ?? { images: [] }
    console.log(partnerDataRes, "Partnerrrrrrr")
    const polygonRes = useQuery({
        queryKey: ["fetchPolygonsEdit", partnerData?.regions ?? []],
        queryFn: getPolygon,
        enabled: false
    })

    const fetchPolygon = polygonRes.refetch

    const [showImageModal, setShowImageModal] = useState(false)
    const [showProfileModal, setShowProfileModal] = useState(false)
    const [currImage, setCurrImage] = useState(0)
    const [latlong, setLatlong] = useState({
        lat: 25.276987,
        lng: 55.296249,
    });
    useEffect(() => {
        console.log(partnerDataRes?.data?.data, "hereeeeeee")
        if (partnerDataRes?.data?.data?.areaPreference === "radius") {
            fromAddress(partnerDataRes?.data?.data?.location ?? "")
                .then(({ results }) => {
                    const { lat, lng } = results[0].geometry.location;
                    setLatlong({
                        lat,
                        lng,
                    });
                })
                .catch(console.error);
        } else if (partnerDataRes?.data?.data?.areaPreference === "region") {
            fetchPolygon()
        }

    }, [partnerDataRes.data]);
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyCqw1dzXk74gdrqunxHYiuVLSEIHu4fbcM"
    });


    if (partnerDataRes.isLoading || polygonRes.isLoading) {
        return (<LoaderLayout>
            <Truck />
        </LoaderLayout>)

    }

    const polygons = polygonRes?.data?.data

    console.log(polygonRes, "polygons")

    return (
        <div className="relative z-10">
            <div className="mb-40 mx-10 mt-4">
                <div className="flex flex-wrap">
                    <div className=" flex lg:w-3/4 flex-wrap sm:w-96">
                        <div>
                            <img onClick={() => setShowProfileModal(true)} src={`${partnerData?.profileImage ? partnerData?.profileImage : NoProfileImage}`} className="cursor-pointer rounded-full lg:w-[240px] sm:w-full z-10 relative" />
                        </div>
                        <div className="mx-8 flex justify-between flex-col mt-2">
                            <div>
                                <h1 className=" flex items-center text-xl font-semibold">
                                    {partnerData?.firstName + " " + partnerData?.lastName}
                                </h1>
                                <p className="text-gray-500">
                                    {partnerData?.addressLine1}
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
                                    {
                                        partnerData?.isVerified ? "The company is Verified." : "This company recently joined Moving24 and is not yet verified by us."
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 pt-2 sm:w-full lg:w-1/4">
                        <h1 className="font-semibold text-xl flex items-center">
                            Contact information
                        </h1>
                        <p className="text-gray-500 mt-1">
                            {partnerData?.telephone}
                        </p>
                        <p className="text-gray-500 mt-1">
                            {partnerData?.email}
                        </p>

                        <div onClick={() => copyToClipboard(window.location.href)} className="bg-primary w-max px-3 py-1 rounded text-white mt-6 cursor-pointer">
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

                            <h1 className="text-3xl font-[#4B4B4B] font-semibold flex items-center">
                                About the company
                            </h1>
                            <p className="text-gray-500 mt-1">
                                {partnerData?.about ?? "There is no information about the company yet."}
                            </p>
                            <div className="flex items-center justify-between">
                                <h1 className="text-2xl font-semibold ">
                                    Project images
                                </h1>
                            </div>

                            <div onClick={() => {
                                if (partnerData?.images?.length) {
                                    setShowImageModal(true)
                                }
                            }} className="images cursor-pointer overflow-hidden flex sm:w-full w-full bg-gray-200 h-72 my-3">
                                {
                                    partnerData?.images?.length ? (
                                        <>
                                            <img className="w-[44rem]" src={`${partnerData?.images[0]?.url ?? AddImage}`} />
                                            <div>
                                                <img className="h-1/2" onClick={() => {
                                                    if (partnerData?.images[1] === null) {
                                                        setShowImageModal(true)
                                                        setCurrImage(1)
                                                    }
                                                }} src={`${partnerData?.images[1]?.url ?? AddImage}`} />
                                                <img className="h-1/2" onClick={() => {
                                                    if (partnerData?.images[2] === null) {
                                                        setShowImageModal(true)
                                                        setCurrImage(2)
                                                    }
                                                }} src={`${partnerData?.images[2]?.url ?? AddImage}`} />

                                            </div>
                                        </>
                                    ) : (
                                        <div className="flex items-center justify-center w-full">
                                            <p>
                                                No Images
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
                            </div>

                            <hr className="mt-3" />

                            <h1 className="items-center mt-8 flex font-semibold text-2xl my-5">
                                Q & A
                            </h1>
                            <div className="my-3">
                                <p className="font-semibold text-xl">
                                    How did your start your business?
                                </p>

                                <p className="text-xl">
                                    {
                                        partnerData?.ans1 ?? "The company has not yet answered this question."
                                    }
                                </p>
                            </div>
                            <div className="my-3">
                                <p className="font-semibold text-xl">
                                    What makes your services standout?
                                </p>
                                <p className="text-xl">
                                    {
                                        partnerData?.ans2 ?? "The company has not yet answered this question."
                                    }
                                </p>
                            </div>
                            <div className="my-3">
                                <p className="font-semibold text-xl">
                                    What is your top advice for your customers?
                                </p>
                                <p className="text-xl">
                                    {
                                        partnerData?.ans3 ?? "The company has not yet answered this question."
                                    }
                                </p>
                            </div>


                            <h1 className="flex items-center mt-8 font-semibold text-2xl my-5">
                                Company Location
                            </h1>
                            {isLoaded ? (
                                <GoogleMap
                                    mapContainerStyle={containerStyle}
                                    center={partnerData?.areaPreference === "region" ? { lat: 25.276987, lng: 55.296249 } : latlong}
                                    zoom={8}
                                >
                                    {
                                        partnerData?.areaPreference === "radius" && (
                                            <Circle
                                                center={latlong}
                                                radius={partnerData?.radius * 1609.34}
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
                                        )}
                                    {
                                        partnerData?.areaPreference === "region" &&
                                        polygons?.length && (
                                            polygons?.map((reg) => {
                                                return reg?.multiPolygon?.map((elem) => {
                                                    return (<Polygon
                                                        options={{
                                                            fillColor: '#1ABD5E',
                                                            fillOpacity: 0.1,
                                                            strokeColor: '#1ABD5E',
                                                            strokeOpacity: 0.5,
                                                            strokeWeight: 1,
                                                        }}
                                                        path={elem}

                                                    />)
                                                })
                                            })
                                        )

                                    }
                                    <Marker position={latlong} />
                                </GoogleMap>
                            ) : (
                                <>
                                </>
                            )}



                        </div>

                        <div className="lg:w-1/4 w-full sm:w-full bg-ble-200">
                            <div className="bg-white w-full py-4 shadow-lg border-gray-100 mt-5 py-1">
                                <h1 className="text-lg px-5 justify-between flex items-center">
                                    Company Profile
                                </h1>
                                <hr className="my-2" />
                                <h2 className="px-5 text-gray-500 font-semibold">
                                    Type of business
                                </h2>
                                <p className="px-5 text-gray-500">
                                    {partnerData?.businessType ?? "None"}
                                </p>
                                <hr className="my-2" />
                                <h2 className="px-5 text-gray-500 font-semibold">
                                    No Of Employees
                                </h2>
                                <p className="px-5 text-gray-500">
                                    {partnerData?.noOfEmployees ?? "None"}
                                </p>
                                <hr className="my-2" />
                                <h2 className="px-5 text-gray-500 font-semibold">
                                    EIN
                                </h2>
                                <p className="px-5 text-gray-500">
                                    {partnerData?.EIN ?? "None"}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>






            {
                showProfileModal && (
                    <MyModal>
                        <div className="bg-white relative w-2/5 rounded-lg px-5  py-5 h-90  sm:h-4/5">
                            <div
                                onClick={() => setShowProfileModal(false)}
                                style={{
                                    fontSize: "20px",
                                    zIndex: 100
                                }} className="absolute  bg-[rgba(0,0,0,0.5)] rounded-full w-10 h-10 flex items-center justify-center cursor-pointer text-white right-7">
                                X
                            </div>
                            <div className="h-full w-full flex justify-center items-center">
                                <img className="h-84 w-96" src={partnerData?.profileImage ?? AddImage} />
                            </div>
                        </div>
                    </MyModal>
                )
            }












            {
                showImageModal && (
                    <MyModal>
                        <div className="bg-white relative w-4/5 rounded-lg px-5 pb-10 py-5  h-4/5">
                            <div
                                onClick={() => setShowImageModal(false)}
                                style={{
                                    fontSize: "20px",
                                    zIndex: 100
                                }} className="absolute  bg-[rgba(0,0,0,0.5)] rounded-full w-10 h-10 flex items-center justify-center cursor-pointer text-white right-7">
                                X
                            </div>
                            <img className="h-full w-full" src={partnerData?.images[currImage]?.url ?? AddImage} />
                            <div>
                                <AiOutlineLeft
                                    onClick={() => {
                                        let temp = currImage - 1
                                        if (temp < 0) {
                                            temp = partnerData?.images.length - 1
                                        }
                                        setCurrImage(temp)
                                    }}
                                    style={{
                                        fontSize: "40px"
                                    }}
                                    className="absolute p-2 bg-[rgba(0,0,0,0.5)] cursor-pointer inset-y-1/2 text-white rounded-full" />
                            </div>
                            <div className="">
                                <AiOutlineRight
                                    onClick={() => setCurrImage((currImage + 1) % partnerData?.images?.length)}
                                    style={{
                                        fontSize: "40px"
                                    }}
                                    className="absolute p-2 bg-[rgba(0,0,0,0.5)] right-5 cursor-pointer inset-y-1/2 text-white rounded-full" />
                            </div>
                            <div className="flex justify-between py3  w-full">
                                <p className="text-2xl">
                                    {currImage + 1} / {partnerData?.images?.length}
                                </p>
                            </div>
                        </div>
                    </MyModal>
                )
            }

            <Footer />
        </div>
    )
}

export default UserCompanyProfile

