import React, { useState } from "react";
import { setKey, setDefaults, fromAddress } from "react-geocode";
import { AutoComplete } from "antd";
import { getLocationSuggestions } from "../../../../../apiFunctions/partner";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useQuery, useMutation } from "react-query";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";

const containerStyle = {
  width: "400px",
  height: "400px",
};

setKey("AIzaSyBmlfCX9N5NAKdGidMbSxMXkc4CNHcT6rQ");
export default function FreeTrialForm() {
  const [latlong, setLatlong] = useState({
    lat: -3.745,
    lng: -38.523,
  });
  const [locationOptions, setLocationOptions] = useState([]);
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
  const [data, setData] = useState({
    areaPreference: "",
    location: null,
    radius: null,
    companyName: null,
    businessType: "",
    noOfEmployees: null,
    email: "",
    telephone: "",
    addressLine1: "",
    city: "",
    state: "",
    salutation: "",
    firstName: "",
    lastName: "",
  });

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBmlfCX9N5NAKdGidMbSxMXkc4CNHcT6rQ",
  });

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(latlong);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const handleDataChange = (key, value) => {
    setData({
      ...data,
      [key]: value,
    });
  };
  const onLocationChange = (e) => {
    fetchLocationsMutation.mutate(e);
  };

  console.log(data);

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
    const isEmpty = !data.areaPreference || !data.location || !data.radius || !data.companyName || !data.businessType || !data.noOfEmployees || !data.email || !data.telephone || !data.addressLine1 || !data.city || !data.state || !data.salutation || !data.firstName || !data.lastName;

        if (isEmpty){
            toast.error("Fields can not be empty.")
            return
        }
    if (!/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/.test(data.email)) {
      toast.error("Invalid Email!");
      return;
    }
    if (!data?.telephone || !isValidPhoneNumber(data?.telephone.toString())) {
      toast.error("Invalid PhoneNumber!");
      return;
    }
    }



  return (
    <div className="flex items-center justify-center mx-auto">
      <button onClick={submit}>
        submit
      </button>
      <div>
        <h2 className="lg:font-semibold text-3xl text-center p-6 mb-4">
          Welcome to free trial
        </h2>
        <div className=" bg-[#E8FFF3] flex items-center flex-col flex-wrap justify-center rounded-md border-gray-200 border-2 p-3 w-11/12 lg:w-[1140px] mx-auto">
          <h2 className="text-[#13C265] text-2xl">Select removal types</h2>
          <div className="flex flex-col flex-wrap md:flex-row">
            <button className=" bg-[#f0f0f0] w-40 flex-wrap m-2 p-1 rounded shadow text-md sm:text-base lg:text-lg active:text-red-blue">
              Local
            </button>
            <button className=" bg-[#f0f0f0] w-40 flex-wrap m-2 p-1 rounded shadow text-md sm:text-base lg:text-lg active:text-red-blue">
              International
            </button>
            <button className=" bg-[#f0f0f0] w-40 flex-wrap m-2 p-1 rounded shadow text-md sm:text-base lg:text-lg active:text-red-blue">
              Storage
            </button>
          </div>
          <div>
            <h2 className="text-[#13C265] text-2xl text-center p-3">
              Set a radius or select areas
            </h2>
            <div className=" bg-white rounded-md border-[#13C26580] border-[1.5px]">
              <div className="flex w-[255px] md:w-[516px] px-2 py-1">
                <input
                  onClick={() => handleDataChange("areaPreference", "radius")}
                  checked={data.areaPreference === "radius"}
                  type="radio"
                  name="areaPreference"
                />
                <p className="ml-2">Set a radius</p>
              </div>
            </div>
            <div className=" bg-white mt-2 rounded-md border-[#13C26580] border-[1.5px]">
              <div className="flex w-[255px] md:w-[516px] px-2 py-1">
                <input
                  onClick={() => handleDataChange("areaPreference", "region")}
                  checked={data.areaPreference === "region"}
                  type="radio"
                  name="areaPreference"
                />
                <p className="ml-2">Set a region</p>
              </div>
            </div>
          </div>
          {data.areaPreference === "radius" && (
            <>
              {" "}
              <div className="p-3">
                <div>
                  <h2 className="text-[#13C265] text-2xl text-center">
                    Provide your location and select a radius
                  </h2>
                  <h3 className="text-gray-400 font-extralight text-xl">
                    Maximum of 20 miles during free trial
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-4 mt-4">
                  <div>
                    <h3 className="text-[#13C265]">Your Location</h3>
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
                    <h3 className="text-[#13C265]">Radius</h3>
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
              <div>
                {isLoaded ? (
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={latlong}
                    zoom={3}
                  >
                    {/* Child components, such as markers, info windows, etc. */}
                    <Marker position={latlong}  />
                  </GoogleMap>
                ) : (
                  <></>
                )}
              </div>
            </>
          )}
          <div>
            <h2 className="text-[#13C265] text-2xl text-center p-4">
              Company details
            </h2>
            <div>
              <input
                type="text"
                placeholder="Company name"
                className="w-[255px] md:w-[516px] px-2 py-1 rounded-md border-[#13C26580] border-[1.5px]"
                value={data.companyName}
                onChange={(e) =>
                  handleDataChange("companyName", e.target.value)
                }
              />
            </div>
            <div className="mt-2">
              <h3 className="text-[#13C265]">Business type</h3>
              <div className=" bg-white rounded-md border-[#13C26580] border-[1.5px]">
                <div className="flex w-[255px] md:w-[516px] px-2 py-1">
                  <input
                    onClick={() => handleDataChange("businessType", "solo")}
                    checked={data.businessType === "solo"}
                    name="businessType"
                    type="radio"
                  />
                  <p className="ml-2">Sole trader</p>
                </div>
              </div>
              <div className=" bg-white mt-2 rounded-md  border-[#13C26580] border-[1.5px]">
                <div className="flex w-[255px] md:w-[516px] px-2 py-1 ">
                  <input
                    onClick={() => handleDataChange("businessType", "company")}
                    checked={data.businessType === "company"}
                    type="radio"
                    name="businessType"
                  />
                  <p className="ml-2">Company</p>
                </div>
              </div>
            </div>
            <div className="mt-2 mb-4">
              <h3 className="text-[#13C265]">Number of employees</h3>
              <input
                type="number"
                placeholder="Select"
                onChange={(e) =>
                  handleDataChange("noOfEmployees", e.target.value)
                }
                value={data.noOfEmployees}
                className="w-[255px] md:w-[516px] px-2 py-1 rounded-md border-[#13C26580] border-[1.5px]"
              />
            </div>
            <div>
              <h2 className=" text-[#13C265]">Email</h2>
              <input
                type="text"
                onChange={(e) => handleDataChange("email", e.target.value)}
                value={data.email}
                placeholder="example@gmail.com"
                className="w-[255px] md:w-[516px] px-2 py-1 rounded-md border-[#13C26580] border-[1.5px]"
              />
            </div>
            <div>
              <h2 className=" text-[#13C265] mt-3">Telephone</h2>
                <PhoneInput
                  placeholder="Enter phone number"
                  value={data.telephone}
                  onChange={(e) => handleDataChange("telephone", e)}
                className="w-[255px] md:w-[516px] px-2 py-1 rounded-md border-[#13C26580] border-[1.5px]"
                />
            </div>
            <div>
              <h2 className=" text-[#13C265] mt-3">Address line 1</h2>
              <input
                onChange={(e) =>
                  handleDataChange("addressLine1", e.target.value)
                }
                value={data.addressLine1}
                type="text"
                placeholder="Address line 1"
                className="w-[255px] md:w-[516px] px-2 py-1 rounded-md border-[#13C26580] border-[1.5px]"
              />
            </div>
            <div>
              <h2 className=" text-[#13C265] mt-3">Town/City</h2>
              <input
                onChange={(e) => handleDataChange("city", e.target.value)}
                value={data.city}
                type="text"
                placeholder="Town/City"
                className="w-[255px] md:w-[516px] px-2 py-1 rounded-md border-[#13C26580] border-[1.5px]"
              />
            </div>
            <div>
              <h2 className=" text-[#13C265] mt-3">State </h2>
              <input
                onChange={(e) => handleDataChange("state", e.target.value)}
                value={data.state}
                type="text"
                placeholder="Select a State"
                className="w-[255px] md:w-[516px] px-2 py-1 rounded-md border-[#13C26580] border-[1.5px]"
              />
            </div>
            <div>
              <h2 className="text-[#13C265] text-2xl text-center pt-6">
                Contact person
              </h2>
              <div>
                <h2 className=" text-[#13C265]">Salutation</h2>
                <input
                  onChange={(e) =>
                    handleDataChange("salutation", e.target.value)
                  }
                  value={data.salutation}
                  type="text"
                  placeholder="Salutation"
                  className="w-[255px] md:w-[516px] px-2 py-1 rounded-md border-[#13C26580] border-[1.5px]"
                />
              </div>
              <div>
                <h2 className=" text-[#13C265] mt-3">First name</h2>
                <input
                  onChange={(e) =>
                    handleDataChange("firstName", e.target.value)
                  }
                  value={data.firstName}
                  type="text"
                  placeholder="First name"
                  className="w-[255px] md:w-[516px] px-2 py-1 rounded-md border-[#13C26580] border-[1.5px]"
                />
              </div>
              <div>
                <h2 className=" text-[#13C265] mt-3">Last name</h2>
                <input
                  onChange={(e) => handleDataChange("lastName", e.target.value)}
                  value={data.lastName}
                  type="text"
                  placeholder="Last name"
                  className="w-[255px] md:w-[516px] px-2 py-1 rounded-md border-[#13C26580] border-[1.5px] mb-4"
                />
              </div>
            </div>
            <button className='w-[255px] md:w-[516px] text-white p-2 bg-[#00DD68] mt-4 rounded-md'>Create account</button>

          </div>
        </div>
      </div>
    </div>
  );
}
