import styles from "./Seatmap.module.css";

function Seatmap({ seatingData, onSeatSelect }) {
    return (
        <div className={styles.seatmap}>
            <div className={styles.room}>
                {seatingData.map((row, rowIndex) => (
                    <div key={rowIndex} className={styles.row}>
                        {row.map((seat, seatIndex) =>
                            seat ? (
                                <div
                                    key={seatIndex}
                                    className={`${styles.seat} ${styles[seat.status]}`}
                                    onClick={() => onSeatSelect(seat)} 
                                >
                                    {seat.position}
                                </div>
                            ) : (
                                <div key={seatIndex} className={styles.emptySeat}></div>
                            )
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Seatmap;
