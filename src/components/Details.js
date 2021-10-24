import React from 'react'
import { useLocation } from "react-router-dom"


function Details() {
    const location = useLocation()
    const {prod} = location.state

    const onHandleClick = () => {
        alert('Gracias por su compra')
    }

    return (
        <div className='detailsContainer'>
            <div className="imagen">
                <img src={prod.image} alt="producto" width={'300px'} height={'300px'} />
            </div>
            <div className='detalle'>
                <h1>{prod.title}</h1>
                <p>{`$ ${prod.price}`}</p>
                <p>{`${prod.rating.count} en stock`}</p>
                <p>{prod.description}</p>
                <button className='compra' onClick={onHandleClick}>Comprar</button>
            </div>
        </div>
    )

}

export default Details
