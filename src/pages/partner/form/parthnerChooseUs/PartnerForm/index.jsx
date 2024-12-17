import React, { useEffect, useMemo, useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { setKey, fromAddress } from "react-geocode";
import LoaderLayout from "../../../../../components/Loaders/LoaderLayout";
import Truck from "../../../../../components/Loaders/Truck";
import RegionAccordion from "../../Accordion";
import { AutoComplete } from "antd";
import {
  getLocationSuggestions,
  getPolygon,
  getUAERegions,
} from "../../../../../apiFunctions/partner";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  Circle,
  Polygon,
} from "@react-google-maps/api";
import { useQuery, useMutation } from "react-query";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import { partnerSignUp } from "../../../../../apiFunctions/partner";
import { useNavigate } from "react-router-dom";

const width = window.innerWidth;
const height = window.innerHeight;

const containerStyle = {
  width:
    width > 1280
      ? "500px"
      : width > 780 && width < 1280
        ? "400px"
        : width < 780 && width > 480
          ? "350px"
          : "250px",
  height:
    width > 1280
      ? "500px"
      : width > 780 && width < 1280
        ? "400px"
        : width < 780 && width > 480
          ? "350px"
          : "250px",
};

setKey(process.env.REACT_APP_GOOGLE_API_KEY);

