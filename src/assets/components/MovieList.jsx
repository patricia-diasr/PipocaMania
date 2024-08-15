import "./MovieList.css";

function MovieList({ showMore }) {
    return (
        <div className="movie-list">
            <div className="line">
                <h3>Em Cartaz</h3>
                {showMore && <a href="#">Ver mais</a>}
            </div>

            <div className="movies">
                <div className="movie"></div>
                <div className="movie"></div>
                <div className="movie"></div>
                <div className="movie"></div>
                <div className="movie"></div>
                <div className="movie"></div>
                <div className="movie"></div>
                <div className="movie"></div>
            </div>
        </div>
    );
}

export default MovieList;
