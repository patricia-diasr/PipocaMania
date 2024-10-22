import styles from "./Search.module.css";
import { BsSearch } from "react-icons/bs";

function Search() {
    return (
        <div className={styles.search}>
            <section>
                <h1>Buscar</h1>
                <div className={styles.searchInput}>
                    <button className={styles.searchButton}>
                        <BsSearch className={styles.icon} />
                    </button>
                    <input type="text" placeholder="Pesquise um filme" />
                </div>
                <div className={styles.movies}>
                    <div
                        className={styles.movie}
                        style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/w200/hGTxHEDQBa6AAuGWDrTpbJjEO0w.jpg)`,
                        }}
                    ></div>
                    <div
                        className={styles.movie}
                        style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/w200/hGTxHEDQBa6AAuGWDrTpbJjEO0w.jpg)`,
                        }}
                    ></div>
                    <div
                        className={styles.movie}
                        style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/w200/hGTxHEDQBa6AAuGWDrTpbJjEO0w.jpg)`,
                        }}
                    ></div>
                    <div
                        className={styles.movie}
                        style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/w200/hGTxHEDQBa6AAuGWDrTpbJjEO0w.jpg)`,
                        }}
                    ></div>
                                        <div
                        className={styles.movie}
                        style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/w200/hGTxHEDQBa6AAuGWDrTpbJjEO0w.jpg)`,
                        }}
                    ></div>
                    <div
                        className={styles.movie}
                        style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/w200/hGTxHEDQBa6AAuGWDrTpbJjEO0w.jpg)`,
                        }}
                    ></div>
                    <div
                        className={styles.movie}
                        style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/w200/hGTxHEDQBa6AAuGWDrTpbJjEO0w.jpg)`,
                        }}
                    ></div>
                                        <div
                        className={styles.movie}
                        style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/w200/hGTxHEDQBa6AAuGWDrTpbJjEO0w.jpg)`,
                        }}
                    ></div>
                    <div
                        className={styles.movie}
                        style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/w200/hGTxHEDQBa6AAuGWDrTpbJjEO0w.jpg)`,
                        }}
                    ></div>
                    <div
                        className={styles.movie}
                        style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/w200/hGTxHEDQBa6AAuGWDrTpbJjEO0w.jpg)`,
                        }}
                    ></div>
                </div>
            </section>
        </div>
    );
}

export default Search;
