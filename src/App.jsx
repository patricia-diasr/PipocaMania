import "./App.css";

import MovieDetail from "./assets/components/MovieDetail.jsx";
import Header from "./assets/components/Header.jsx";
import Menu from "./assets/components/Menu.jsx";

import Banner from "./assets/components/Banner.jsx";

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Banner />
            <MovieDetail />
        </div>
    );
}

export default App;
