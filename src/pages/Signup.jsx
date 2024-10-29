import styles from "./Login.module.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../services/authenticationService";

function Signup() {
    const [name, setName] = useState("");
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
            const loginData = await signup({ login: username, password, name });

            if (loginData) {
                localStorage.setItem("user", JSON.stringify(loginData.user));
                document.body.style.overflow = "auto";

                if (loginData.user.role === "client") {
                    navigate("/home");
                } else {
                    navigate("/search");
                }
            }
        } catch (err) {
            setError("Algo deu errado");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.login}>
            <div className={styles.loginContainer}>
                <div className={styles.loginContent}>
                    <h2>Faça seu cadastro</h2>
                    {error && <p className={styles.error}>{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Nome</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <span></span>

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
                            {loading ? "Cadastrnado..." : "Cadastrar"}
                        </button>
                    </form>
                    <Link to="/login">Já possuí cadastro? Faça login aqui</Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;
