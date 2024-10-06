import { apiMovies } from "./apiClient";

const API_KEY = "df206deae15646e9166c5f330a509970";

export async function getUpcomingMovies() {
    try {
        const response = await apiMovies.get(`/movie/upcoming?api_key=${API_KEY}&language=pt-BR&region=BR`);
        return response.data.results.slice(0, 4);
    } catch (error) {
        throw new Error('Error fetching upcoming movies');
    }
}

