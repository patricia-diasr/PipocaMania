import "./App.css";

import Banner from "./assets/components/Banner.jsx";
import Header from "./assets/components/Header.jsx";
import Menu from "./assets/components/Menu.jsx";
import MovieDetail from "./assets/components/MovieDetail.jsx";
import Submenu from "./assets/components/Submenu.jsx";

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <main>
                <Banner />
                <Submenu />
                <MovieDetail />
            </main>
        </div>
    );
}

export default App;
