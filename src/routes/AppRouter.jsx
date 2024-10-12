import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signin from "../pages/Signin";
import Movie from "../pages/Movie";
import MovieDetail from "../pages/MovieDetail";
import MovieCheckout from "../pages/MovieCheckout";
import NotFound from "../pages/NotFound";
import Tickets from "../pages/Tickets";

import Header from "../components/Header";
import Menu from "../components/Menu";

function AppLayout() {
    return (
        <>
            <Header />
            <Menu />
            <main>
                <Outlet />
            </main>
        </>
    );
}

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />

                <Route path="/login" element={<Login />} />
                <Route path="/signin" element={<Signin />} />

                <Route element={<AppLayout />}>
                    <Route path="/tickets" element={<Tickets />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="movie/:movieId" element={<Movie />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
