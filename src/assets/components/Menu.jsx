import { BsBookmarkFill } from "react-icons/bs";
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import { BsHouseFill } from "react-icons/bs";

import "./Menu.css";

function Menu() {
    return (
        <nav className="menu">
            <ul>
                <li>
                    <a href="#">
                        <span>Home</span>
                        <BsHouseFill className="icon" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>Ingressos</span>
                        <BsFillTicketPerforatedFill className="icon" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>Minhas Listas</span>
                        <BsBookmarkFill className="icon" />
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
