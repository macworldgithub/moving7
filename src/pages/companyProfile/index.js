import MyModal from "../../components/Modal/Modal"
import { setKey, setDefaults, fromAddress } from "react-geocode";
import { deleteImage } from "../../firebase/utils";
import AddImage from "../../assets/images/partnerChooseimg/addimage.png"
import { uploadImageDataStringAndGetURL } from "../../firebase/utils";
import { copyToClipboard } from "../../utils/CopyFun";
import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GoogleMap, Marker, useJsApiLoader, Circle, Polygon } from "@react-google-maps/api";
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


const path = [[{"lat":25.2374,"lng":56.249},{"lat":25.2379,"lng":56.2584},{"lat":25.2415,"lng":56.2583},{"lat":25.2431,"lng":56.2607},{"lat":25.2426,"lng":56.2721},{"lat":25.2395,"lng":56.274},{"lat":25.2367,"lng":56.2822},{"lat":25.2411,"lng":56.2843},{"lat":25.2427,"lng":56.2901},{"lat":25.2461,"lng":56.2904},{"lat":25.2579,"lng":56.3049},{"lat":25.2612,"lng":56.3213},{"lat":25.2668,"lng":56.3286},{"lat":25.2662,"lng":56.3312},{"lat":25.269,"lng":56.3354},{"lat":25.2729,"lng":56.3377},{"lat":25.2744,"lng":56.3449},{"lat":25.3049,"lng":56.3502},{"lat":25.3265,"lng":56.3805},{"lat":25.3239,"lng":56.381},{"lat":25.3222,"lng":56.3776},{"lat":25.3194,"lng":56.376},{"lat":25.2955,"lng":56.3733},{"lat":25.2935,"lng":56.375},{"lat":25.2782,"lng":56.3735},{"lat":25.2475,"lng":56.3666},{"lat":25.199,"lng":56.3607},{"lat":25.135,"lng":56.3585},{"lat":25.1286,"lng":56.36},{"lat":25.0989,"lng":56.3606},{"lat":25.0981,"lng":56.3591},{"lat":25.1003,"lng":56.3594},{"lat":25.0996,"lng":56.3521},{"lat":25.1018,"lng":56.3483},{"lat":25.1022,"lng":56.3139},{"lat":25.0999,"lng":56.3095},{"lat":25.102,"lng":56.307},{"lat":25.1015,"lng":56.304},{"lat":25.0925,"lng":56.3163},{"lat":25.0744,"lng":56.3245},{"lat":25.0124,"lng":56.3196},{"lat":25.0124,"lng":56.3139},{"lat":24.9973,"lng":56.3052},{"lat":25.0033,"lng":56.301},{"lat":25.0038,"lng":56.2969},{"lat":25.0001,"lng":56.2913},{"lat":24.9902,"lng":56.292},{"lat":24.9915,"lng":56.2821},{"lat":24.9887,"lng":56.2779},{"lat":24.99,"lng":56.2608},{"lat":24.987,"lng":56.2468},{"lat":25.0048,"lng":56.2398},{"lat":25.0127,"lng":56.2415},{"lat":25.0159,"lng":56.239},{"lat":25.0205,"lng":56.2414},{"lat":25.027,"lng":56.2368},{"lat":25.0285,"lng":56.2324},{"lat":25.0351,"lng":56.224},{"lat":25.0427,"lng":56.2213},{"lat":25.047,"lng":56.2166},{"lat":25.048,"lng":56.2113},{"lat":25.0526,"lng":56.2063},{"lat":25.0576,"lng":56.2026},{"lat":25.0637,"lng":56.2012},{"lat":25.0649,"lng":56.1974},{"lat":25.0725,"lng":56.1939},{"lat":25.0749,"lng":56.1886},{"lat":25.0753,"lng":56.1787},{"lat":25.0866,"lng":56.176},{"lat":25.0912,"lng":56.1732},{"lat":25.095,"lng":56.1734},{"lat":25.1004,"lng":56.1686},{"lat":25.1046,"lng":56.1719},{"lat":25.1092,"lng":56.173},{"lat":25.125,"lng":56.1704},{"lat":25.1275,"lng":56.1739},{"lat":25.1334,"lng":56.175},{"lat":25.1387,"lng":56.1712},{"lat":25.1449,"lng":56.1701},{"lat":25.1552,"lng":56.1729},{"lat":25.1575,"lng":56.1721},{"lat":25.1619,"lng":56.1761},{"lat":25.1651,"lng":56.1767},{"lat":25.174,"lng":56.1709},{"lat":25.1809,"lng":56.1727},{"lat":25.1845,"lng":56.1707},{"lat":25.1877,"lng":56.1716},{"lat":25.1908,"lng":56.1705},{"lat":25.1961,"lng":56.1748},{"lat":25.21,"lng":56.1787},{"lat":25.2141,"lng":56.1746},{"lat":25.218,"lng":56.1765},{"lat":25.2177,"lng":56.1779},{"lat":25.2205,"lng":56.1781},{"lat":25.2315,"lng":56.1724},{"lat":25.2395,"lng":56.1829},{"lat":25.2368,"lng":56.1865},{"lat":25.2381,"lng":56.1885},{"lat":25.237,"lng":56.1964},{"lat":25.2326,"lng":56.1994},{"lat":25.2303,"lng":56.2066},{"lat":25.2389,"lng":56.2324},{"lat":25.2382,"lng":56.2361},{"lat":25.2398,"lng":56.2411},{"lat":25.238,"lng":56.2424},{"lat":25.2374,"lng":56.249}],[{"lat":25.621,"lng":56.1797},{"lat":25.6192,"lng":56.203},{"lat":25.6157,"lng":56.2073},{"lat":25.6155,"lng":56.2163},{"lat":25.6099,"lng":56.2284},{"lat":25.6023,"lng":56.2533},{"lat":25.6064,"lng":56.2664},{"lat":25.6051,"lng":56.2676},{"lat":25.6132,"lng":56.2795},{"lat":25.6066,"lng":56.2908},{"lat":25.6078,"lng":56.2927},{"lat":25.6113,"lng":56.2915},{"lat":25.6125,"lng":56.2948},{"lat":25.6104,"lng":56.2922},{"lat":25.6081,"lng":56.2933},{"lat":25.6114,"lng":56.3012},{"lat":25.6156,"lng":56.2958},{"lat":25.6157,"lng":56.2969},{"lat":25.6101,"lng":56.3031},{"lat":25.6105,"lng":56.3083},{"lat":25.6049,"lng":56.323},{"lat":25.6068,"lng":56.3245},{"lat":25.6033,"lng":56.3267},{"lat":25.6026,"lng":56.3332},{"lat":25.6048,"lng":56.3358},{"lat":25.6005,"lng":56.3409},{"lat":25.6007,"lng":56.3449},{"lat":25.5964,"lng":56.3485},{"lat":25.5973,"lng":56.3513},{"lat":25.595,"lng":56.3556},{"lat":25.5598,"lng":56.3565},{"lat":25.5404,"lng":56.3649},{"lat":25.5337,"lng":56.3717},{"lat":25.5204,"lng":56.3714},{"lat":25.5037,"lng":56.365},{"lat":25.4909,"lng":56.3629},{"lat":25.4808,"lng":56.3652},{"lat":25.4478,"lng":56.3618},{"lat":25.4351,"lng":56.3628},{"lat":25.4326,"lng":56.3649},{"lat":25.4336,"lng":56.3717},{"lat":25.4312,"lng":56.3717},{"lat":25.4306,"lng":56.3668},{"lat":25.4114,"lng":56.3689},{"lat":25.4126,"lng":56.3655},{"lat":25.4193,"lng":56.3646},{"lat":25.4183,"lng":56.3554},{"lat":25.4141,"lng":56.3537},{"lat":25.3878,"lng":56.3147},{"lat":25.3858,"lng":56.2959},{"lat":25.3788,"lng":56.2857},{"lat":25.377,"lng":56.2748},{"lat":25.3646,"lng":56.2694},{"lat":25.3651,"lng":56.2634},{"lat":25.362,"lng":56.2562},{"lat":25.358,"lng":56.2528},{"lat":25.3555,"lng":56.2509},{"lat":25.3476,"lng":56.2515},{"lat":25.3394,"lng":56.2438},{"lat":25.3414,"lng":56.2314},{"lat":25.3374,"lng":56.2219},{"lat":25.332,"lng":56.2195},{"lat":25.3259,"lng":56.227},{"lat":25.318,"lng":56.2296},{"lat":25.3135,"lng":56.2231},{"lat":25.3143,"lng":56.2206},{"lat":25.3115,"lng":56.2126},{"lat":25.3094,"lng":56.2115},{"lat":25.3111,"lng":56.2095},{"lat":25.3192,"lng":56.2137},{"lat":25.3219,"lng":56.2106},{"lat":25.3268,"lng":56.2089},{"lat":25.329,"lng":56.2057},{"lat":25.3287,"lng":56.2},{"lat":25.3306,"lng":56.1989},{"lat":25.3334,"lng":56.201},{"lat":25.3339,"lng":56.1965},{"lat":25.3367,"lng":56.1966},{"lat":25.3329,"lng":56.1903},{"lat":25.3364,"lng":56.1877},{"lat":25.3416,"lng":56.1769},{"lat":25.355,"lng":56.1746},{"lat":25.3473,"lng":56.1636},{"lat":25.3429,"lng":56.1604},{"lat":25.3412,"lng":56.1555},{"lat":25.3245,"lng":56.1455},{"lat":25.322,"lng":56.1465},{"lat":25.318,"lng":56.1428},{"lat":25.3135,"lng":56.1429},{"lat":25.3117,"lng":56.1606},{"lat":25.3084,"lng":56.1609},{"lat":25.306,"lng":56.1683},{"lat":25.3106,"lng":56.1775},{"lat":25.3075,"lng":56.178},{"lat":25.3072,"lng":56.1827},{"lat":25.3042,"lng":56.1864},{"lat":25.2982,"lng":56.1802},{"lat":25.2997,"lng":56.1761},{"lat":25.2986,"lng":56.1699},{"lat":25.2794,"lng":56.1504},{"lat":25.2774,"lng":56.1518},{"lat":25.2757,"lng":56.15},{"lat":25.2751,"lng":56.153},{"lat":25.2686,"lng":56.1579},{"lat":25.2679,"lng":56.1561},{"lat":25.2632,"lng":56.1581},{"lat":25.261,"lng":56.1571},{"lat":25.2573,"lng":56.1507},{"lat":25.2547,"lng":56.1519},{"lat":25.251,"lng":56.1631},{"lat":25.2449,"lng":56.1581},{"lat":25.2451,"lng":56.1538},{"lat":25.2412,"lng":56.1493},{"lat":25.2423,"lng":56.1469},{"lat":25.2378,"lng":56.1413},{"lat":25.236,"lng":56.1363},{"lat":25.2309,"lng":56.1308},{"lat":25.2289,"lng":56.1159},{"lat":25.2247,"lng":56.1049},{"lat":25.225,"lng":56.1022},{"lat":25.2332,"lng":56.0939},{"lat":25.2351,"lng":56.0895},{"lat":25.2379,"lng":56.0901},{"lat":25.2388,"lng":56.0888},{"lat":25.2387,"lng":56.0799},{"lat":25.2338,"lng":56.0759},{"lat":25.2307,"lng":56.0669},{"lat":25.23,"lng":56.0487},{"lat":25.228,"lng":56.0393},{"lat":25.2375,"lng":56.0393},{"lat":25.2397,"lng":56.0228},{"lat":25.241,"lng":56.0198},{"lat":25.243,"lng":56.0195},{"lat":25.2404,"lng":56.0174},{"lat":25.2426,"lng":56.0138},{"lat":25.2441,"lng":56.0039},{"lat":25.2545,"lng":55.9959},{"lat":25.2587,"lng":55.9975},{"lat":25.2893,"lng":55.9908},{"lat":25.3087,"lng":56.0097},{"lat":25.3209,"lng":56.0296},{"lat":25.3272,"lng":56.0357},{"lat":25.3415,"lng":56.0358},{"lat":25.3367,"lng":56.0274},{"lat":25.3414,"lng":56.0162},{"lat":25.3409,"lng":55.9955},{"lat":25.3892,"lng":56.0073},{"lat":25.3802,"lng":56.05},{"lat":25.3767,"lng":56.0533},{"lat":25.3748,"lng":56.0646},{"lat":25.3712,"lng":56.068},{"lat":25.3699,"lng":56.0739},{"lat":25.3736,"lng":56.0838},{"lat":25.3723,"lng":56.089},{"lat":25.3713,"lng":56.092},{"lat":25.3673,"lng":56.092},{"lat":25.366,"lng":56.0943},{"lat":25.3615,"lng":56.0927},{"lat":25.358,"lng":56.0943},{"lat":25.3585,"lng":56.0973},{"lat":25.3562,"lng":56.1035},{"lat":25.3583,"lng":56.1064},{"lat":25.3543,"lng":56.1126},{"lat":25.3594,"lng":56.1185},{"lat":25.3573,"lng":56.1215},{"lat":25.3584,"lng":56.126},{"lat":25.3633,"lng":56.1284},{"lat":25.3706,"lng":56.1355},{"lat":25.3714,"lng":56.139},{"lat":25.3665,"lng":56.1434},{"lat":25.367,"lng":56.147},{"lat":25.3648,"lng":56.1497},{"lat":25.3699,"lng":56.1648},{"lat":25.3812,"lng":56.1653},{"lat":25.3866,"lng":56.1633},{"lat":25.3947,"lng":56.1657},{"lat":25.4097,"lng":56.1569},{"lat":25.4115,"lng":56.1536},{"lat":25.4164,"lng":56.1528},{"lat":25.4156,"lng":56.149},{"lat":25.4102,"lng":56.1452},{"lat":25.4063,"lng":56.1396},{"lat":25.4082,"lng":56.1368},{"lat":25.4053,"lng":56.1325},{"lat":25.4074,"lng":56.1259},{"lat":25.4122,"lng":56.1279},{"lat":25.4173,"lng":56.1246},{"lat":25.4157,"lng":56.1181},{"lat":25.4184,"lng":56.1147},{"lat":25.4168,"lng":56.1058},{"lat":25.4244,"lng":56.093},{"lat":25.4317,"lng":56.0972},{"lat":25.4336,"lng":56.1018},{"lat":25.4325,"lng":56.1062},{"lat":25.4347,"lng":56.1102},{"lat":25.4434,"lng":56.1152},{"lat":25.4473,"lng":56.1153},{"lat":25.4496,"lng":56.1207},{"lat":25.4488,"lng":56.1233},{"lat":25.4592,"lng":56.1275},{"lat":25.4611,"lng":56.1349},{"lat":25.4652,"lng":56.14},{"lat":25.4712,"lng":56.1424},{"lat":25.4789,"lng":56.1366},{"lat":25.4796,"lng":56.1333},{"lat":25.4777,"lng":56.1325},{"lat":25.4737,"lng":56.1219},{"lat":25.4753,"lng":56.1192},{"lat":25.4794,"lng":56.1177},{"lat":25.493,"lng":56.1025},{"lat":25.4955,"lng":56.0974},{"lat":25.4923,"lng":56.0904},{"lat":25.4934,"lng":56.0672},{"lat":25.4898,"lng":56.02},{"lat":25.5123,"lng":55.9964},{"lat":25.5121,"lng":55.9902},{"lat":25.518,"lng":55.9912},{"lat":25.5371,"lng":55.9884},{"lat":25.5509,"lng":55.9817},{"lat":25.5877,"lng":55.9856},{"lat":25.5877,"lng":55.9786},{"lat":25.6126,"lng":55.9745},{"lat":25.6121,"lng":55.9823},{"lat":25.6226,"lng":55.9827},{"lat":25.6196,"lng":55.9894},{"lat":25.6249,"lng":55.9902},{"lat":25.6194,"lng":55.9981},{"lat":25.6142,"lng":56.0002},{"lat":25.6109,"lng":56.0034},{"lat":25.6134,"lng":56.0051},{"lat":25.6129,"lng":56.0072},{"lat":25.6088,"lng":56.0104},{"lat":25.6128,"lng":56.0143},{"lat":25.6076,"lng":56.0419},{"lat":25.6085,"lng":56.0582},{"lat":25.6164,"lng":56.0624},{"lat":25.6176,"lng":56.0648},{"lat":25.6136,"lng":56.0709},{"lat":25.6408,"lng":56.0746},{"lat":25.6441,"lng":56.0729},{"lat":25.639,"lng":56.0924},{"lat":25.6377,"lng":56.1156},{"lat":25.6408,"lng":56.1293},{"lat":25.6374,"lng":56.1486},{"lat":25.6228,"lng":56.1534},{"lat":25.621,"lng":56.1797}],[{"lat":24.9724,"lng":56.3236},{"lat":24.9421,"lng":56.3412},{"lat":24.9339,"lng":56.3501},{"lat":24.9144,"lng":56.3389},{"lat":24.8982,"lng":56.3261},{"lat":24.8842,"lng":56.3054},{"lat":24.8842,"lng":56.2806},{"lat":24.9222,"lng":56.2792},{"lat":24.9355,"lng":56.2633},{"lat":24.9424,"lng":56.2668},{"lat":24.9536,"lng":56.2861},{"lat":24.9597,"lng":56.2904},{"lat":24.9662,"lng":56.2897},{"lat":24.9804,"lng":56.3013},{"lat":24.9728,"lng":56.3114},{"lat":24.9724,"lng":56.3236}]]


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
                                        )}
                                    {
                                        path.map((p) => {
                                            return (<Polygon

                                                path={p}

                                            />)
                                        })
                                    }
                                    {
                                        path.map((p) => {
                                            return (<Polygon

                                                path={p}

                                            />)
                                        })
                                    }
                                    <Marker position={latlong} />
                                    <Marker position={latlong} />
                                    <Marker position={latlong} />
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
