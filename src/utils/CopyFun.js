import { toast } from "react-toastify";

export const copyToClipboard = (text) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      toast.success("Copied !");
    })
    .catch(() => {
      toast.error("Ops! error copying the text!");
    });
};
