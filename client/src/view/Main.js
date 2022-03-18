import React, { useState } from 'react'
import { HomeView } from './HomeView'
import { LoginView } from './LoginView'

import firebaseApp from '../credentials'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, doc, getDoc} from 'firebase/firestore'

const auth = getAuth(firebaseApp)
const firestore = getFirestore(firebaseApp)

export const Main = () => {
    const [userAuth, setUserAuth] = useState(null)
    const [user, setUser] = useState(null)
    async function getRole(uid){
      const docuRef = doc(firestore, `/Usuarios/${uid}`);
      const docuCifrada = await getDoc(docuRef);
      const role = docuCifrada.data().role
      return role
    }
    onAuthStateChanged(auth, (userFirebase) => {
      if(userFirebase){
        if(!user){
          getRole(userFirebase.uid).then(role =>{
            const userData = {
              uid: userFirebase.uid,
              emai: userFirebase.email,
              role: role
            }
            setUser(userData);
            console.log(userData)
          })
        }
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
