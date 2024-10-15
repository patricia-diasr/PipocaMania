import { apiMovieTheater } from "./apiClient";

export async function saveCheckout(user, reservation) {
    try {
        const userData = await apiMovieTheater.get(`/users/${user}`);
        const updatedTickets = [...userData.data.tickets, reservation];

        await apiMovieTheater.patch(`/users/${user}`, {
            tickets: updatedTickets,
        });
    } catch (error) {
        throw new Error("Error submitting reservation");
    }
}

export async function updateSeatingData(movieId, screeningId, seatingData) {
    try {
        seatingData.forEach((row) => {
            row.forEach((seat) => {
                if (seat && seat.status === "selected") {
                    seat.status = "booked";
                }
            });
        });

        const movieResponse = await apiMovieTheater.get(`/movies/${movieId}`);
        const movie = movieResponse.data;

        const screening = movie.movie_screenings.find((screening) => screening.id === screeningId);

        if (!screening) {
            throw new Error("Screening not found");
        }

        screening.seats = seatingData;

        await apiMovieTheater.patch(`/movies/${movieId}`, {
            movie_screenings: movie.movie_screenings,
        });
    } catch (error) {
        throw new Error("Error updating seating data: " + error.message);
    }
}