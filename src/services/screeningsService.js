import { apiMovieTheater } from "./apiClient";

export async function getMovieScreenings(id) {
    try {
        const response = await apiMovieTheater.get(`/movies?id=${id}`);
        return response.data[0].movie_screenings;
    } catch (error) {
        throw new Error(`Error fetching movie screenings for movie ID ${id}`);
    }
}
