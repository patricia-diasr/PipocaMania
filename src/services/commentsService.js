import { apiMovieTheater } from "./apiClient";

export async function getMovieComments(id) {
    try {
        const response = await apiMovieTheater.get(`/movies?id=${id}`);

        if (response.data && response.data.length > 0) {
            return response.data[0].comments;
        } else {
            return [];
        }
    } catch (error) {
        throw new Error(`Error fetching movie comments for movie ID ${id}`);
    }
}

export async function getMovieCommentByUser(user, movie) {
    try {
        const response = await apiMovieTheater.get(`/users/${user}`);
        const reviews = response.data.myReviews;
        const review = reviews.find((review) => review.id === movie);

        if (review) {
            return review;
        } else {
            return { stars: 0, comment: "" };
        }
    } catch (error) {
        throw new Error(`Error fetching movie comments for movie ID ${id}`);
    }
}

export async function saveComment(movieId, comment) {
    try {
        const movieData = await apiMovieTheater.get(`/movies/${movieId}`);
        const updateComments = [...movieData.data.comments, comment];

        await apiMovieTheater.patch(`/movies/${movieId}`, {
            comments: updateComments,
        });
    } catch (error) {
        throw new Error("Error submitting comment");
    }
}
