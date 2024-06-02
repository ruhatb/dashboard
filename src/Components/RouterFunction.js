import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

function RouterFunction({ children }) {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" />;
  }

  try {
    jwtDecode(token);
    return children;
  } catch (error) {
    return <Navigate to="/login" />;
  }
}

export default RouterFunction;
