import "./App.css";

import MovieList from "./assets/components/MovieList.jsx";
import Header from "./assets/components/Header.jsx";
import Menu from "./assets/components/Menu.jsx";

import Banner from "./assets/components/Banner.jsx";

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Banner />
            <MovieList />
        </div>
    );
}

export default App;
