import "./Header.css";

import { BsBell } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";

function Header() {
    return (
        <header>
            <img src="/logo.png" alt="Logo Pipoca Mania"  className="logo"/>

            <nav>
                <ul>
                    <li>
                        <a href="#">
                            <BsBell className="icon" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <BsPersonCircle className="icon" />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
