import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signin from "../pages/Signin";
import Movie from "../pages/Movie";
import NotFound from "../pages/NotFound";
import Tickets from "../pages/Tickets";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Lists from "../pages/Lists";
import Search from "../pages/Search";
import PrivateRoute from "../components/PrivateRoute";

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

                <Route element={<PrivateRoute requiredRole="client" />}>
                    <Route element={<AppLayout />}>
                        <Route path="/home" element={<Home />} />
                        <Route path="/lists" element={<Lists />} />
                        <Route path="/tickets" element={<Tickets />} />
                        <Route path="/movie/:movieId" element={<Movie />} />
                    </Route>
                </Route>

                <Route element={<PrivateRoute requiredRole="admin" />}>
                    <Route element={<AppLayout />}>
                        <Route path="/search" element={<Search />} />
                    </Route>
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
