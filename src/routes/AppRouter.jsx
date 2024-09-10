import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import PrivateRoute from "./privateRoute";

import Login from "../pages/Login";
import Signin from "../pages/Signin";

import Header from "../components/Header";
import Menu from "../components/Menu";

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signin" element={<Signin />} />

                <Route element={<PrivateRoute />}>
                    <Route
                        element={
                            <>
                                <Header />
                                <Menu />
                                <main>
                                    <Outlet />
                                </main>
                            </>
                        }
                    >
                        {/* <Route path="/profile" element={<ProfilePage />} /> */}
                    </Route>
                </Route>

                {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>
        </Router>
    );
}

export default AppRouter;
