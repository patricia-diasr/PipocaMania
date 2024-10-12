import { useState, useEffect } from "react";

import styles from "./MovieCheckout.module.css";
import Seatmap from "../components/Seatmap";

function MovieCheckout({ screenings }) {
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [tickets, setTickets] = useState({ full: 0, half: 0 });
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [availableDates, setAvailableDates] = useState([]);
    const [availableTimes, setAvailableTimes] = useState([]);
    const [seatingData, setSeatingData] = useState([]);

    if (!screenings) {
        return <div>Carregando...</div>;
    }

    useEffect(() => {
        if (screenings) {
            const dates = [...new Set(screenings.map((screening) => screening.date))];
            setAvailableDates(dates);
            if (dates.length > 0) {
                setSelectedDate(dates[0]);
            }
        }
    }, [screenings]);

    useEffect(() => {
        if (selectedDate && screenings) {
            const filteredScreenings = screenings.filter((screening) => screening.date === selectedDate);

            const timesGrouped = filteredScreenings.reduce((acc, screening) => {
                const { time, type } = screening;
                if (!acc[type]) {
                    acc[type] = [];
                }
                if (!acc[type].includes(time)) {
                    acc[type].push(time);
                }
                return acc;
            }, {});

            const timesArray = Object.keys(timesGrouped).map((type) => ({
                type,
                options: timesGrouped[type],
            }));

            setAvailableTimes(timesArray);

            if (timesArray.length > 0 && timesArray[0].options.length > 0) {
                setSelectedTime(`${timesArray[0].options[0]} - ${timesArray[0].type}`);
            }
        }
    }, [selectedDate, screenings]);

    useEffect(() => {
        if (selectedDate && selectedTime && screenings) {
            const selectedScreening = screenings.find((screening) => {
                const st = selectedTime.split(" - ");
                const time = st[0];
                const type = st[1];
                return screening.date === selectedDate && screening.time === time && screening.type === type;
            });

            if (selectedScreening) {
                setSeatingData(selectedScreening.seats || []);
                setSelectedSeats([]);
            }
        }
    }, [selectedDate, selectedTime, screenings]);

    const handleDateChange = (e) => setSelectedDate(e.target.value);
    const handleTimeChange = (e) => setSelectedTime(e.target.value);
    const handleTicketChange = (type, action) => {
        setTickets((prevTickets) => {
            const newValue =
                action === "increment" ? prevTickets[type] + 1 : prevTickets[type] > 0 ? prevTickets[type] - 1 : 0;
            return { ...prevTickets, [type]: newValue };
        });
    };

    const handleSeatSelection = (seat) => {
        if (seat.status === "booked") return;

        setSeatingData((prevSeats) =>
            prevSeats.map((row, rowIndex) =>
                row.map((s, seatIndex) =>
                    s && s.position === seat.position
                        ? { ...s, status: selectedSeats.includes(seat.position) ? "available" : "selected" }
                        : s
                )
            )
        );

        setSelectedSeats((prevSeats) =>
            prevSeats.includes(seat.position)
                ? prevSeats.filter((pos) => pos !== seat.position)
                : [...prevSeats, seat.position]
        );
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
            selectedSeats,
        };
        console.log("Reserva:", reservation);
    };

    const isFormValid =
        selectedDate &&
        selectedTime &&
        (tickets.full > 0 || tickets.half > 0) &&
        tickets.half + tickets.full === selectedSeats.length;

    return (
        <form onSubmit={handleSubmit} className={styles.movieCheckout}>
            <section className={styles.selectDay}>
                <h2>Selecione o dia</h2>
                <select name="date" value={selectedDate} onChange={handleDateChange}>
                    <option value="">Selecione a data</option>
                    {availableDates.map((date) => (
                        <option key={date} value={date}>
                            {date}
                        </option>
                    ))}
                </select>
            </section>
            <section className={styles.selectTime}>
                <h2>Selecione o horário</h2>
                {availableTimes.length > 0 &&
                    availableTimes.map(({ type, options }) => (
                        <div key={type} className={styles.sessionType}>
                            <h3>{type}</h3>
                            {options.map((time) => (
                                <label key={`${time}-${type}`}>
                                    <input
                                        type="radio"
                                        name="time"
                                        value={`${time} - ${type}`}
                                        checked={selectedTime === `${time} - ${type}`}
                                        onChange={handleTimeChange}
                                    />
                                    <span>{time}</span>
                                </label>
                            ))}
                        </div>
                    ))}
            </section>
            <section className={styles.selectSits}>
                <h2>Selecione os assentos</h2>
                <Seatmap seatingData={seatingData} onSeatSelect={handleSeatSelection} />
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
            <button type="submit" disabled={!isFormValid}>
                Aplicar
            </button>
        </form>
    );
}

export default MovieCheckout;
