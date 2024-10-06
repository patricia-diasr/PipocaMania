import Banner from "../components/Banner";
import MovieList from "../components/MovieList";
import useMovieSugestions from "../hooks/useMovieSugestions";
import styles from "./Home.module.css";

function Home() {
    const { upcomingMovies, error, loading } = useMovieSugestions();

    const showingNow = [
        {
            title: "Os Fantasmas Ainda se Divertem: Beetlejuice Beetlejuice",
            poster_path: "/qhwYf4lHJsUyXFKEUKpt93yttJp.jpg",
        },
        {
            title: "O Menino e o Mestre",
            poster_path: "/zk2d0w7XrK9xvBtFiERr0HJoGuL.jpg",
        },
        {
            title: "Transformers: O Início",
            poster_path: "/cuFhVLPJ9zC06EMV5XAKNNRJtC4.jpg",
        },
        {
            title: "Coringa: Delírio a Dois",
            poster_path: "/ud3gcdKienuJcViF2tZrIAbGOW8.jpg",
        },
    ];

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>Erro: {error}</div>;
    }

    if (!upcomingMovies) {
        return <div>Próximos lançamentos não encontrados.</div>;
    }

    return (
        <div className={styles.home}>
            <Banner />
            <section>
                <MovieList list={showingNow} title="Em Cartaz" />
                <MovieList list={upcomingMovies} title="Próximos Lançamentos" />
            </section>
        </div>
    );
}

export default Home;
