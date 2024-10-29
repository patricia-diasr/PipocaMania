import { apiMovieTheater } from "./apiClient";

export async function login(loginData) {
    try {
        const response = await apiMovieTheater.get(`/users`);
        const usersData = response.data;

        const user = usersData.find((user) => user.login === loginData.login);

        if (user && user.password === loginData.password) {
            return {
                message: "Login successful",
                user: {
                    name: user.name,
                    id: user.id,
                    role: user.role,
                },
            };
        } else {
            throw new Error("Invalid login or password");
        }
    } catch (error) {
        throw new Error(`Error during login: ${error.message}`);
    }
}

export async function signup(signupData) {
    try {
        const response = await apiMovieTheater.post(`/users`, {
            name: signupData.name,
            login: signupData.login,
            password: signupData.password,
            role: "client", 
            tickets: [],
            watchlist: [],
            myReviews: []
        });

        if (response.status === 201) {
            return {
                message: "Signup successful",
                user: {
                    name: response.data.name,
                    id: response.data.id,
                    role: response.data.role,
                },
            };
        } else {
            throw new Error("Failed to sign up");
        }
    } catch (error) {
        throw new Error(`Error during signup: ${error.message}`);
    }
}
