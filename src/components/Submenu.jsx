import { useState } from "react";
import styles from "./Submenu.module.css";

function Submenu({ setActivePage }) {
    const [activeLink, setActiveLink] = useState("detail"); 

    const handleClick = (page) => {
        setActivePage(page);
        setActiveLink(page);
    };

    return (
        <nav className={styles.submenu}>
            <div className={styles.items}>
                <a
                    onClick={() => handleClick("detail")}
                    className={`${styles.button} ${activeLink === "detail" ? styles.active : ""}`}
                >
                    <span>Sobre o filme</span>
                </a>

                <a
                    onClick={() => handleClick("checkout")}
                    className={`${styles.button} ${activeLink === "checkout" ? styles.active : ""}`}
                >
                    <span>Assistir</span>
                </a>
            </div>
        </nav>
    );
}

export default Submenu;
