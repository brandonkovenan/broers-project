import { Navigate, Outlet } from "react-router-dom";

export function PrivateRoute() {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

    return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
}
