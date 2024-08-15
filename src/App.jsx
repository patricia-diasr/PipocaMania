import "./App.css";

import Header from "./assets/components/Header.jsx";
import Menu from "./assets/components/Menu.jsx";
import Banner from "./assets/components/Banner.jsx";
import Modal from "./assets/components/Modal.jsx";
import MovieList from "./assets/components/MovieList.jsx";

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Banner />
            <MovieList showMore={false}/>
            <Modal />
        </div>
    );
}

export default App;