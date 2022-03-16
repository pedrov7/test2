import React from 'react'

import firebaseApp from '../credentials'
import { getAuth, signOut } from 'firebase/auth'
const auth = getAuth(firebaseApp)

export const Home = () => {
  return (
    <div>
      <h4>Sesion iniciada</h4>
      <button onClick={() => signOut(auth)} className='btn btn-info'>Cerrar sesion</button>
    
    </div>
  )
}
