import { useState } from "react";
import { useParams } from "react-router-dom";

import Submenu from "../components/Submenu";
import Banner from "../components/Banner";

import useMovieDetails from "../hooks/useMovieDetails";
import useMovieScreenings from "../hooks/useMovieScreenings";

import MovieDetail from "./MovieDetail";
import MovieCheckout from "./MovieCheckout";

function Movie() {
    const { movieId } = useParams();
    const [activePage, setActivePage] = useState("detail");

    const { movieDetails, movieCredits, movieComments, errorMovie, loadingMovie } = useMovieDetails(movieId);
    const { screenings, errorScreening, loadingScreening } = useMovieScreenings(movieId);

    if (loadingMovie || loadingScreening) return <p className="warning">Carregando...</p>;
    if (errorMovie || errorScreening) return <p className="warning">Erro carregando informações</p>;

    return (
        <>
            {movieDetails?.backdrop_path && <Banner path_image={movieDetails.backdrop_path} />}
            
            <Submenu setActivePage={setActivePage} />

            {activePage === "detail" ? (
                <MovieDetail 
                    movieDetails={movieDetails}
                    movieCredits={movieCredits}
                    movieComments={movieComments}
                />
            ) : (
                <MovieCheckout screenings={screenings} movieName={movieDetails.title} movieId={movieId} />
            )}
        </>
    );
}

export default Movie;
