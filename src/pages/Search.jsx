import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useSearchMovies from "../hooks/useSearchMovies";
import styles from "./Search.module.css";

function Search() {
    const [query, setQuery] = useState("");
    const { movies, error, loading } = useSearchMovies(query);

    const navigate = useNavigate();

    const handleMovieClick = (movieId) => {
        navigate(`/movie/${movieId}`);
    };

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        if (query.trim() === "") return;
    };

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>Erro: {error}</div>;
    }

    return (
        <div className={styles.search}>
            <section>
                <h1>Buscar</h1>
                <div className={styles.searchInput}>
                    <button className={styles.searchButton} onClick={handleSearch}>
                        <BsSearch className={styles.icon} />
                    </button>
                    <input type="text" placeholder="Pesquise um filme" value={query} onChange={handleInputChange} />
                </div>
                <div className={styles.movies}>
                    {movies.map((movie) => (
                        <div
                            key={movie.id}
                            className={styles.movie}
                            style={{
                                backgroundImage: `url(https://image.tmdb.org/t/p/w200${movie.poster_path})`,
                            }}
                            onClick={() => handleMovieClick(movie.id)}
                        ></div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Search;
