import React, { useState } from 'react'
import firebaseApp from '../credentials'
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signInWithRedirect,
    GoogleAuthProvider
 } from 'firebase/auth'


const auth = getAuth(firebaseApp)
const googleProvider = new GoogleAuthProvider();

export const Login = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [isRegistre, setIsRegistre] = useState(false)
    async function handlerOnSumbmit(e) {
        e.preventDefault();
        if (isRegistre) {
            const userCreate = await createUserWithEmailAndPassword(auth, user, password)
        } else {
            signInWithEmailAndPassword(auth, user, password)
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
                <button type="submit" className="btn btn-primary">{isRegistre ? 'Registrarse' : 'Inciar Sesion'}</button>
            </form>

            <button onClick={() => setIsRegistre(!isRegistre)} className="btn btn-primary">{isRegistre ? 'Ya tienes una cuenta?, Inicia ' : 'No tienes cuenta?, Registrate'}</button>
            <button onClick={()=>{signInWithRedirect(auth, googleProvider)}} type="button" className="btn btn-primary">Google</button>
        </>

    )
}
