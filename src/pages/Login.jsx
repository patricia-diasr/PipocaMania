import styles from "./Login.module.css";

import { useEffect } from "react";
import { Link } from "react-router-dom";

function Login() {
    useEffect(() => {
        document.body.style.overflow = "hidden";
    });

    return (
        <div className={styles.login}>
            <div className={styles.loginContainer}>
                <div className={styles.loginContent}>
                    <h2>Faça seu login</h2>
                    <form>
                        <label htmlFor="username">User Name</label>
                        <input type="text" id="username" name="username" required />
                        <span></span>

                        <label htmlFor="password">Senha</label>
                        <input type="password" id="password" name="password" required />
                        <span></span>

                        <button type="submit">Entrar</button>
                    </form>
                    <Link to="/signin">Não tem cadastro? Registre-se aqui</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
