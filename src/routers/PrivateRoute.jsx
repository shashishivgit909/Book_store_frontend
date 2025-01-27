import React from 'react'
import { Navigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
function PrivateRoute({ children }) {
    const { currentUser } = useAuth();
    if (!currentUser) {
        return <Navigate to="/login" />
    } else {
        return children;
    }
}

export default PrivateRoute
