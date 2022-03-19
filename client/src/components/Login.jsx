import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useAuth from '../context/UseAuth'

export const Login = () => {
    const navigate = useNavigate();
    const {login, loginWithGoogle} = useAuth();
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState(true)
    const [isRegistre, setIsRegistre] = useState(false)
    
    function handlerOnSumbmit(e) {
        e.preventDefault();
        login(isRegistre,user, password, role)
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
            <button onClick={loginWithGoogle} type="button" className="btn btn-primary">Google</button>
        </>

    )
}
