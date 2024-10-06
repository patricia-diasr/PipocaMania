import styles from "./MovieList.module.css";

function MovieList({ title, list }) {
    return (
        <div className={styles.movieList}>
            <div className={styles.line}>
                <h3>{title}</h3>
            </div>

            <div className={styles.movies}>
                {list.map((movie, index) => (
                    <div
                        key={index}
                        className={styles.movie}
                        style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/w200${movie.poster_path})`,
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default MovieList;
