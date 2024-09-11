import React from "react";
import { NavLink } from "react-router-dom";
import { BsBell, BsPersonCircle } from "react-icons/bs";
import styles from "./Header.module.css";

function Header() {
    return (
        <header>
            <img src="/logo.png" alt="Logo Pipoca Mania" className={styles.logo} />

            <nav>
                <ul>
                    <li>
                        <NavLink to="/notifications" className={({ isActive }) => (isActive ? "active" : "")}>
                            <BsBell className={styles.icon} />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>
                            <BsPersonCircle className={styles.icon} />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
