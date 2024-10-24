import React from "react";
import { NavLink } from "react-router-dom";
import { BsBookmarkFill, BsFillTicketPerforatedFill, BsHouseFill, BsSearch, BsCameraReelsFill } from "react-icons/bs";

import styles from "./Menu.module.css";

function Menu() {
    const userRole = JSON.parse(localStorage.getItem("user")).role;

    return (
        <nav className={styles.menu}>
            <ul>
                {userRole === "client" && (
                    <>
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
                    </>
                )}

                {userRole === "admin" && (
                    <>
                        <li>
                            <NavLink to="/search" className={({ isActive }) => (isActive ? "active" : "")}>
                                <span>Buscar</span>
                                <BsSearch className={styles.icon} />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/check-ticket" className={({ isActive }) => (isActive ? "active" : "")}>
                                <span>Ingressos</span>
                                <BsFillTicketPerforatedFill className={styles.icon} />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/screenings" className={({ isActive }) => (isActive ? "active" : "")}>
                                <span>Sessões</span>
                                <BsCameraReelsFill className={styles.icon} />
                            </NavLink>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Menu;
