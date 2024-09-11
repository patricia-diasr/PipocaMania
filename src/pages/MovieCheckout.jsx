import { useState, useEffect } from "react";
import styles from "./MovieCheckout.module.css";

function MovieCheckout() {
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [tickets, setTickets] = useState({ full: 0, half: 0 });

    const handleDateChange = (e) => setSelectedDate(e.target.value);
    const handleTimeChange = (e) => setSelectedTime(e.target.value);
    const handleTicketChange = (type, action) => {
        setTickets((prevTickets) => {
            const newValue =
                action === "increment" ? prevTickets[type] + 1 : prevTickets[type] > 0 ? prevTickets[type] - 1 : 0;
            return { ...prevTickets, [type]: newValue };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isFormValid) {
            return;
        }

        const reservation = {
            date: selectedDate,
            time: selectedTime,
            tickets,
        };
        console.log("Reserva:", reservation);
    };

    const isFormValid = selectedDate && selectedTime && (tickets.full > 0 || tickets.half > 0);

    return (
        <form onSubmit={handleSubmit} className={styles.movieCheckout}>
            <section className={styles.selectDay}>
                <h2>Selecione o dia</h2>
                <select name="date" value={selectedDate} onChange={handleDateChange}>
                    <option value="">Selecione a data</option>
                    <option value="2024-09-10">10 de Setembro</option>
                    <option value="2024-09-11">11 de Setembro</option>
                </select>
            </section>
            <section className={styles.selectTime}>
                <h2>Selecione o horário</h2>
                <div className={styles.sessionType}>
                    <h3>2D - Dublado</h3>
                    <label>
                        <input
                            type="radio"
                            name="time"
                            value="19:00D"
                            checked={selectedTime === "19:00D"}
                            onChange={handleTimeChange}
                        />
                        <span>19:00</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="time"
                            value="21:00D"
                            checked={selectedTime === "21:00D"}
                            onChange={handleTimeChange}
                        />
                        <span>21:00</span>
                    </label>
                </div>
                <div className={styles.sessionType}>
                    <h3>2D - Legendado</h3>
                    <label>
                        <input
                            type="radio"
                            name="time"
                            value="19:00L"
                            checked={selectedTime === "19:00L"}
                            onChange={handleTimeChange}
                        />
                        <span>19:00</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="time"
                            value="21:00L"
                            checked={selectedTime === "21:00L"}
                            onChange={handleTimeChange}
                        />
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
                        <button type="button" onClick={() => handleTicketChange("full", "decrement")}>
                            -
                        </button>
                        <span>{tickets.full}</span>
                        <button type="button" onClick={() => handleTicketChange("full", "increment")}>
                            +
                        </button>
                    </div>
                    <p className={styles.price}>R$ 30,00</p>
                </div>

                <div className={styles.ticketType}>
                    <h3>Meia Entrada</h3>
                    <div className={styles.inputNumber}>
                        <button type="button" onClick={() => handleTicketChange("half", "decrement")}>
                            -
                        </button>
                        <span>{tickets.half}</span>
                        <button type="button" onClick={() => handleTicketChange("half", "increment")}>
                            +
                        </button>
                    </div>
                    <p className={styles.price}>R$ 15,00</p>
                </div>
            </section>
            <button type="submit" disabled={!isFormValid}>Aplicar</button>
        </form>
    );
}

export default MovieCheckout;
