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

export function requestOTP(email) {
  console.log("Send the request OTP", email);
  return axios.post(`${LOCALHOST_URL}/auth/sendVerificationCode`, {
            email
  });
}
export function verifyOTP(data) {
  return axios.post(`${LOCALHOST_URL}/auth/verifyCode`, {
      email: data.email,
      code:data.code
  });
}
export function quoteRequest(data) {

    const userData = window.localStorage.getItem("userData")
    const json = JSON.parse(userData)
    console.log(json,"dataaaaaaaaa")
  return axios.post(`${LOCALHOST_URL}/users/quoteRequest`,data, {
        headers:{
            Authorization:`Bearer ${json?.token}`
        }
    } );
}
