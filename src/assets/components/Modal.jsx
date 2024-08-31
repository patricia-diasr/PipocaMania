import "./Modal.css";
import { useState } from "react";

function Modal({ children }) {
    const [show, setShow] = useState(true);

    const toggleModal = () => {
        setShow(!show);
    };

    return (
        <div className={`overlay ${show ? "show" : ""}`} onClick={toggleModal}>
            <div className={`modal ${show ? "show" : ""}`} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Modal;
