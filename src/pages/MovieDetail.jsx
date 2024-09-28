import styles from "./MovieDetail.module.css";

import { BsBookmark, BsCalendar, BsCurrencyDollar, BsBarChart, BsClock, BsStar } from "react-icons/bs";

import ReactStars from "react-rating-stars-component";
import useMovieDetails from "../hooks/useMovieDetails";

function MovieDetail() {
    const { movieDetails, movieCredits, movieComments, error, loading } = useMovieDetails("1022789");
    function ratingChanged(newRating) {
        console.log(newRating);
    }

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>Erro: {error}</div>;
    }

    if (!movieDetails) {
        return <div>Detalhes do filme não encontrados.</div>;
    }

    if (!movieComments) {
        return <div>Comentarios do filme não encontrados.</div>;
    }

    const crewMap = new Map();
    movieCredits.crew.forEach((member) => {
        if (["Director", "Characters", "Writer"].includes(member.job)) {
            if (crewMap.has(member.name)) {
                crewMap.get(member.name).push(member.job);
            } else {
                crewMap.set(member.name, [member.job]);
            }
        }
    });

    const filmCreators = Array.from(crewMap, ([name, jobs]) => ({ name, jobs }));

    const formatCurrency = (amount) => {
        const currencySymbol = "US$";

        if (amount >= 1_000_000_000) {
            return `${currencySymbol}${(amount / 1_000_000_000).toFixed(1)}B`;
        } else if (amount >= 1_000_000) {
            return `${currencySymbol}${(amount / 1_000_000).toFixed(1)}M`;
        } else if (amount >= 1_000) {
            return `${currencySymbol}${(amount / 1_000).toFixed(1)}K`;
        } else {
            return `${currencySymbol}${amount.toLocaleString()}`;
        }
    };

    function formatDate(dateString) {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat("pt-BR", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
        }).format(date);
    }

    function formatRuntime(minutes) {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hours}h ${mins}m`;
    }

    function formatVote(vote) {
        const votePorcent = Math.floor(vote * 10);
        return `${votePorcent}%`;
    }

    return (
        <div className={styles.movieDetail}>
            <section className={styles.options}>
                <div className={styles.stars}>
                    <ReactStars count={5} isHalf={true} onChange={ratingChanged} size={35} activeColor="#ffd700" />
                </div>
                <BsBookmark className={styles.icon} />
            </section>

            <section className={styles.about}>
                <h1>{movieDetails.title}</h1>
                <h2>Sinopse</h2>
                <p>{movieDetails.overview}</p>
            </section>

            <section className={styles.filmCreators}>
                {filmCreators.map((member, index) => (
                    <div key={index} className={styles.filmCreator}>
                        <p className={styles.name}>{member.name}</p>
                        <p className={styles.job}>{member.jobs.join(", ")}</p>
                    </div>
                ))}
            </section>

            <section className={styles.info}>
                <div className={styles.infoBox}>
                    <div className={styles.infoLine}>
                        <BsStar className={styles.icon} />
                        <p>
                            <strong>Avaliação:</strong> {formatVote(movieDetails.vote_average)}
                        </p>
                    </div>

                    <div className={styles.infoLine}>
                        <BsClock className={styles.icon} />
                        <p>
                            <strong>Duração:</strong> {formatRuntime(movieDetails.runtime)}
                        </p>
                    </div>

                    <div className={styles.infoLine}>
                        <BsCalendar className={styles.icon} />
                        <p>
                            <strong>Lançamento:</strong> {formatDate(movieDetails.release_date)}
                        </p>
                    </div>

                    <div className={styles.infoLine}>
                        <BsCurrencyDollar className={styles.icon} />
                        <p>
                            <strong>Orçamento:</strong> {formatCurrency(movieDetails.budget)}
                        </p>
                    </div>

                    <div className={styles.infoLine}>
                        <BsBarChart className={styles.icon} />
                        <p>
                            <strong>Receita:</strong> {formatCurrency(movieDetails.revenue)}
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.cast}>
                <h2>Elenco</h2>
                <div className={styles.people}>
                    {movieCredits?.cast.slice(0, 6).map((person, index) => (
                        <div key={index} className={styles.person}>
                            <img src={`https://image.tmdb.org/t/p/w185${person.profile_path}`} alt={person.name} />
                            <p className={styles.name}>{person.name}</p>
                            <p className={styles.job}>{person.character}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.comments}>
                <h2>Avaliações</h2>
                {movieComments.map((comment, index) => (
                    <div className={styles.comment} key={index}>
                        <div className={styles.line}>
                            <p className={styles.name}>{comment.name}</p>
                            <div className={styles.stars}>
                                <ReactStars
                                    count={5}
                                    value={comment.stars}
                                    edit={false}
                                    isHalf={true}
                                    size={25}
                                    activeColor="#ffd700"
                                />
                            </div>
                        </div>
                        <p className={styles.description}>{comment.comment}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default MovieDetail;
