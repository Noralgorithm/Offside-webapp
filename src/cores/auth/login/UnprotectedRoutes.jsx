import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const UnprotectedRoutes = () => {
  
  const user = useSelector(state => state.user);

  if (user.success) return <Navigate to="/dashboard" />

  return <Outlet />

};

export default UnprotectedRoutes;