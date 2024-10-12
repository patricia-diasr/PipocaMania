import styles from "./NotFound.module.css";

import { Link } from "react-router-dom";
import Modal from "../components/Modal";

function NotFound() {
    return (
        <Modal>
            <div className={styles.notfound}>
                <h1>Ops... Essa página ainda não foi implementada</h1>
                <Link to="home">Voltar</Link>
            </div>
        </Modal>
    );
}

export default NotFound;
