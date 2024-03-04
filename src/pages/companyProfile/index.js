import MyModal from "../../components/Modal/Modal"
import { setKey, setDefaults, fromAddress } from "react-geocode";
import { deleteImage } from "../../firebase/utils";
import AddImage from "../../assets/images/partnerChooseimg/addimage.png"
import { uploadImageDataStringAndGetURL } from "../../firebase/utils";
import { copyToClipboard } from "../../utils/CopyFun";
import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GoogleMap, Marker, useJsApiLoader, Circle } from "@react-google-maps/api";
import { AiOutlineRight, AiOutlineLeft, AiOutlineDelete, AiOutlinePlus, AiOutlineEdit, AiOutlineCheck } from "react-icons/ai";
import { Carousel } from 'antd';
import { useState } from "react";
import { toast } from "react-toastify";
import { useMutation, useQuery } from "react-query";
import { fetchOnePartner, updateContactInfo, updateNameAdd, updatePartnerDetails } from "../../apiFunctions/partner";
import { Select, Input } from 'antd';



setKey("AIzaSyBmlfCX9N5NAKdGidMbSxMXkc4CNHcT6rQ");
const { TextArea } = Input;



const containerStyle = {
    width: "100%",
    height: "400px",
};


const CompanyProfile = () => {
    const { id } = useParams()
    const partnerDataRes = useQuery({
        queryKey: ["fetchOnepartner", id],
        queryFn: fetchOnePartner,
    })
    const refetch = partnerDataRes?.refetch
    const updatePartnerDetailsMutation = useMutation({
        mutationKey: "updatePartnerDetails",
        mutationFn: updatePartnerDetails,
        onSuccess: () => {
            toast.success("Updated!")
            refetch()
        },
        onError: () => {
            toast.success("Ops could not be updated!")
        }
    })
    const [isDataEditable, setIsDataEditable] = useState({
        isNameLocationEditable: false,
        isContactInfoEditable: false,
        isAboutEditable: false,
        isQnAEditable: false,
        isCompanyDataEditable: false
    })
    const [partnerData, setPartnerData] = useState({})
    const [images, setImages] = useState([])
    const [showImageModal, setShowImageModal] = useState(false)
    const [currImage, setCurrImage] = useState(0)
    const [latlong, setLatlong] = useState({
        lat: -3.745,
        lng: -38.523,
    });
    useEffect(() => {
        setPartnerData(partnerDataRes?.data?.data ?? {});
        console.log(partnerDataRes?.data?.data, "data")
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
        }
        let arr = new Array(5).fill(null)
        partnerDataRes?.data?.data?.images?.forEach((image, idx) => {
            arr[idx] = image
        })
        setImages(arr ?? []);
    }, [partnerDataRes.data]);
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyBmlfCX9N5NAKdGidMbSxMXkc4CNHcT6rQ",
    });
    const nullCount = (arr) => {
        let count = 0
        arr.forEach((elem) => {
            if (!elem) {
                count++
            }
        })
        return count
    }
    const handleDataChange = (key, val) => {
        setPartnerData({
            ...partnerData,
            [key]: val
        })
    }
    const handleEditChange = (key) => {
        setIsDataEditable({
            ...isDataEditable,
            [key]: !isDataEditable[key]
        })
    }
    console.log(partnerData, "partnerrrr")
    console.log(images, "imagesssss")
    return (
        <div className="relative z-10">
            <div className="mb-40 mx-10 mt-4">
                <div className="flex flex-wrap">
                    <div className=" flex lg:w-3/4 flex-wrap sm:w-96">
                        <div>
                            <img src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.98259409.1708992000&semt=sph" className="rounded-full lg:w-[240px] sm:w-full z-10 relative" />
                        </div>
                        <div className="mx-8 flex justify-between flex-col mt-2">
                            <div>{
                                isDataEditable?.isNameLocationEditable ? (
                                    <div>
                                        <div className="flex items-center">
                                            <input className="px-2 border-b-2 py-1 text-lg w-40 focus-visible:outline-none" placeholder="First Name" value={partnerData?.firstName} onChange={(e) => {
                                                handleDataChange("firstName", e.target.value)
                                            }} />
                                            <input className="px-2 border-b-2 py-1 text-lg ms-3 focus-visible:outline-none w-40" value={partnerData?.lastName} placeholder="Last Name" onChange={(e) => {
                                                handleDataChange("lastName", e.target.value)
                                            }} />
                                            <AiOutlineCheck onClickCapture={() => updatePartnerDetailsMutation.mutate({
                                                firstName: partnerData.firstName,
                                                lastName: partnerData?.lastName,
                                                addressLine1: partnerData?.addressLine1
                                            })} className="cursor-pointer ms-2 text-lg" onClick={() => handleEditChange("isNameLocationEditable")} />
                                        </div>
                                        <input className="px-2 border-b-2 py-1 text-lg  focus-visible:outline-none w-40" value={partnerData?.addressLine1} onChange={(e) => {
                                            handleDataChange("addressLine1", e.target.value)
                                        }} />
                                    </div>
                                ) : (<>
                                    <h1 className=" flex items-center text-xl font-semibold">
                                        {partnerData?.firstName + " " + partnerData?.lastName}
                                        <AiOutlineEdit onClick={() => handleEditChange("isNameLocationEditable")} className="cursor-pointer ms-2" />
                                    </h1>
                                    <p className="text-gray-500">
                                        {partnerData?.addressLine1}
                                    </p>
                                </>)
                            }

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
                            {
                                !isDataEditable.isContactInfoEditable ? (
                                    <AiOutlineEdit onClick={() => handleEditChange("isContactInfoEditable")} className="cursor-pointer ms-2" />
                                ) : (
                                    <AiOutlineCheck onClickCapture={() => updatePartnerDetailsMutation.mutate({
                                        telephone: partnerData?.telephone,
                                        email: partnerData?.email
                                    })} className="cursor-pointer ms-2 text-lg" onClick={() => handleEditChange("isContactInfoEditable")} />
                                )
                            }
                        </h1>
                        {
                            isDataEditable.isContactInfoEditable ? (<div>
                                <input className="px-2 border-b-2 py-1 text-lg w-56 focus-visible:outline-none" placeholder="First Name" value={partnerData?.telephone} onChange={(e) => {
                                    handleDataChange("telephone", e.target.value)
                                }} />
                                <input className="px-2 border-b-2 py-1 text-lg  focus-visible:outline-none w-56" value={partnerData?.email} placeholder="Email" onChange={(e) => {
                                    handleDataChange("email", e.target.value)
                                }} />
                            </div>) : (
                                <>                        <p className="text-gray-500 mt-1">
                                    {partnerData?.telephone}
                                </p>
                                    <p className="text-gray-500 mt-1">
                                        {partnerData?.email}
                                    </p> </>

                            )
                        }
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
                                {
                                    !isDataEditable.isAboutEditable ? (
                                        <AiOutlineEdit onClick={() => handleEditChange("isAboutEditable")} className="cursor-pointer ms-2" />
                                    ) : (
                                        <AiOutlineCheck onClickCapture={() => updatePartnerDetailsMutation.mutate({
                                            about: partnerData?.about,
                                        })} className="cursor-pointer ms-2 text-lg" onClick={() => handleEditChange("isAboutEditable")} />
                                    )
                                }
                            </h1>
                            {
                                isDataEditable.isAboutEditable ? (
                                    <TextArea
                                        className="my-2"
                                        showCount
                                        maxLength={1000}
                                        onChange={(e) => handleDataChange("about", e.target.value)}
                                        value={partnerData?.about}
                                        placeholder="About"
                                        style={{
                                            height: 120,
                                            resize: 'none',
                                        }}
                                    />
                                ) : (
                                    <p className="text-gray-500 mt-1">
                                        {partnerData?.about ?? "There is no information about the company yet."}
                                    </p>
                                )
                            }
                            <div className="flex items-center justify-between">
                                <h1 className="text-2xl font-semibold ">
                                    Project images
                                </h1>
                                <button onClick={async () => {
                                    let imgesToUpload = images.filter((image) => image?.url?.startsWith("data"))
                                    let uploadedUrls = images.filter((image) => image !== null && !image?.url?.startsWith("data"))
                                    let a = new Date();
                                    const num = Math.round(Math.random() * 10000 + a.getMilliseconds());
                                    const paths = []
                                    const urls = imgesToUpload.map((image, idx) => {
                                        paths.push(`${id}/${num + idx.toString()}`)
                                        return uploadImageDataStringAndGetURL(`${id}/${num + idx.toString()}`, image?.url)
                                    })
                                    let uploadedImages = await Promise.all(urls)
                                    uploadedImages = uploadedImages.map((url, idx) => {
                                        return { url, path: paths[idx] }
                                    })
                                    updatePartnerDetailsMutation.mutate({
                                        images: [...uploadedUrls, ...uploadedImages]
                                    })
                                }} className="my-2 bg-primary text-white px-4 py-1 rounded">
                                    Save
                                </button>
                            </div>

                            <div onClick={() => {
                                if (images.length && nullCount(images) !== 5) {
                                    setShowImageModal(true)
                                }
                            }} className="images cursor-pointer overflow-hidden flex sm:w-full w-full bg-gray-200 h-72 my-3">
                                {
                                    images.length > 0 && images[0] !== null ? (
                                        <>
                                            <img className="w-[44rem]" src={`${images[0]?.url ?? AddImage}`} />
                                            <div>
                                                <img className="h-1/2" onClick={() => {
                                                    if (images[1] === null) {
                                                        setShowImageModal(true)
                                                        setCurrImage(1)
                                                    }
                                                }} src={`${images[1]?.url ?? AddImage}`} />
                                                <img className="h-1/2" onClick={() => {
                                                    if (images[2] === null) {
                                                        setShowImageModal(true)
                                                        setCurrImage(2)
                                                    }
                                                }} src={`${images[2]?.url ?? AddImage}`} />

                                            </div>
                                        </>
                                    ) : (
                                        <div className="flex flex-col items-center relative justify-center w-full">
                                            <input multiple={true} type={"file"} onChange={(e) => {
                                                let files = e.target.files
                                                if (nullCount(images) - files.length < 0) {
                                                    toast.error("Cannot upload more than 5 images!")
                                                    return
                                                }
                                                for (let i = 0; i < files.length; i++) {
                                                    let reader = new FileReader()
                                                    reader.readAsDataURL(files[i])
                                                    reader.addEventListener("load", function() {
                                                        setImages((prev) => {
                                                            let tempPrev = prev.filter((p) => p !== null)
                                                            tempPrev = [...tempPrev, { url: this.result }]
                                                            if (tempPrev.length < 5) {
                                                                for (let i = tempPrev.length; i < 5; i++) {
                                                                    tempPrev[i] = null
                                                                }
                                                            }
                                                            return [...tempPrev]
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


                            <h1 className="items-center mt-8 flex font-semibold text-2xl my-5">
                                Q & A
                                {
                                    !isDataEditable.isQnAEditable ? (
                                        <AiOutlineEdit onClick={() => handleEditChange("isQnAEditable")} className="cursor-pointer ms-2" />
                                    ) : (
                                        <AiOutlineCheck onClickCapture={() => updatePartnerDetailsMutation.mutate({
                                            ans1: partnerData?.ans1,
                                            ans2: partnerData?.ans2,
                                            ans3: partnerData?.ans3,
                                        })} className="cursor-pointer ms-2 text-lg" onClick={() => handleEditChange("isQnAEditable")} />
                                    )
                                }
                            </h1>
                            <div className="my-3">
                                <p className="font-semibold text-xl">
                                    How did your start your business?
                                </p>

                                {
                                    isDataEditable.isQnAEditable ? (
                                        <input className="px-2 border-b-2 py-1 text-lg w-full my-2 focus-visible:outline-none" placeholder="Write..." value={partnerData?.ans1} onChange={(e) => {
                                            handleDataChange("ans1", e.target.value)
                                        }} />
                                    ) : (
                                        <p className="text-xl">
                                            {
                                                partnerData?.ans1 ?? "The company has not yet answered this question."
                                            }
                                        </p>
                                    )
                                }
                            </div>
                            <div className="my-3">
                                <p className="font-semibold text-xl">
                                    What makes your services standout?
                                </p>
                                {
                                    isDataEditable.isQnAEditable ? (
                                        <input className="px-2 border-b-2 py-1 text-lg w-full my-2 focus-visible:outline-none" placeholder="Write..." value={partnerData?.ans2} onChange={(e) => {
                                            handleDataChange("ans2", e.target.value)
                                        }} />
                                    ) : (
                                        <p className="text-xl">
                                            {
                                                partnerData?.ans2 ?? "The company has not yet answered this question."
                                            }
                                        </p>
                                    )
                                }
                            </div>
                            <div className="my-3">
                                <p className="font-semibold text-xl">
                                    What is your top advice for your customers?
                                </p>
                                {
                                    isDataEditable.isQnAEditable ? (
                                        <input className="px-2 border-b-2 py-1 text-lg w-full my-2 focus-visible:outline-none" placeholder="Write..." value={partnerData?.ans3} onChange={(e) => {
                                            handleDataChange("ans3", e.target.value)
                                        }} />
                                    ) : (
                                        <p className="text-xl">
                                            {
                                                partnerData?.ans3 ?? "The company has not yet answered this question."
                                            }
                                        </p>
                                    )
                                }
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
                                    Create your company profile
                                    {
                                        !isDataEditable.isCompanyDataEditable ? (
                                            <AiOutlineEdit onClick={() => handleEditChange("isCompanyDataEditable")} className="cursor-pointer ms-2" />
                                        ) : (
                                            <AiOutlineCheck onClickCapture={() => updatePartnerDetailsMutation.mutate({
                                                businessType: partnerData?.businessType,
                                                noOfEmployees: partnerData?.noOfEmployees,
                                                EIN: partnerData?.EIN
                                            })} className="cursor-pointer font-lg ms-2 text-lg" onClick={() => handleEditChange("isCompanyDataEditable")} />
                                        )
                                    }
                                </h1>
                                <hr className="my-2" />
                                <h2 className="px-5 text-gray-500 font-semibold">
                                    Type of business
                                </h2>
                                {
                                    isDataEditable?.isCompanyDataEditable ? (
                                        <Select
                                            defaultValue={partnerData?.businessType ?? "None"}
                                            className="w-10/12 my-1 mx-5"
                                            onChange={(val) => handleDataChange("businessType", val)}
                                            options={[
                                                {
                                                    value: 'solo',
                                                    label: 'Sole Trader',
                                                },
                                                {
                                                    value: 'company',
                                                    label: 'Company',
                                                },
                                            ]}
                                        />

                                    ) : (
                                        <p className="px-5 text-gray-500">
                                            {partnerData?.businessType ?? "None"}
                                        </p>
                                    )
                                }
                                <hr className="my-2" />
                                <h2 className="px-5 text-gray-500 font-semibold">
                                    No Of Employees
                                </h2>
                                {
                                    isDataEditable?.isCompanyDataEditable ? (
                                        <input className="px-2 border-b-2 py-1 text-lg w-10/12 mx-5  my-2 focus-visible:outline-none" placeholder="Write..." value={partnerData?.noOfEmployees} onChange={(e) => {
                                            handleDataChange("noOfEmployees", e.target.value)
                                        }} />

                                    ) : (
                                        <p className="px-5 text-gray-500">
                                            {partnerData?.noOfEmployees ?? "None"}
                                        </p>
                                    )
                                }
                                <hr className="my-2" />
                                <h2 className="px-5 text-gray-500 font-semibold">
                                    EIN
                                </h2>
                                {
                                    isDataEditable?.isCompanyDataEditable ? (
                                        <input type={"number"} className="px-2 border-b-2 py-1 text-lg w-10/12 mx-5 my-2 focus-visible:outline-none" placeholder="Write..." value={partnerData?.EIN} onChange={(e) => {
                                            handleDataChange("EIN", e.target.value)
                                        }} />

                                    ) : (
                                        <p className="px-5 text-gray-500">
                                            {partnerData?.EIN ?? "None"}
                                        </p>
                                    )
                                }
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
                        <div className="bg-white relative w-4/5 rounded-lg px-5 pb-10 py-5  h-4/5">
                            <div
                                onClick={() => setShowImageModal(false)}
                                style={{
                                    fontSize: "20px",
                                    zIndex: 100
                                }} className="absolute  bg-[rgba(0,0,0,0.5)] rounded-full w-10 h-10 flex items-center justify-center cursor-pointer text-white right-7">
                                X
                            </div>
                            {
                                images[currImage]?.url ? (
                                    <>
                                        <img className="h-full w-full" src={images[currImage]?.url ?? AddImage} />
                                    </>
                                ) : (
                                    <div className="flex flex-col w-full h-full items-center relative justify-center w-full">
                                        <input multiple={true} type={"file"} onChange={(e) => {
                                            let files = e.target.files
                                            for (let i = 0; i < files.length; i++) {
                                                let reader = new FileReader()
                                                reader.readAsDataURL(files[i])
                                                reader.addEventListener("load", function() {
                                                    setImages((prev) => {
                                                        let arr = [...prev]
                                                        arr[currImage] = { url: this.result }
                                                        return [...arr]
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
                            <div>
                                <AiOutlineLeft
                                    onClick={() => {
                                        let temp = currImage - 1
                                        if (temp < 0) {
                                            temp = images.length - 1
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
                                    onClick={() => setCurrImage((currImage + 1) % images.length)}
                                    style={{
                                        fontSize: "40px"
                                    }}
                                    className="absolute p-2 bg-[rgba(0,0,0,0.5)] right-5 cursor-pointer inset-y-1/2 text-white rounded-full" />
                            </div>
                            <div className="flex justify-between py3  w-full">
                                <p className="text-2xl">
                                    {currImage + 1} / 5
                                </p>
                                {
                                    images[currImage] &&
                                    <AiOutlineDelete size={30} onClick={async () => {
                                        let path = images[currImage]?.path
                                        let arr = images
                                        arr.splice(currImage, 1)
                                        updatePartnerDetailsMutation.mutate({
                                            images: arr
                                        })
                                        await deleteImage(path)
                                    }} className={"text-red cursor-pointer"} />
                                }
                            </div>
                        </div>
                    </MyModal>
                )
            }

        </div>
    )
}

export default CompanyProfile
