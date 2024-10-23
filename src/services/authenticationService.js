import { apiMovieTheater } from "./apiClient";

export async function login(loginData) {
    try {
        const response = await apiMovieTheater.get(`/users`);
        const usersData = response.data;

        const user = usersData.find(user => user.login === loginData.login);

        if (user && user.password === loginData.password) {
            return {
                message: "Login successful",
                user: {
                    name: user.name,
                    id: user.id,
                    admin: user.admin
                }
            };
        } else {
            throw new Error("Invalid login or password");
        }
    } catch (error) {
        throw new Error(`Error during login: ${error.message}`);
    }
}
