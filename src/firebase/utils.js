import { ref, uploadBytes, getDownloadURL,uploadString } from "firebase/storage";
import { storage } from "./firebaseConfig.js";

export const uploadImageAndGetURL = async (path, file) => {
    const imagesRef = ref(storage, `files/proofs/${path}`);
    await uploadBytes(imagesRef, file);
    console.log("Uploaded an image");
    const url = await getDownloadURL(imagesRef);
    return url;
};

export const uploadImageDataStringAndGetURL = async (path, str) => {
    const imagesRef = ref(storage, `files/partnerImges/${path}`);
    await uploadString(imagesRef, str, 'data_url')
    return getDownloadURL(imagesRef);
};
