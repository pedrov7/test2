import React, { useState } from 'react'
import { HomeView } from './HomeView'
import { LoginView } from './LoginView'

import firebaseApp from '../credentials' //credenciales firebase
import { getAuth, onAuthStateChanged } from 'firebase/auth' //autenticacion en firebase
import { getFirestore, doc, getDoc} from 'firebase/firestore' //base de datos en firebase

const auth = getAuth(firebaseApp)   //envia la infromacion a firebase en que base de datos vamos a trabajar y poder autenticar
const firestore = getFirestore(firebaseApp) //envia las credenciales al firestore

export const Main = () => {
    const [userAuth, setUserAuth] = useState(null) //guarda que usuario esta autenticado
    const [user, setUser] = useState(null)  //guardar los datos del usuario atenticado

    async function getRole(uid){        //espera respuesta de manera asincrona 
      const docuRef = doc(firestore, `/Usuarios/${uid}`); // enviar credenciales y buscar en el documento usuario y el id enviado
      const docuCifrada = await getDoc(docuRef); //descifra las credenciales e informacion que viene de la base de datos en firebase
      const role = docuCifrada.data().role  
      return role
    }
    
    onAuthStateChanged(auth, (userFirebase) => {  //envia auth y retorna si esta autenticado en userFirebase(retorna true or false)
      if(userFirebase){
        if(!user){
          getRole(userFirebase.uid).then(role =>{
            const userData = {
              uid: userFirebase.uid, // autenticacion
              email: userFirebase.email, // autenticacion
              role: role // base de datos
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
