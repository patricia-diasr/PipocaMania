import { apiMovieTheater } from "./apiClient";

export async function getMovieComments(id) {
    try {
        const response = await apiMovieTheater.get(`/movies?id=${id}`);
        return response.data[0].comments;
    } catch (error) {
        throw new Error(`Error fetching movie comments for movie ID ${id}`);
    }
}
