import Poster from "../images/poster-filme.jpg";
import styles from "./Banner.module.css";

function Banner() {
    return (
        <div className={styles.banner}>
            <h2>Star Wars: Ep VIII</h2>
            <img src={Poster} alt="Poster filme" />
        </div>
    );
}

export default Banner;
