import { Outlet, useParams } from "react-router-dom";

import Submenu from "../components/Submenu";
import Banner from "../components/Banner";

import useMovieDetails from "../hooks/useMovieDetails";
import useMovieScreenings from "../hooks/useMovieScreenings";

function Movie() {
    const { movieId } = useParams();

    const { movieDetails, movieCredits, movieComments, errorMovie, loadingMovie } = useMovieDetails(movieId);
    const { screenings, errorScreening, loadingScreening } = useMovieScreenings(movieId);

    return loadingMovie || loadingScreening ? (
        <div>Carregando...</div>
    ) : errorMovie || errorScreening ? (
        <div>Erro carregando código</div>
    ) : (
        <>
            {movieDetails?.backdrop_path && <Banner path_image={movieDetails.backdrop_path} />}
            <Submenu />
            <Outlet context={{ movieDetails, screenings, movieCredits, movieComments }} />
        </>
    );
}

export default Movie;
