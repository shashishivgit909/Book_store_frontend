import React from 'react'
import { Navigate ,useNavigate} from "react-router-dom";

import { useAuth } from '../context/AuthContext';
function PrivateRoute({ children }) {
    const { currentUser } = useAuth();
    const navigate =useNavigate();
    if (!currentUser) {
        return <Navigate to="/login" />
        // navigate("/login");
    } else {
        return children;
    }
}

export default PrivateRoute;    
