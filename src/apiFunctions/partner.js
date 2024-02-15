import axios from "axios";

const API_URL_NEW = "https://realestatebackend-woad.vercel.app";
export function getLocationSuggestions(data) {
  console.log("Send the request", data);
  return axios.post(`${API_URL_NEW}/property/location-suggestions`, {
    value:data
  });
}
