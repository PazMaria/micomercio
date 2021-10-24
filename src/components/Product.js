import React from 'react'
import { Link } from "react-router-dom"


const Product = (props) => {
    const { prod } = props

    return (
        <div className='productCard' >
            <h3>{prod.title}</h3>
            <p>$ {prod.price}</p>
            <img src={prod.image} alt={'product'} width={'100px'} height={'100px'}/>
            <button className='compra'><Link to={{pathname:"/details/", state:{prod: prod}}}>Comprar</Link></button>
        </div>
    )
}

export default Product
