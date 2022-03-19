import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../context/UseAuth'

export const Home = () => {
  const { logout } = useAuth();
  return (
    <div>
      <h4>Sesion iniciada</h4>
      <button onClick={logout} className='btn btn-info'>Cerrar sesión</button>
      <Link className='btn btn-warning ms-2' to={'/stationedit'}>Editar Estaciones</Link>
    </div>
  )
}
