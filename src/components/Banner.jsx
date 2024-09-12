import styles from "./Banner.module.css";

function Banner() {
    return (
        <div className={styles.banner}>
            <img src="https://image.tmdb.org/t/p/original/stKGOm8UyhuLPR9sZLjs5AkmncA.jpg" alt="Poster filme" />
        </div>
    );
}

export default Banner;
