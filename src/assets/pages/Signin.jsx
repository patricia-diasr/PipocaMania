import styles from "./Sign.module.css";

import { useEffect } from 'react';

function signin() {
    useEffect(() => {
        document.body.style.overflow = 'hidden'
    })

    return (
        <div className={styles.signin}>
            <div className={styles.signinContainer}>
                <div className={styles.signinContent}>
                    <h2>Faça seu cadastro</h2>
                    <form>
                        <label htmlFor="username">User Name</label>
                        <input type="text" id="username" name="username" required />
                        <span></span>

                        <label htmlFor="password">Senha</label>
                        <input type="password" id="password" name="password" required />
                        <span></span>

                        <button type="submit">Cadastrar</button>
                    </form>
                    <a href="#">Já possuí cadastro? Faça login aqui</a>
                </div>
            </div>
        </div>
    );
}

export default signin;
