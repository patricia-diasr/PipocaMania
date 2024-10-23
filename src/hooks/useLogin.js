import { useState, useEffect } from "react";
import { login } from "../services/authenticationService";

function useLogin(userData) {
    const [loginData, setLoginData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const performLogin = async () => {
            if (!userData.login || !userData.password) {
                return;
            }

            setLoading(true);
            setError(null);

            try {
                const loginResponse = await login(userData);
                setLoginData(loginResponse);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        performLogin();
    }, [userData]);

    return { loginData, error, loading };
}

export default useLogin;
