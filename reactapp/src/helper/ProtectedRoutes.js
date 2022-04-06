import React from 'react';
import { Outlet,Navigate } from 'react-router-dom';
import { isAuthenticated } from './Authentication';

function ProtectedRoutes(props) {
    return isAuthenticated()?<Outlet/>:<Navigate to="/signin" />;
}

export default ProtectedRoutes;