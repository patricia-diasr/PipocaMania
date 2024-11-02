import React from "react";
import { NavLink } from "react-router-dom";
import { BsBell, BsPersonCircle } from "react-icons/bs";
import styles from "./Header.module.css";

function Header() {
    return (
        <header>
            <img src="/logo.png" alt="Logo Pipoca Mania" className={styles.logo} />
        </header>
    );
}

export default Header;
