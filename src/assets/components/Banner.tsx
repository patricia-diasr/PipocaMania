import Poster from "../images/poster-filme.jpg";

import "./Banner.css";

function Banner() {
    return (
        <div className="banner">
            <h2>Star Wars: Ep VIII</h2>
            <img src={Poster} alt="Poster filme" />
        </div>
    );
}

export default Banner;
