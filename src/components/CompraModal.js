import React from 'react'
import { Link } from "react-router-dom"

const CompraModal = ({ setOpenModal }) => {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="title">
                    <h3>Gracias por su compra</h3>
                </div>
                <div className="body">
                    <p>La transaccion ha sido efectuada exitosamente</p>
                </div>
                <div className="footer">
                    <button className='boton' onClick={() => {setOpenModal(false)}}><Link to={"/"}>Continuar</Link></button>
                </div>
            </div>
        </div>
    )
}

export default CompraModal
