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

    if (loadingMovie || loadingScreening) return <div>Carregando...</div>;
    if (errorMovie || errorScreening) return <div>Erro carregando código</div>;

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
                <MovieCheckout screenings={screenings} />
            )}
        </>
    );
}

export default Movie;
