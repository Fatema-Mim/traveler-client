import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
      const { user,admin, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) {
        return <p>Wait.....</p>
    }
    if(user?.email && admin){
        return children;
    }
    return <Navigate to="/" state={{ from: location }} />;
};

export default AdminRoute;