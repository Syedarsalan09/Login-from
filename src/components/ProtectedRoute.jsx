import React from 'react';
import { Navigate } from 'react-router-dom';

export function ProtectedRoute({isAuthenticated,children}) {return isAuthenticated?children:<Navigate to="/login" replace/>}
