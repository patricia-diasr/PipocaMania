import { apiMovieTheater } from "./apiClient";

export async function postCheckoutReservation(user, reservation) {
    try {
        const userData = await apiMovieTheater.get(`/users/${user}`);
        const updatedTickets = [...userData.data.tickets, reservation];

        const response = await apiMovieTheater.patch(`/users/${user}`, {
            tickets: updatedTickets
        });

        return response;
    } catch (error) {
        throw new Error('Error submitting reservation');
    }
}
