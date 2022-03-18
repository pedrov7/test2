import React from 'react'

import firebaseApp from '../credentials'
import { getAuth, signOut } from 'firebase/auth'
import { Link } from 'react-router-dom'

const auth = getAuth(firebaseApp)

export const Home = () => {
  return (
    <div>
      <h4>Sesion iniciada</h4>
      <button onClick={() => signOut(auth)} className='btn btn-info'>Cerrar sesion</button>
      <Link className='btn btn-warning ms-2' to={'/stationedit'}>Editar Estaciones</Link>
    </div>
  )
}
