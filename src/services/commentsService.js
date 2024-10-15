import { apiMovieTheater } from "./apiClient";

export async function getMovieComments(id) {
    try {
        const response = await apiMovieTheater.get(`/movies?id=${id}`);

        if (response.data && response.data.length > 0) {
            return response.data[0].comments || [];
        } else {
            return [];
        }
    } catch (error) {
        throw new Error(`Error fetching movie comments for movie ID ${id}`);
    }
}
