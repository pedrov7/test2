import React from 'react'
import { Navigate } from 'react-router-dom';
import useAuth  from './UseAuth';

export const RequireAuth = ({ children }) => {
  const { authed } = useAuth()

    return authed ? (
        children 
        ) : (
            <Navigate to ='/'/>
        )
}