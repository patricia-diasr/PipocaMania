import React from "react";
import { NavLink } from "react-router-dom";
import { BsBookmarkFill, BsFillTicketPerforatedFill, BsHouseFill } from "react-icons/bs";

import styles from "./Menu.module.css";

function Menu() {
    return (
        <nav className={styles.menu}>
            <ul>
                <li>
                    <NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "")}>
                        <span>Home</span>
                        <BsHouseFill className={styles.icon} />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tickets" className={({ isActive }) => (isActive ? "active" : "")}>
                        <span>Ingressos</span>
                        <BsFillTicketPerforatedFill className={styles.icon} />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/lists" className={({ isActive }) => (isActive ? "active" : "")}>
                        <span>Minhas Listas</span>
                        <BsBookmarkFill className={styles.icon} />
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
