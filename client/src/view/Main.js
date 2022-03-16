import React, { useState } from 'react'
import { HomeView } from './HomeView'
import { LoginView } from './LoginView'

import firebaseApp from '../credentials'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
const auth = getAuth(firebaseApp)

export const Main = () => {
    const [userAuth, setUserAuth] = useState(null)

    onAuthStateChanged(auth, (userFirebase) => {
      if(userFirebase){
        setUserAuth(userFirebase)
      }else{
        setUserAuth(null)
      }
    })
  return (
    <>
    {
        userAuth ? <HomeView/> : <LoginView/>
    }
    </>
  )
}
