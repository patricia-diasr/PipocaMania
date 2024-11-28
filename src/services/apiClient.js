import axios from "axios";

const API_BEARER_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjIwNmRlYWUxNTY0NmU5MTY2YzVmMzMwYTUwOTk3MCIsIm5iZiI6MTczMjc1MTEzMS4xMTgxMTUyLCJzdWIiOiI2NjllZmQ1MmFkYzY2MGIzZmIyNWY4NzQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.kcH6crEkCx4xp1w4yIiSK8KUX-3MT1twI3SYHrOZW1M";

export const apiMovies = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_BEARER_TOKEN}`,
    },
});

export const apiMovieTheater = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});
