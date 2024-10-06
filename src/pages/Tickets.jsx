import styles from "./Tickets.module.css";

import Modal from "../components/Modal";

function Tickets() {
    return (
        <div className={styles.tickets}>
            <section>
                <h1>Meus Ingressos</h1>
                <div className={styles.ticketsContainer}>
                    <div className={styles.ticket}>
                        <h2>Nome do Filme</h2>
                        <div className={styles.ticketInfo}>
                            <div>
                                <p>2D - Dublado</p>
                                <p>30/09 - 20h00</p>
                            </div>
                            <div>
                                <p>2x - Meia-entrada</p>
                                <p>1x - Inteira</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.ticket}>
                        <h2>Nome do Filme</h2>
                        <div className={styles.ticketInfo}>
                            <div>
                                <p>2D - Dublado</p>
                                <p>30/09 - 20h00</p>
                            </div>
                            <div>
                                <p>2x - Meia-entrada</p>
                                <p>1x - Inteira</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.ticket}>
                        <h2>Nome do Filme</h2>
                        <div className={styles.ticketInfo}>
                            <div>
                                <p>2D - Dublado</p>
                                <p>30/09 - 20h00</p>
                            </div>
                            <div>
                                <p>2x - Meia-entrada</p>
                                <p>1x - Inteira</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.ticket}>
                        <h2>Nome do Filme</h2>
                        <div className={styles.ticketInfo}>
                            <div>
                                <p>2D - Dublado</p>
                                <p>30/09 - 20h00</p>
                            </div>
                            <div>
                                <p>2x - Meia-entrada</p>
                                <p>1x - Inteira</p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.ticket} ${styles.disabled}`}>
                        <h2>Nome do Filme</h2>
                        <div className={styles.ticketInfo}>
                            <div>
                                <p>2D - Dublado</p>
                                <p>30/09 - 20h00</p>
                            </div>
                            <div>
                                <p>2x - Meia-entrada</p>
                                <p>1x - Inteira</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Modal>
                <div className={styles.ticketDetail}>
                    <div className={styles.img}>
                        <img
                            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=toke-ingresso "
                            alt="QR Code do Ingresso"
                        />
                    </div>
                    <h2>Nome do Filme</h2>
                    <div className={styles.ticketInfo}>
                        <p>2D - Dublado</p>
                        <p>30/09 - 20h00</p>
                        <br />
                        <p>2x - Meia-entrada</p>
                        <p>1x - Inteira</p>
                        <br />
                        <p>Assentos: A6, A7, A8</p>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default Tickets;
