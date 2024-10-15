import Banner from "../components/Banner";
import MovieList from "../components/MovieList";
import useMovieSugestions from "../hooks/useMovieSugestions";
import styles from "./Home.module.css";

function Home() {
    const { upcomingMovies, error, loading } = useMovieSugestions();

    const showingNow = [
        {
            id: "1022789",
            poster_path: "/hGTxHEDQBa6AAuGWDrTpbJjEO0w.jpg",
        },
        {
            id: "917496",
            poster_path: "/qhwYf4lHJsUyXFKEUKpt93yttJp.jpg",
        },
        {
            id: "587563",
            poster_path: "/zk2d0w7XrK9xvBtFiERr0HJoGuL.jpg",
        },
        {
            id: "698687",
            poster_path: "/cuFhVLPJ9zC06EMV5XAKNNRJtC4.jpg",
        },
        {
            id: "889737",
            poster_path: "/ud3gcdKienuJcViF2tZrIAbGOW8.jpg",
        },
    ];

    if (loading) {
        return <p className="warning">Carregando...</p>;
    }

    if (error) {
        return <p className="warning">Erro: {error}</p>;
    }

    if (!upcomingMovies) {
        return <p className="warning">Próximos lançamentos não encontrados.</p>;
    }

    return (
        <div className={styles.home}>
            <Banner path_image="p5ozvmdgsmbWe0H8Xk7Rc8SCwAB.jpg" />
            <section>
                <MovieList list={showingNow} title="Em Cartaz" />
                <MovieList list={upcomingMovies} title="Próximos Lançamentos" />
            </section>
        </div>
    );
}

export default Home;
