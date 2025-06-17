// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../auth"; // 👈 import from auth.js

const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated()) {
        return <Navigate to="/login" replace />;
    }
    return children;
};

export default ProtectedRoute;
