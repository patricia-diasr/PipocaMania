import { useState, useEffect } from "react";
import { getMovieDetails, getMovieCredits } from "../services/movieService";

function useMovieDetails(id) {
    const [movieDetails, setMovieDetails] = useState(null);
    const [movieCredits, setMovieCredits] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const details = await getMovieDetails(id);
                const credits = await getMovieCredits(id);
                setMovieDetails(details);
                setMovieCredits(credits);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchMovieDetails();
        }
    }, [id]);

    return { movieDetails, movieCredits, error, loading };
}

export default useMovieDetails;
