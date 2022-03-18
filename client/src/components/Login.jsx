import React, { useState } from 'react'
import firebaseApp from '../credentials'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithRedirect,
    GoogleAuthProvider
} from 'firebase/auth'
import { getFirestore, doc, setDoc } from 'firebase/firestore'


const auth = getAuth(firebaseApp)
const firestore = getFirestore(firebaseApp)

const googleProvider = new GoogleAuthProvider();

export const Login = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState(true)
    const [isRegistre, setIsRegistre] = useState(false)
    async function handlerOnSumbmit(e) {
        e.preventDefault();
        if (isRegistre) {
            const userCreate = await createUserWithEmailAndPassword(auth, user, password).then()
            const docuRef = doc(firestore, `/Usuarios/${userCreate.user.uid}`)
            role ? setDoc(docuRef, { user: user, role:'client'}) : setDoc(docuRef, { user: user, role:'provider'}) 
        } else {
            const userSignIn = await signInWithEmailAndPassword(auth, user, password).then()
            console.log(userSignIn)
        }

    }
    return (
        <>
            <h1>{isRegistre ? 'Registrarse' : 'Inciar Sesion'}</h1>
            <form onSubmit={handlerOnSumbmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input onChange={e => setUser(e.target.value)} type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input onChange={e => setPassword(e.target.value)} type="password" className="form-control" id="password" />
                </div>
                <div className="form-check form-switch">
                    {role ? 'cleinte ' : 'proveedor'}
                    <input onChange={() => setRole(!role)} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"  />
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Activarlo si es una cuenta de proveedor</label>
                </div>
                <button type="submit" className="btn btn-primary">{isRegistre ? 'Registrarse' : 'Inciar Sesion'}</button>
            </form>

            <button onClick={() => setIsRegistre(!isRegistre)} className="btn btn-primary">{isRegistre ? 'Ya tienes una cuenta?, Inicia ' : 'No tienes cuenta?, Registrate'}</button>
            <button onClick={() => { signInWithRedirect(auth, googleProvider) }} type="button" className="btn btn-primary">Google</button>
        </>

    )
}