export default function FreeTrialForm() {
  // adding this temporarily
  const options = useMemo(() => countryList().getData(), []);

  const [removalTypes, setRemovalTypes] = useState([]);
  const navigate = useNavigate();
  const [latlong, setLatlong] = useState({
    lat: -3.745,
    lng: -38.523,
  });
  const [locationOptions, setLocationOptions] = useState([]);
  const partnerSignUpMutation = useMutation({
    mutationKey: "PostPartner",
    mutationFn: partnerSignUp,
    onSuccess: (data) => {
      console.log(data?.data?.toString(), "signupdata");
      window.localStorage.setItem("userData", JSON.stringify(data?.data));
      navigate("/partner/documentsVerification");
      window.location.reload();
      toast.success("Successfully Created!");
    },
    onError: (e) => toast.error(e?.response?.data?.message),
    onSettled: (d, e) => console.log(d, e),
  });
  const getRegionsQuery = useQuery({
    queryKey: ["fetchRegions"],
    queryFn: getUAERegions,
  });
  const [data, setData] = useState({
    removalType: [],
    areaPreference: "region",
    location: "",
    radius: 0,
    companyName: "",
    businessType: "company",
    noOfEmployees: "0",
    email: "",
    telephone: "",
    addressLine1: "",
    regions: [],
    city: "",
    country: "",
    state: "",
    salutation: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });
  console.log(data, " LATLONG");
  const getRegionsPolygon = useQuery({
    queryKey: ["fetchRegionsPolygon", data.regions],
    queryFn: getPolygon,
  });
  const RegionData = getRegionsQuery?.data?.data;
  const RegionPolygonData = getRegionsPolygon?.data?.data;
  const fetchLocationsMutation = useMutation({
    mutationKey: "fetchLocation",
    mutationFn: getLocationSuggestions,
    onSuccess: (data) => {
      let arr = data?.data?.map((elem) => {
        return {
          value: elem?.address,
          label: elem?.address,
        };
      });
      setLocationOptions(arr);
    },
    onSettled: (d, e) => console.log(d, e),
  });
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
  });
  // const onUnmount = useCallback(function callback(map) {
  //     setMap(null);
  // }, []);
  // const [map, setMap] = useState(null);
  // const onLoad = useCallback(function callback(map) {
  //     // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //     const bounds = new window.google.maps.LatLngBounds(latlong);
  //     map.fitBounds(bounds);

  //     setMap(map);
  // }, []);

  useEffect(() => {
    getRegionsQuery.refetch();
  }, []);

  if (getRegionsQuery.isLoading || partnerSignUpMutation.isLoading) {
    return (
      <LoaderLayout>
        <Truck />
      </LoaderLayout>
    );
  }

  const handleDataChange = (key, value) => {
    setData({
      ...data,
      [key]: value,
    });
  };
  const onLocationChange = (e) => {
    fetchLocationsMutation.mutate(e);
  };

  const onLocationSelect = (val) => {
    setData({
      ...data,
      location: val,
    });
    fromAddress(val)
      .then(({ results }) => {
        const { lat, lng } = results[0].geometry.location;
        setLatlong({
          lat,
          lng,
        });
      })
      .catch(console.error);
  };

  const submit = () => {
    const isEmpty =
      !data.areaPreference ||
      !data.companyName ||
      !data.businessType ||
      !data.noOfEmployees ||
      !data.email ||
      !data.telephone ||
      !data.addressLine1 ||
      !data.city ||
      !data.state ||
      !data.salutation ||
      !data.firstName ||
      !data.lastName ||
      !data.password ||
      !data.confirmPassword;
    if (data?.areaPreference === "radius" && (!data.location || !data.radius)) {
      toast.error("You must specify location and radius!");
      return;
    } else if (data?.areaPreference === "region" && !data.regions.length) {
      toast.error("You must add at least 1 region!");
      return;
    }
    if (isEmpty) {
      toast.error("Fields can not be empty.");
      return;
    }
    if (data.password !== data.confirmPassword) {
      toast.error("Password Doesn't match!");
      return;
    }
    if (!/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/.test(data.email)) {
      toast.error("Invalid Email!");
      return;
    }
    if (!data?.telephone || !isValidPhoneNumber(data?.telephone.toString())) {
      toast.error("Invalid PhoneNumber!");
      return;
    }
    partnerSignUpMutation.mutate(data);
  };

  console.log(data, "Remove");

  return (
    <div className="flex items-center max-md:px-2 justify-center mx-auto">
      {/* <button >
                submit
            </button> */}
      <div className="max-md:w-full md:w-[70%]">
        <h2 className="lg:font-semibold text-heading text-center p-6 mb-4">
          Welcome
        </h2>
        <div className=" bg-[#C1E1EE] max-sm:w-full  max-md:w-full flex items-center flex-col flex-wrap justify-center rounded-md border-gray-200 border-2 p-3 w11/12 w-full mx-auto">
          <h2 className="text-black text-sub-head">Select removal types</h2>
          <div className="flex flex-col flex-wrap md:flex-row md:justify-center">
            <button
              onClick={() => {
                if (removalTypes.includes("local")) {
                  setRemovalTypes((prev) => {
                    const temp = prev.filter((elem) => elem !== "local");
                    handleDataChange("removalType", temp);
                    return temp;
                  });
                } else {
                  setRemovalTypes([...removalTypes, "local"]);
                  handleDataChange("removalType", [...removalTypes, "local"]);
                }
              }}
              className={`${removalTypes.includes("local") ? "bg-[#EE504C] text-white" : "bg-[#f0f0f0] text-black"} w-40 flex-wrap m-2 p-1 rounded shadow text-para py-2 active:text-red-blue`}
            >
              Local
            </button>
            <button
              onClick={() => {
                if (removalTypes.includes("international")) {
                  setRemovalTypes((prev) => {
                    const temp = prev.filter(
                      (elem) => elem !== "international",
                    );
                    handleDataChange("removalType", temp);
                    return temp;
                  });
                } else {
                  setRemovalTypes([...removalTypes, "international"]);
                  handleDataChange("removalType", [
                    ...removalTypes,
                    "international",
                  ]);
                }
              }}
              className={`${removalTypes.includes("international") ? "bg-[#EE504C] text-white" : "bg-[#f0f0f0]"}  w-40 flex-wrap m-2 p-1 rounded shadow py-2 text-para active:text-red-blue`}
            >
              International
            </button>
            <button
              onClick={() => {
                if (removalTypes.includes("commercial")) {
                  setRemovalTypes((prev) => {
                    const temp = prev.filter((elem) => elem !== "commercial");
                    handleDataChange("removalType", temp);
                    return temp;
                  });
                } else {
                  setRemovalTypes([...removalTypes, "commercial"]);
                  handleDataChange("removalType", [
                    ...removalTypes,
                    "commercial",
                  ]);
                }
              }}
              className={`${removalTypes.includes("commercial") ? "bg-[#EE504C] text-white" : "bg-[#f0f0f0]"}  w-40 flex-wrap m-2 p-1 rounded shadow text-para py-2 active:text-red-blue`}
            >
              Commercial
            </button>
          </div>
          <div>
            {/*
                        <h2 className="text-black text-sub-head text-center p-3">
                            Select areas
                        </h2>
                                        <div className=" bg-white rounded-md border-[#13C26580] border-[1.5px]">
                                            <div className="flex w-[255px] md:w-[480px] px-2 py-1">
                                                <input
                                                    onClick={() => handleDataChange("areaPreference", "radius")}
                                                    checked={data.areaPreference === "radius"}
                                                    type="radio"
                                                    name="areaPreference"
                                                />
                                                <p className="ml-2 text-para py-1">Set a radius</p>
                                            </div>
                                        </div>
                        <div className=" bg-white mt-2 rounded-md border-[#13C26580] border-[1.5px]">
                            <div className="flex w-[255px] md:w-[480px] px-2 py-1">
                                <input
                                    onClick={() => handleDataChange("areaPreference", "region")}
                                    checked={data.areaPreference === "region"}
                                    type="radio"
                                    name="areaPreference"
                                />
                                <p className="ml-2 text-para py-1">Set a region</p>
                            </div>
                        </div>
                            */}
          </div>
          {data.areaPreference === "radius" && (
            <>
              {" "}
              <div className="p-3">
                <div>
                  <h2 className="text-black text-sub-head text-center">
                    Provide your location and select a radius
                  </h2>
                  <h3 className="text-black font-extralight text-para text-center">
                    Select radius in Miles
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-4 mt-4">
                  <div>
                    <h3 className="text-black text-para">Your Location</h3>
                    <AutoComplete
                      style={{
                        width: 200,
                      }}
                      onSelect={onLocationSelect}
                      onSearch={onLocationChange}
                      options={locationOptions}
                      placeholder="input here"
                    />
                  </div>
                  <div>
                    <h3 className="text-black text-para">Radius</h3>
                    <input
                      type="number"
                      placeholder="5 miles"
                      className=" w-[6rem] md:w-[12rem] px-2 py-1 rounded-md border-[#13C26580] border-[1.5px]"
                      value={data.radius}
                      onChange={(e) =>
                        handleDataChange("radius", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="-ml-8">
                {isLoaded && data.areaPreference === "radius" ? (
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={latlong}
                    zoom={13}
                  >
                    {/* Child components, such as markers, info windows, etc. */}
                    <Circle
                      center={latlong}
                      radius={1609.34 * data.radius}
                      options={{
                        fillColor: "#2596be",
                        fillOpacity: 0.3,
                        strokeWeight: 2,
                        strokeColor: "#2596be",
                        clickable: false,
                        editable: true,
                        zIndex: 1,
                      }}
                      onCenterChanged={() => console.log("onCenterChanged")}
                      onRadiusChanged={() => console.log("onRadiusChanged")}
                    />
                    <Marker position={latlong} />
                  </GoogleMap>
                ) : (
                  <></>
                )}
              </div>
            </>
          )}
          {data.areaPreference === "region" && (
            <>
              <h2 className="  mt-4 text-sub-head">Select your areas</h2>
              <RegionAccordion
                setLatLng={setLatlong}
                RegionPolygonData={RegionPolygonData}
                fetchPolygon={getRegionsPolygon.refetch}
                areas={RegionData.filter((reg) => reg.country === "UAE")}
                name="UAE"
                setData={setData}
                data={data}
              />
              <RegionAccordion
                setLatLng={setLatlong}
                RegionPolygonData={RegionPolygonData}
                fetchPolygon={getRegionsPolygon.refetch}
                areas={RegionData.filter((reg) => reg.country === "Bahrain")}
                name="Bahrain"
                setData={setData}
                data={data}
              />
              <RegionAccordion
                setLatLng={setLatlong}
                RegionPolygonData={RegionPolygonData}
                fetchPolygon={getRegionsPolygon.refetch}
                areas={RegionData.filter((reg) => reg.country === "Oman")}
                name="Oman"
                setData={setData}
                data={data}
              />
              <RegionAccordion
                setLatLng={setLatlong}
                RegionPolygonData={RegionPolygonData}
                fetchPolygon={getRegionsPolygon.refetch}
                areas={RegionData.filter((reg) => reg.country === "Qatar")}
                name="Qatar"
                setData={setData}
                data={data}
              />
              <RegionAccordion
                setLatLng={setLatlong}
                RegionPolygonData={RegionPolygonData}
                fetchPolygon={getRegionsPolygon.refetch}
                areas={RegionData.filter((reg) => reg.country === "Kuwait")}
                name="Kuwait"
                setData={setData}
                data={data}
              />
              <RegionAccordion
                setLatLng={setLatlong}
                RegionPolygonData={RegionPolygonData}
                fetchPolygon={getRegionsPolygon.refetch}
                areas={RegionData.filter(
                  (reg) => reg.country === "Saudi Arabia",
                )}
                name="Saudi Arabia"
                setData={setData}
                data={data}
              />
              <RegionAccordion
                setLatLng={setLatlong}
                RegionPolygonData={RegionPolygonData}
                fetchPolygon={getRegionsPolygon.refetch}
                areas={RegionData.filter((reg) => reg.country === "UK")}
                name="UK"
                setData={setData}
                data={data}
              />
              <RegionAccordion
                setLatLng={setLatlong}
                RegionPolygonData={RegionPolygonData}
                fetchPolygon={getRegionsPolygon.refetch}
                areas={RegionData.filter((reg) => reg.country === "USA")}
                name="USA"
                setData={setData}
                data={data}
              />

              <div className=" mb-3 mt-5">
                {isLoaded && data.areaPreference === "region" ? (
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={latlong}
                    zoom={6}
                  >
                    {RegionPolygonData &&
                      RegionPolygonData?.map((reg) => {
                        return reg?.multiPolygon?.map((elem) => {
                          return (
                            <Polygon
                              path={elem}
                              options={{
                                fillColor: "#2596be",
                                fillOpacity: 0.1,
                                strokeColor: "#2596be",
                                strokeOpacity: 0.5,
                                strokeWeight: 1,
                              }}
                            />
                          );
                        });
                      })}
                    <Marker position={latlong} />
                  </GoogleMap>
                ) : (
                  <></>
                )}
              </div>
              <div className="md:w-[47%] mx-auto">
                <p className="text-gray-500">Selected Areas:</p>
                <div className="flex flex-wrap">
                  {data.regions.map((selectedCity) => {
                    return (
                      <div className="my-1 flex px-2 py-0 h-max items-center justify-between rounded-lg text-white me-2 bg-[#EE504C]">
                        <p className="m-0 p-0">{selectedCity.name}</p>
                        <span
                          onClick={() => {
                            let temp = data;
                            temp.regions.splice(
                              temp.regions.findIndex(
                                (region) => region.name === selectedCity.name,
                              ),
                              1,
                            );
                            setData({
                              ...data,
                              regions: temp.regions,
                            });
                          }}
                          className="ms-1 px-1 text-lg cursor-pointer"
                        >
                          x
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
          <div>
            <h2 className="text-[#black] text-sub-head text-center p-4">
              Company details
            </h2>
            <div>
              <input
                type="text"
                placeholder="Company name"
                className="w-[255px] md:w-[480px] text-para py-2 px-2 py-1 rounded-md border-[#13C26580] border-[1.5px] outline-[#13C265]"
                value={data.companyName}
                onChange={(e) =>
                  handleDataChange("companyName", e.target.value)
                }
              />
            </div>

            {/*
                                        <div className="mt-2">
                                            <h3 className="text-black text-para ">Business type</h3>
                                            <div className=" bg-white rounded-md border-[#13C26580] border-[1.5px] outline-[#13C265]">
                                                <div className="flex w-[255px] md:w-[480px] px-2 py-1">
                                                    <input
                                                        onClick={() => handleDataChange("businessType", "solo")}
                                                        checked={data.businessType === "solo"}
                                                        name="businessType"
                                                        type="radio"
                                                    />
                                                    <p className="ml-2 text-para py-1">Sole trader</p>
                                                </div>
                                            </div>
                                            <div className=" bg-white mt-2 rounded-md  border-[#13C26580] border-[1.5px] outline-[#13C265]">
                                                <div className="flex w-[255px] md:w-[480px] px-2 py-1 ">
                                                    <input
                                                        onClick={() => handleDataChange("businessType", "company")}
                                                        checked={data.businessType === "company"}
                                                        type="radio"
                                                        name="businessType"
                                                    />
                                                    <p className="ml-2 text-para py-1">Company</p>
                                                </div>
                                            </div>
                                        </div>
                            */}
            <div className="mt-2 mb-4">
              <h3 className="text-black text-para">Number of employees</h3>
              <input
                type="number"
                placeholder="Select"
                onChange={(e) =>
                  handleDataChange("noOfEmployees", e.target.value)
                }
                value={data.noOfEmployees}
                className="w-[255px] md:w-[480px] text-para px-2 py-2 rounded-md border-[#13C26580] border-[1.5px] outline-[#13C265]"
              />
            </div>
            <div>
              <h2 className=" text-black text-para">Email</h2>
              <input
                type="text"
                onChange={(e) => handleDataChange("email", e.target.value)}
                value={data.email}
                placeholder="example@gmail.com"
                className="w-[255px] md:w-[480px] text-para px-2 py-2 rounded-md border-[#13C26580] border-[1.5px] outline-[#13C265]"
              />
            </div>
            <div>
              <h2 className=" text-black mt-3 text-para">Telephone</h2>
              <PhoneInput
                placeholder="Enter phone number"
                value={data.telephone}
                onChange={(e) => handleDataChange("telephone", e)}
                className="w-[255px] md:w-[480px] px-2 py-2 text-para bg-white rounded-md border-[#13C26580] border-[1.5px] outline-[#13C265]"
              />
            </div>
            <div>
              <h2 className=" text-black mt-3 text-para">Address line 1</h2>
              <input
                onChange={(e) =>
                  handleDataChange("addressLine1", e.target.value)
                }
                value={data.addressLine1}
                type="text"
                placeholder="Address line 1"
                className="w-[255px] md:w-[480px] px-2 py-2 text-para rounded-md border-[#13C26580] border-[1.5px] outline-[#13C265]"
              />
            </div>
            <div>
              <h2 className="text-para text-black mt-3">Country</h2>
              <Select
                options={options}
                value={data.country}
                onChange={(e) => handleDataChange("country", e)}
                placeholder="Country"
                className="text-para"
              />
            </div>
            <div>
              <h2 className="text-para text-black mt-3">Town/City</h2>
              <input
                onChange={(e) => handleDataChange("city", e.target.value)}
                value={data.city}
                type="text"
                placeholder="Town/City"
                className="w-[255px] md:w-[480px] text-para px-2 py-2 rounded-md border-[#13C26580] border-[1.5px] outline-[#13C265]"
              />
            </div>
            <div>
              <h2 className=" text-black mt-3 text-para">State </h2>
              <input
                onChange={(e) => handleDataChange("state", e.target.value)}
                value={data.state}
                type="text"
                placeholder="Select a State"
                className="w-[255px] md:w-[480px] px-2 py-2 text-para rounded-md border-[#13C26580] border-[1.5px] outline-[#13C265]"
              />
            </div>
            <div>
              <h2 className="text-black text2xl text-center pt-6 text-sub-head">
                Contact person
              </h2>
              <div>
                <h2 className=" text-black text-para">Salutation</h2>
                <input
                  onChange={(e) =>
                    handleDataChange("salutation", e.target.value)
                  }
                  value={data.salutation}
                  type="text"
                  placeholder="Salutation"
                  className="w-[255px] md:w-[480px] px-2 py-2 text-para rounded-md border-[#13C26580] border-[1.5px] outline-[#13C265]"
                />
              </div>
              <div>
                <h2 className=" text-black mt-3 text-para">First name</h2>
                <input
                  onChange={(e) =>
                    handleDataChange("firstName", e.target.value)
                  }
                  value={data.firstName}
                  type="text"
                  placeholder="First name"
                  className="w-[255px] md:w-[480px] px-2 py-2 text-para rounded-md border-[#13C26580] border-[1.5px] outline-[#13C265]"
                />
              </div>
              <div>
                <h2 className=" text-black mt-3 text-para">Last name</h2>
                <input
                  onChange={(e) => handleDataChange("lastName", e.target.value)}
                  value={data.lastName}
                  type="text"
                  placeholder="Last name"
                  className="w-[255px] md:w-[480px] px-2 py-2 text-para rounded-md border-[#13C26580] border-[1.5px] mb-4 outline-[#13C265]"
                />
              </div>
            </div>
            <div>
              <div>
                <h2 className=" text-black text-para mt-3">
                  Choose your password
                </h2>
                <input
                  onChange={(e) => handleDataChange("password", e.target.value)}
                  type="password"
                  className="w-[255px] md:w-[480px] px-2 py-2 text-para rounded-md border-[#13C26580] border-[1.5px] outline-[#00DD68]"
                />
              </div>
              <div>
                <h2 className=" text-black text-para mt-3">
                  Confirm your password
                </h2>
                <input
                  onChange={(e) =>
                    handleDataChange("confirmPassword", e.target.value)
                  }
                  type="password"
                  className="w-[255px] md:w-[480px] px-2 py-2 rounded-md border-[#13C26580] border-[1.5px] mb-4 text-para  outline-[#00DD68]"
                />
              </div>
            </div>
            <div className="w-full justify-center flex ">
              <button
                className="w-[200px] md:w-[480px] text-white p-2 bg-[#EE504C] mt-4 lg:mb-4 rounded-md text-sub-head"
                onClick={submit}
              >
                Create account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
