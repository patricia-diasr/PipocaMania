import styles from "./Tickets.module.css";

function Tickets() {
    return (
        <div className={styles.tickets}>
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
        </div>
    );
}

export default Tickets;
