import axios from "axios";
const LOCALHOST_URL = "http://localhost:4000"

const API_URL_NEW = "https://realestatebackend-woad.vercel.app";
export function getLocationSuggestions(data) {
  console.log("Send the request", data);
  return axios.post(`${API_URL_NEW}/property/location-suggestions`, {
    value: data,
  });
}

export function partnerSignUp(data){
    console.log("api",data,"api")
    const urlStr = `${LOCALHOST_URL}/auth/partnerSignUp`
    return axios.post(urlStr,data)
}
export function postProofs(data){
    const token = window.localStorage.getItem("token")
    console.log("api",data,"api")
    const urlStr = `${LOCALHOST_URL}/partner/insertProof`
    return axios.post(urlStr,data,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
}
