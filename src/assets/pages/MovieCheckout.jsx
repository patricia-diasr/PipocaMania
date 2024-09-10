import styles from "./MovieCheckout.module.css";

function MovieCheckout() {
    return (
        <div className={styles.movieCheckout}>
            <section className={styles.selectDay}>
                <h2>Selecione o dia</h2>
                <select name="date">
                    <option value="">Selecione a data</option>
                </select>
            </section>
            <section className={styles.selectTime}>
                <h2>Selecione o horário</h2>
                <div className={styles.sessionType}>
                    <h3>2D - Dublado</h3>
                    <label>
                        <input type="radio" name="time" value="19:00" />
                        <span>19:00</span>
                    </label>
                    <label>
                        <input type="radio" name="time" value="21:00" />
                        <span>21:00</span>
                    </label>
                </div>
                <div className={styles.sessionType}>
                    <h3>2D - Legendado</h3>
                    <label>
                        <input type="radio" name="time" value="19:00" />
                        <span>19:00</span>
                    </label>
                    <label>
                        <input type="radio" name="time" value="21:00" />
                        <span>21:00</span>
                    </label>
                </div>
            </section>
            <section className={styles.selectSits}>
                <h2>Selecione os assentos</h2>
                <div className={styles.sitmap}></div>
            </section>
            <section className={styles.selectTickets}>
                <h2>Selecione os ingressos</h2>
                <div className={styles.ticketType}>
                    <h3>Inteiras</h3>
                    <div className={styles.inputNumber}>
                        <button>-</button>
                        <span>0</span>
                        <button>+</button>
                    </div>
                    <p className={styles.price}>R$ 30,00</p>
                </div>

                <div className={styles.ticketType}>
                    <h3>Meia Entrada</h3>
                    <div className={styles.inputNumber}>
                        <button>-</button>
                        <span>0</span>
                        <button>+</button>
                    </div>
                    <p className={styles.price}>R$ 15,00</p>
                </div>
            </section>
            <button type="submit">Aplicar</button>
        </div>
    );
}

export default MovieCheckout;
