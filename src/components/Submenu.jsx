import styles from "./Submenu.module.css";

import { NavLink } from "react-router-dom";

function Submenu() {
    return (
        <nav className={styles.submenu}>
            <div className={styles.items}>
                <NavLink to="/movie/detail" className={({ isActive }) => (isActive ? styles.active : "")}>
                    <span>Sobre o filme</span>
                </NavLink>

                <NavLink to="/movie/checkout" className={({ isActive }) => (isActive ? styles.active : "")}>
                    <span>Assistir</span>
                </NavLink>
            </div>
        </nav>
    );
}

export default Submenu;
