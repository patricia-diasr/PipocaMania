import { apiMovies } from "./apiClient";
import { apiMovieTheater } from "./apiClient";

export async function getUpcomingMovies() {
    try {
        const response = await apiMovies.get(`/movie/upcoming?language=pt-BR&region=BR`);
        return response.data.results.slice(0, 4);
    } catch (error) {
        throw new Error("Error fetching upcoming movies");
    }
}

export async function getUserMovieLists(user) {
    try {
        const response = await apiMovieTheater.get(`/users/${user}`);
        return response.data;
    } catch (error) {
        throw new Error("Error fetching user movie lists");
    }
}

export async function addMovieReviewList(user, movie) {
    try {
        const userData = await apiMovieTheater.get(`/users/${user}`);
        let reviews = userData.data.myReviews;

        const movieIndex = reviews.findIndex((review) => review.id === movie.id);

        if (movieIndex !== -1) {
            reviews[movieIndex] = movie;
        } else {
            reviews = [...reviews, movie];
        }

        await apiMovieTheater.patch(`/users/${user}`, {
            myReviews: reviews,
        });
    } catch (error) {
        throw new Error("Error updating user reviews lists");
    }
}
