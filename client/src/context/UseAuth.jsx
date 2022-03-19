import React, { createContext, useContext, useState } from 'react'
import firebaseApp from '../credentials'
import { useNavigate } from 'react-router-dom'
import { getFirestore, doc, setDoc,getDoc } from 'firebase/firestore'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithRedirect,
    GoogleAuthProvider,
    signOut
} from 'firebase/auth'



const AuthContext = createContext();
const auth = getAuth(firebaseApp)
const firestore = getFirestore(firebaseApp)
const googleProvider = new GoogleAuthProvider();

function UseAuth () {
    
    
    const navigate = useNavigate();
    const [authed, setAuthed] = useState(false);
    const [token, setToken] = useState('')

    function loginWithGoogle (){
        signInWithRedirect(auth, googleProvider)
    }

    async function getRole(uid){        //espera respuesta de manera asincrona 
        const docuRef = doc(firestore, `/Usuarios/${uid}`); // enviar credenciales y buscar en el documento usuario y el id enviado
        const docuCifrada = await getDoc(docuRef); //descifra las credenciales e informacion que viene de la base de datos en firebase
        const role = docuCifrada.data().role  
        return role
      }

    async function login (isRegistre, user, password, role){
        if (isRegistre) {
            const userCreate = await createUserWithEmailAndPassword(auth, user, password).then()
            const docuRef = doc(firestore, `/Usuarios/${userCreate.user.uid}`)
            role ? setDoc(docuRef, { user: user, role:'client'}) : setDoc(docuRef, { user: user, role:'provider'}) 
        } else {
            await signInWithEmailAndPassword(auth, user, password)
            .then(data => {
                setAuthed(true);
                navigate('/stations')
                getRole(data.user.uid).then(role =>{
                    const userData = {
                      uid: data.user.uid, // autenticacion
                      email: data.user.email, // autenticacion
                      role: role // base de datos
                    }
                    setToken(userData);
                    
                  })
                  
                
            })
            .catch(err => 
                // console.log(err.code + ' & ' + err.message)
                {alert(err.message)
                setAuthed(false)}
            
           )
        }
    }
    const logout = () =>{
        setAuthed(false)
        setToken('')
        navigate('/')
        signOut(auth)
    }
    return {
        authed,
        login,
        logout,
        token,
        loginWithGoogle
    }
}

export function AuthProvider({children}){
    const auth = UseAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export default function AuthConsumer(){
    return useContext(AuthContext)
}