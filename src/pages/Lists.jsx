import MovieList from "../components/MovieList";
import useMovieLists from "../hooks/useMovieLists";
import styles from "./Lists.module.css";

function Lists() {
    const user = JSON.parse(localStorage.getItem("user")).id;
    const { watchlist, myReviews, error, loading } = useMovieLists(user);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>Erro: {error}</div>;
    }

    if (!watchlist || !myReviews) {
        return <div>Listas não encontradas.</div>;
    }

    return (
        <div className={styles.lists}>
            <section>
                <h1>Minhas Listas</h1>
                {myReviews.length > 0 && <MovieList list={myReviews} title="Minhas avaliaçõoes" />}
                {watchlist.length > 0 && <MovieList list={watchlist} title="Quero assistir" />}
            </section>
        </div>
    );
}

export default Lists;
