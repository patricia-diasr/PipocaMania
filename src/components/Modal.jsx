import styles from "./Modal.module.css";

function Modal({ children, show, onClose }) {
    return (
        <div className={`${styles.overlay} ${show ? styles.show : ""}`} onClick={onClose}>
            <div className={`${styles.modal} ${show ? styles.show : ""}`} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Modal;
