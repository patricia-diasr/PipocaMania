import "./Modal.css";
import { useState } from "react";

function Modal() {
    const [show, setShow] = useState(true);

    const toggleModal = () => {
        setShow(!show);
    };

    return (
        <div className={`overlay ${show ? "show" : ""}`}>
            <div className={`modal ${show ? "show" : ""}`}>
            </div>
        </div>
    );
}

export default Modal;
