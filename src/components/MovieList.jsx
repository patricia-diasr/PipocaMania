import styles from "./MovieList.module.css";

function MovieList() {
    return (
        <div className={styles.movieList}>
            <div className={styles.line}>
                <h3>Em Cartaz</h3>
            </div>

            <div className={styles.movies}>
                <div className={styles.movie}></div>
                <div className={styles.movie}></div>
                <div className={styles.movie}></div>
                <div className={styles.movie}></div>
                <div className={styles.movie}></div>
                <div className={styles.movie}></div>
                <div className={styles.movie}></div>
                <div className={styles.movie}></div>
            </div>
        </div>
    );
}

export default MovieList;
