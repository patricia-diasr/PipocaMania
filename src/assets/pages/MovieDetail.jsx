import styles from "./MovieDetail.module.css";

import { BsBookmark } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

import ReactStars from "react-rating-stars-component";

function MovieDetail() {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (
        <div className={styles.movieDetail}>
            <section className={styles.options}>
                <div className={styles.stars}>
                    <ReactStars count={5} isHalf={true} onChange={ratingChanged} size={35} activeColor="#ffd700" />
                </div>
                <BsBookmark className={styles.icon} />
            </section>

            <section className={styles.about}>
                <h2>Sinopse</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque, voluptate distinctio blanditiis
                    soluta explicabo dolores, voluptates tempora nostrum asperiores quibusdam molestiae voluptatibus
                    odit. Tempore voluptas nesciunt sed exercitationem laboriosam.
                </p>
            </section>

            <section className={styles.filmCreators}>
                <div className={styles.filmCreator}>
                    <p className={styles.name}>Lorem Impsum</p>
                    <p className={styles.job}>Dolor sit amet</p>
                </div>
                <div className={styles.filmCreator}>
                    <p className={styles.name}>Lorem Impsum Adisplicins Elit</p>
                    <p className={styles.job}>Dolor sit amet</p>
                </div>
                <div className={styles.filmCreator}>
                    <p className={styles.name}>Lorem Impsum</p>
                    <p className={styles.job}>Dolor sit amet</p>
                </div>
            </section>

            <section className={styles.info}>
                <div className={styles.infoBox}>
                    <div className={styles.infoLine}>
                        <BsStar className={styles.icon} />
                        <p>
                            <strong>Lançamento:</strong> 2024
                        </p>
                    </div>

                    <div className={styles.infoLine}>
                        <BsStar className={styles.icon} />
                        <p>
                            <strong>Lançamento:</strong> 2024
                        </p>
                    </div>

                    <div className={styles.infoLine}>
                        <BsStar className={styles.icon} />
                        <p>
                            <strong>Lançamento:</strong> 2024
                        </p>
                    </div>

                    <div className={styles.infoLine}>
                        <BsStar className={styles.icon} />
                        <p>
                            <strong>Lançamento:</strong> 2024
                        </p>
                    </div>

                    <div className={styles.infoLine}>
                        <BsStar className={styles.icon} />
                        <p>
                            <strong>Lançamento:</strong> 2024
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.cast}>
                <h2>Elenco</h2>
                <div className={styles.people}>
                    <div className={styles.person}>
                        <img
                            src="https://plus.unsplash.com/premium_photo-1667811951673-3b3e8d6742c7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                        <p className={styles.name}>Lorem Impsum</p>
                        <p className={styles.job}>Lorem Impsum</p>
                    </div>
                    <div className={styles.person}>
                        <img
                            src="https://plus.unsplash.com/premium_photo-1667811951673-3b3e8d6742c7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                        <p className={styles.name}>Lorem Impsum</p>
                        <p className={styles.job}>Lorem Impsum</p>
                    </div>
                    <div className={styles.person}>
                        <img
                            src="https://plus.unsplash.com/premium_photo-1667811951673-3b3e8d6742c7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                        <p className={styles.name}>Lorem Impsum</p>
                        <p className={styles.job}>Lorem Impsum</p>
                    </div>
                    <div className={styles.person}>
                        <img
                            src="https://plus.unsplash.com/premium_photo-1667811951673-3b3e8d6742c7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                        <p className={styles.name}>Lorem Impsum</p>
                        <p className={styles.job}>Lorem Impsum</p>
                    </div>
                </div>
            </section>

            <section className={styles.comments}>
                <h2>Avaliações</h2>
                <div className={styles.comment}>
                    <div className={styles.line}>
                        <p className={styles.name}>Lorem Impsum</p>
                        <div className={styles.stars}>
                            <ReactStars
                                count={5}
                                value={5}
                                edit={false}
                                isHalf={true}
                                size={25}
                                activeColor="#ffd700"
                            />
                        </div>
                    </div>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className={styles.comment}>
                    <div className={styles.line}>
                        <p className={styles.name}>Lorem Impsum</p>
                        <div className={styles.stars}>
                            <ReactStars
                                count={5}
                                value={3.5}
                                edit={false}
                                isHalf={true}
                                size={25}
                                activeColor="#ffd700"
                            />
                        </div>
                    </div>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet consectetur adipisicing elit.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default MovieDetail;
