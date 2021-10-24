import React from 'react'
import { Link } from "react-router-dom"

function SignUp() {
    const onHandleSubmit = () => {
        document.querySelectorAll('input').forEach(ele => ele.value = '')
    }
    return (
        <div className="form">
            <h2>Crear cuenta</h2>
            <form>
                <label htmlFor='nombre'>Nombre</label>
                <input id='nombre' type='text' name='nombre' className='nombre'></input>
                <label htmlFor='apellido' className='apellido'>Apellido</label>
                <input id='apellido' type='text' name='apellido' className='nombre'></input>
                <label htmlFor='telefono'>Telefono</label>
                <input id='telefono' type='text' name='telefono' ></input>
                <label htmlFor='email'>Email</label>
                <input id='email' type='email' name='email' ></input>
                <label htmlFor='password'>Contraseña</label>
                <input id='password' type='password' name='password' ></input>
                <label htmlFor='password'>Confirmar contraseña</label>
                <input id='password2' type='password' name='password' ></input>
                <button type='button' className='boton' onClick={onHandleSubmit} ><Link to={"/"}>Registrarse</Link></button>
            </form>
        </div>
    )
}

export default SignUp
