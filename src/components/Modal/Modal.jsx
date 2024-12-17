import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import "./modal.css";

const MyModal = ({ children, styleClasses = "" }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("DIV");
    elRef.current.classList.add("modal-container");
    if (styleClasses) {
      elRef.current.classList.add(styleClasses);
    }
  }

  useEffect(() => {
    const modalNode = document.getElementById("modal");
    modalNode.appendChild(elRef.current);

    return () => {
      modalNode.removeChild(elRef.current);
    };
  }, []);

  return createPortal(
    <div className={`w-full h-full flex justify-center items-center `}>
      {children}
    </div>,
    elRef.current,
  );
};

export default MyModal;
