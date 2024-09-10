import styles from "./Submenu.module.css";

function Submenu() {
    return (
        <nav className={styles.submenu}>
            <div className={styles.items}>
                <a href="#" className={styles.active}>
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
