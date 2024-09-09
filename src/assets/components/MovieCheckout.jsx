import "./MovieCheckout.css";

function MovieCheckout() {
    return (
        <div className="movie-checkout">
            <section className="select-day">
                <h2>Selecione o dia</h2>
                <select name="date">
                    <option value="">Selecione a data</option>
                </select>
            </section>
            <section className="select-time">
                <h2>Selecione o horário</h2>
                <div className="session-type">
                    <p>2D - Dublado</p>
                    <label>
                        <input type="radio" name="time" value="19:00" />
                        <span>19:00</span>
                    </label>
                    <label>
                        <input type="radio" name="time" value="21:00" />
                        <span>21:00</span>
                    </label>
                </div>
                <div className="session-type">
                    <p>2D - Legendado</p>
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
            <section className="select-sits">
                <h2>Selecione os assentos</h2>
                <div className="sitmap"></div>
            </section>
            <section className="select-tickets">
                <h2>Selecione os ingressos</h2>
                <div className="ticket-type">
                    <h3>Inteiras</h3>
                    <div className="input-number">
                        <button>-</button>
                        <span>0</span>
                        <button>+</button>
                    </div>
                    <p className="price">R$ 30,00</p>
                </div>

                <div className="ticket-type">
                    <h3>Meia Entrada</h3>
                    <div className="input-number">
                        <button>-</button>
                        <span>0</span>
                        <button>+</button>
                    </div>
                    <p className="price">R$ 15,00</p>
                </div>
            </section>
            <button type="submit">Aplicar</button>
        </div>
    );
}

export default MovieCheckout;
