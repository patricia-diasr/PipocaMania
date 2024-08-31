import "./MovieDetail.css";

import { BsBookmark } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

function MovieDetail() {
    return (
        <div className="movie-detail">
            <section className="options">
                <div className="stars">
                    <BsStar className="icon" />
                    <BsStar className="icon" />
                    <BsStar className="icon" />
                    <BsStar className="icon" />
                    <BsStar className="icon" />
                </div>
                <BsBookmark className="icon" />
            </section>

            <section className="about">
                <h2>Sinopse</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque, voluptate distinctio blanditiis
                    soluta explicabo dolores, voluptates tempora nostrum asperiores quibusdam molestiae voluptatibus
                    odit. Tempore voluptas nesciunt sed exercitationem laboriosam.
                </p>
            </section>

            <section className="film-creators">
                <div className="film-creator">
                    <p className="name">Lorem Impsum</p>
                    <p className="job">Dolor sit amet</p>
                </div>
                <div className="film-creator">
                    <p className="name">Lorem Impsum Adisplicins Elit</p>
                    <p className="job">Dolor sit amet</p>
                </div>
                <div className="film-creator">
                    <p className="name">Lorem Impsum</p>
                    <p className="job">Dolor sit amet</p>
                </div>
            </section>

            <section className="info">
                <div className="info-box">
                    <div className="info-line">
                        <BsStar className="icon" />
                        <p>
                            <strong>Lançamento:</strong> 2024
                        </p>
                    </div>

                    <div className="info-line">
                        <BsStar className="icon" />
                        <p>
                            <strong>Lançamento:</strong> 2024
                        </p>
                    </div>

                    <div className="info-line">
                        <BsStar className="icon" />
                        <p>
                            <strong>Lançamento:</strong> 2024
                        </p>
                    </div>

                    <div className="info-line">
                        <BsStar className="icon" />
                        <p>
                            <strong>Lançamento:</strong> 2024
                        </p>
                    </div>

                    <div className="info-line">
                        <BsStar className="icon" />
                        <p>
                            <strong>Lançamento:</strong> 2024
                        </p>
                    </div>
                </div>
            </section>

            <section className="cast">
                <h2>Elenco</h2>
                <div className="people">
                    <div className="person">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1667811951673-3b3e8d6742c7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                        <p className="name">Lorem Impsum</p>
                        <p className="job">Lorem Impsum</p>
                    </div>
                    <div className="person">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1667811951673-3b3e8d6742c7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                        <p className="name">Lorem Impsum</p>
                        <p className="job">Lorem Impsum</p>
                    </div>
                    <div className="person">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1667811951673-3b3e8d6742c7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                        <p className="name">Lorem Impsum</p>
                        <p className="job">Lorem Impsum</p>
                    </div>
                    <div className="person">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1667811951673-3b3e8d6742c7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                        <p className="name">Lorem Impsum</p>
                        <p className="job">Lorem Impsum</p>
                    </div>
                </div>
            </section>

            <section className="comments">
                <h2>Avaliações</h2>
                <div className="comment">
                    <div className="line">
                        <p className="name">Lorem Impsum</p>
                        <div className="stars">
                            <BsStar className="icon" />
                            <BsStar className="icon" />
                            <BsStar className="icon" />
                            <BsStar className="icon" />
                            <BsStar className="icon" />
                        </div>
                    </div>
                    <p className="description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className="comment">
                    <div className="line">
                        <p className="name">Lorem Impsum</p>
                        <div className="stars">
                            <BsStar className="icon" />
                            <BsStar className="icon" />
                            <BsStar className="icon" />
                            <BsStar className="icon" />
                            <BsStar className="icon" />
                        </div>
                    </div>
                    <p className="description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet consectetur adipisicing elit.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default MovieDetail;
