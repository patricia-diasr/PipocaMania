import { Outlet } from "react-router-dom";

import Submenu from "../components/Submenu";
import Banner from "../components/Banner";

function Movie() {
    return (
        <>
            <Banner />
            <Submenu />
            <Outlet />
        </>
    );
}

export default Movie;
