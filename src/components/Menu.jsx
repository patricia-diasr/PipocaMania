import { BsBookmarkFill } from "react-icons/bs";
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import { BsHouseFill } from "react-icons/bs";

import styles from "./Menu.module.css";

function Menu() {
    return (
        <nav className={styles.menu}>
            <ul>
                <li>
                    <a href="#">
                        <span>Home</span>
                        <BsHouseFill className={styles.icon} />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>Ingressos</span>
                        <BsFillTicketPerforatedFill className={styles.icon} />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>Minhas Listas</span>
                        <BsBookmarkFill className={styles.icon} />
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
