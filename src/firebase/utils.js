import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebaseConfig.js";

export const uploadImageAndGetURL = async (path, file) => {
  const imagesRef = ref(storage, `files/proofs/${path}`);
  await uploadBytes(imagesRef, file);
  console.log("Uploaded an image");
  const url = await getDownloadURL(imagesRef);
  return url;
};
