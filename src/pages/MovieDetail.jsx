import ReactStars from "react-rating-stars-component";
import styles from "./MovieDetail.module.css";
import Modal from "../components/Modal";
import useGetMovieComment from "../hooks/useGetMovieComment";
import useNewReview from "../hooks/useNewReview";
import { BsBookmark, BsCalendar, BsCurrencyDollar, BsBarChart, BsClock, BsStar } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function MovieDetail({ movieId, movieDetails, movieCredits, movieComments }) {
    const navigate = useNavigate();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { review: myReview, error, loading } = useGetMovieComment("1", movieId);
    const { submitReview, loadingComment, errorComment, success } = useNewReview();

    const [newReview, setNewReview] = useState({
        stars: 0,
        comment: "",
    });

    if (loading) {
        return <p className="warning">Carregando avaliações...</p>;
    }

    if (error) {
        return <p className="warning">Erro ao carregar avaliações.</p>;
    }

    if (!movieDetails) {
        return <p className="warning">Detalhes do filme não disponíveis.</p>;
    }

    function ratingChanged(newRating) {
        setNewReview({ ...newReview, stars: newRating });
        openModal();
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const userId = "1";

        try {
            const comment = {
                stars: newReview.stars,
                name: "Patrícia Rodrigues",
                comment: newReview.comment,
            };

            const review = {
                id: movieId,
                poster_path: movieDetails.poster_path,
                stars: newReview.stars,
                comment: movieDetails.comment,
            };

            await submitReview(userId, movieId, comment, review);
            closeModal();
            setNewReview({ stars: 0, comment: "" });
            navigate(0);
        } catch (error) {
            console.error("Erro ao enviar avaliação:", error);
        }
    }

    function openModal() {
        setIsModalVisible(true);
    }

    function closeModal() {
        setIsModalVisible(false);
    }

    const crewMap = new Map();
    movieCredits?.crew?.forEach((member) => {
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

    function isFutureRelease(releaseDate) {
        const today = new Date();
        const release = new Date(releaseDate);
        return release > today;
    }

    return (
        <div>
            <div className={styles.movieDetail}>
                <section className={styles.options}>
                    <div className={styles.stars}>
                        <ReactStars
                            count={5}
                            value={myReview?.stars || 0}
                            isHalf={true}
                            onChange={ratingChanged}
                            size={35}
                            activeColor="#ffd700"
                        />
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
                        {movieCredits?.cast?.slice(0, 6).map((person, index) => (
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
                    {movieComments && movieComments.length > 0 ? (
                        movieComments.map((comment, index) => (
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
                        ))
                    ) : (
                        <p>Não há avaliações</p>
                    )}
                </section>
            </div>
            {isModalVisible && (
                <Modal show={isModalVisible} onClose={closeModal}>
                    <div className={styles.newReview}>
                        <ReactStars
                            count={5}
                            value={newReview.stars}
                            isHalf={true}
                            onChange={(rating) => setNewReview({ ...newReview, stars: rating })}
                            size={35}
                            activeColor="#ffd700"
                        />
                        <h3>Minha Avaliação</h3>
                        <textarea
                            value={newReview.comment}
                            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                            placeholder="Escreva sua avaliação aqui..."
                        ></textarea>
                        <button type="submit" onClick={handleSubmit} disabled={loadingComment}>
                            {loadingComment ? "Enviando..." : "Salvar"}
                        </button>
                        {errorComment && <p className={styles.error}>{errorComment}</p>}
                    </div>
                </Modal>
            )}
        </div>
    );
}

export default MovieDetail;
