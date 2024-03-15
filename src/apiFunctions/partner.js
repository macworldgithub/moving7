import axios from "axios";
const LOCALHOST_URL = "http://localhost:4000"
const API_URL_NEW = "https://realestatebackend-woad.vercel.app";
const MOVING24_URL = "https://moving24-backend-beige.vercel.app";




export function getLocationSuggestions(data) {
    console.log("Send the request", data);
    return axios.post(`${API_URL_NEW}/property/location-suggestions`, {
        value: data,
    });
}

export function partnerSignUp(data) {
    console.log("api", data, "api")
    const urlStr = `${MOVING24_URL}/auth/partnerSignUp`
    return axios.post(urlStr, data)
}
export function postProofs(data) {
    const userData = JSON.parse(window.localStorage.getItem("userData"))

    console.log("token", userData.token)
    console.log("api", data, "api")
    const urlStr = `${MOVING24_URL}/partner/insertProof`
    return axios.post(urlStr, data, {
        headers: {
            Authorization: `Bearer ${userData.token}`
        }
    })
}

export function requestOTP(email) {
    console.log("Send the request OTP", email);
    return axios.post(`${MOVING24_URL}/auth/sendVerificationCode`, {
        email
    });
}
export function verifyOTP(data) {
    return axios.post(`${MOVING24_URL}/auth/verifyCode`, {
        email: data.email,
        code: data.code
    });
}
export function quoteRequest(data) {

    const userData = window.localStorage.getItem("userData")
    const json = JSON.parse(userData)
    console.log(json, "dataaaaaaaaa")
    return axios.post(`${MOVING24_URL}/users/quoteRequest`, data, {
        headers: {
            Authorization: `Bearer ${json?.token}`
        }
    });
}

export function partnerSignIn(data) {
    console.log("signin", data)
    const urlStr = `${MOVING24_URL}/auth/partnerLogin`
    return axios.post(urlStr, data)
}

export function fetchOnePartner({ queryKey }) {
    const id = queryKey[1]
    return axios.get(`${MOVING24_URL}/partner/getOnePartner`, {
        params: {
            id
        }
    })
}

export function updatePartnerDetails(data) {
    const userData = window.localStorage.getItem("userData")
    const json = JSON.parse(userData)
    console.log(data, "going")
    return axios.put(`${MOVING24_URL}/partner/updatePartnerDetails`, data, {
        headers: {
            Authorization: `Bearer ${json?.token}`
        }
    })
}

export function getUAERegions() {
    return axios.get(`${MOVING24_URL}/regions/allRegions`);
}

export function getPolygon({ queryKey }) {

    let names = queryKey[1]
    names = names.map((elem) => {
        return elem.name
    })
    console.log(names, "NAMESSSSSSSSSS")
    return axios.post(`${MOVING24_URL}/regions/fetchPolygon`, {
        names
    });
}


export function sendEmailToPartners(data) {
    const userData = window.localStorage.getItem("userData")
    const json = JSON.parse(userData)
    console.log(data, "going")
    return axios.post(`${MOVING24_URL}/quotes/sendToPartners`, data, {
        headers: {
            Authorization: `Bearer ${json?.token}`
        }
    })
}

export function getPartnerSentQuotes(data) {
    const userData = window.localStorage.getItem("userData")
    const json = JSON.parse(userData)
    console.log(data, "going")
    return axios.get(`${MOVING24_URL}/partner/getrecentpartnerreqs`, {
        params: {
            email: json?.email
        }
    }, {
        headers: {
            Authorization: `Bearer ${json?.token}`
        }
    })
}

export function getPartnerOverview({ queryKey }) {
    const data = queryKey[1]
    console.log(data, "going")
    return axios.get(`${MOVING24_URL}/partner/getPartnerOverview`, {
        params: {
            id: data
        }
    })
}



export function getPartnerQuotes({ queryKey }) {
    const data = queryKey[1]
    console.log(data, "going")
    return axios.get(`${MOVING24_URL}/partner/getpartnerquotes`, {
        params: data
    })
}


export function updatePassword(data) {
    const userData = window.localStorage.getItem("userData")
    const json = JSON.parse(userData)
    console.log(data, "going")
    return axios.put(`${MOVING24_URL}/partner/updatepartnerpassword`, data, {
        headers: {
            Authorization: `Bearer ${json?.token}`
        }
    })
}


export function getPartnerByEmails({ queryKey }) {
    const emails = queryKey[1]
    console.log(emails, "going")
    return axios.post(`${MOVING24_URL}/partner/getManyPartnersByEmail`, {
        emails
    })
}



export function getContactManagerDetails() {
    return axios.get(`${MOVING24_URL}/users/getContactManagerDetails`, {
        params: {
            id: "65eff84f343e41339d19ed0c"
        }
    })
}


