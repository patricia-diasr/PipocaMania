import axios from "axios";

export const apiMovies = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export const apiMovieTheater = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});
