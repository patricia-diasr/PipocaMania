import styles from "./Submenu.module.css";

import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

function Submenu() {
    const { movieId } = useParams();

    return (
        <nav className={styles.submenu}>
            <div className={styles.items}>
                <NavLink to={`/movie/${movieId}/detail`} className={({ isActive }) => (isActive ? styles.active : "")}>
                    <span>Sobre o filme</span>
                </NavLink>

                <NavLink
                    to={`/movie/${movieId}/checkout`}
                    className={({ isActive }) => (isActive ? styles.active : "")}
                >
                    <span>Assistir</span>
                </NavLink>
            </div>
        </nav>
    );
}

export default Submenu;
