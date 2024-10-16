import { apiMovieTheater } from "./apiClient";

export async function getCheckout(user) {
    try {
        const response = await apiMovieTheater.get(`/users/${user}`);
        let tickets = response.data.tickets;

        if (tickets && tickets.length > 0) {
            tickets = tickets.sort((a, b) => {
                return a.status === b.status ? 0 : a.status ? -1 : 1;
            });
            return tickets;
        } else {
            return false;
        }
    } catch (error) {
        throw new Error("Error getting checkouts");
    }
}

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
