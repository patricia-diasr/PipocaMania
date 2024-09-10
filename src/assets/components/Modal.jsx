import styles from "./Modal.module.css";
import { useState } from "react";

function Modal({ children }) {
    const [show, setShow] = useState(true);

    const toggleModal = () => {
        setShow(!show);
    };

    return (
        <div className={`${styles.overlay} ${show ? styles.show : ""}`} onClick={toggleModal}>
            <div className={`${styles.modal} ${show ? styles.show : ""}`} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Modal;
