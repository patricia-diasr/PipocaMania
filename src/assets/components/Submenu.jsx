import "./Submenu.css";

function Submenu() {
    return (
        <nav className="submenu">
            <div className="items">
                <a href="#" className="active">
                    <span>Sobre o filme</span>
                </a>
                <a href="#">
                    <span>Assistir</span>
                </a>
            </div>
        </nav>
    );
}

export default Submenu;
