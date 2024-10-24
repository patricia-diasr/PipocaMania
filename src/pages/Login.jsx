import styles from "./Login.module.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/authenticationService";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.overflow = "hidden";
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!username || !password) {
            setError("Preencha todos os campos");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const loginData = await login({ login: username, password });

            if (loginData) {
                localStorage.setItem("user", JSON.stringify(loginData.user));
                document.body.style.overflow = "auto";
                navigate("/home");
            }
        } catch (err) {
            setError("Senha ou login inválidos");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.login}>
            <div className={styles.loginContainer}>
                <div className={styles.loginContent}>
                    <h2>Faça seu login</h2>
                    {error && <p className={styles.error}>{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">User Name</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <span></span>

                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span></span>

                        <button type="submit" disabled={loading}>
                            {loading ? "Entrando..." : "Entrar"}
                        </button>
                    </form>
                    <Link to="/signin">Não tem cadastro? Registre-se aqui</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
