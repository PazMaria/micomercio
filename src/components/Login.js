import React from 'react'
import { Link } from "react-router-dom"

function Login() {
    const onHandleSubmit = () => {
        document.querySelectorAll('input').forEach(ele => ele.value = '')
    }
    return (
        <div className="form">
            <h2>Login</h2>
            <form>
                <label htmlFor='email'>Email</label>
                <input id='email' type='email' name='email' ></input>
                <label htmlFor='password'>Contraseña</label>
                <input id='password' type='password' name='password' ></input>
                
                <button type='button' className='boton' onClick={onHandleSubmit} ><Link to={"/"}>Login</Link></button>
            </form>
        </div>
    )
}

export default Login
