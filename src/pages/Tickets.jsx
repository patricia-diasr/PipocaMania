import styles from "./Tickets.module.css";
import Modal from "../components/Modal";
import useGetCheckout from "../hooks/useGetCheckout";
import { useState } from "react";

function Tickets() {
    const user = JSON.parse(localStorage.getItem("user")).id;
    const { tickets, error, loading } = useGetCheckout(user);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState(false);

    const openModal = (ticket) => {
        if (ticket.status) {
            setSelectedTicket(ticket);
            setIsModalVisible(true);
        }
    };

    const closeModal = () => setIsModalVisible(false);

    if (loading) {
        return <p className="warning">Carregando...</p>;
    }

    if (error) {
        return <p className="warning">Erro: {error}</p>;
    }

    if (!tickets) {
        return <p className="warning">Ingressos não encontrados.</p>;
    }

    return (
        <div className={styles.tickets}>
            <section>
                <h1>Meus Ingressos</h1>
                <div className={styles.ticketsContainer}>
                    {tickets.map((ticket) => (
                        <div
                            className={`${styles.ticket} ${ticket.status === false ? styles.disabled : ""}`}
                            key={ticket.movieId}
                            onClick={() => openModal(ticket)}
                        >
                            <h2>{ticket.movieName}</h2>
                            <div className={styles.ticketInfo}>
                                <div>
                                    <p>{ticket.date}</p>
                                    <p>{ticket.time}</p>
                                    <p>Assentos: {ticket.selectedSeats.join(", ")}</p>
                                </div>
                                <div>
                                    {ticket.tickets.half > 0 && <p>{ticket.tickets.half}x - Meia-entrada</p>}
                                    {ticket.tickets.full > 0 && <p>{ticket.tickets.full}x - Inteira</p>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {isModalVisible && (
                <Modal show={isModalVisible} onClose={closeModal}>
                    <div className={styles.ticketDetail}>
                        <div className={styles.img}>
                            <img
                                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${selectedTicket.checkoutId}`}
                                alt="QR Code do Ingresso"
                            />
                        </div>
                        <h2>{selectedTicket.movieName}</h2>
                        <div className={styles.ticketInfo}>
                            <p>{selectedTicket.date}</p>
                            <p>{selectedTicket.time}</p>
                            <br />
                            {selectedTicket.tickets.half > 0 && <p>{selectedTicket.tickets.half}x - Meia-entrada</p>}
                            {selectedTicket.tickets.full > 0 && <p>{selectedTicket.tickets.full}x - Inteira</p>}
                            <br />
                            <p>Assentos: {selectedTicket.selectedSeats.join(", ")}</p>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}

export default Tickets;
