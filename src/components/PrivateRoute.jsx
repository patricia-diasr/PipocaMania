import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function useAuth() {
    const user = JSON.parse(localStorage.getItem("user"));
    return user;
}

function PrivateRoute({ requiredRole }) {
    const user = useAuth();

    if (!user || user.role !== requiredRole) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
}

export default PrivateRoute;
