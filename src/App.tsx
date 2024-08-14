import "./App.css";

import Header from "./assets/components/Header.js";
import Menu from "./assets/components/Menu.js";
import Banner from "./assets/components/Banner.js";

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Banner />
        </div>
    );
}

export default App;
