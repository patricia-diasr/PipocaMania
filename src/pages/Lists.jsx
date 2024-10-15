import MovieList from "../components/MovieList";
import useMovieLists from "../hooks/useMovieLists";
import styles from "./Lists.module.css";

function Lists() {
    const user = 1;
    const { watchlist, remindMeWhenReleased, myReviews, error, loading } = useMovieLists(user);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>Erro: {error}</div>;
    }

    if (!watchlist || !remindMeWhenReleased || !myReviews) {
        return <div>Listas não encontradas.</div>;
    }

    return (
        <div className={styles.lists}>
            <section>
                <h1>Minhas Listas</h1>
                <MovieList list={myReviews} title="Minhas availiaçõoes" />
                <MovieList list={watchlist} title="Quero assistir" />
                <MovieList list={remindMeWhenReleased} title="Avise-me quando lançar" />
            </section>
        </div>
    );
}

export default Lists;
