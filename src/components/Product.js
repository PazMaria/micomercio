import React from 'react'
import { Link } from "react-router-dom"


const Product = (props) => {
    const { prod } = props

    return (
        <div className='productCard' >
            <h3>{prod.title}</h3>
            <p>$ {prod.price}</p>
            <img src={prod.image} alt={'product'} width={'100px'} height={'100px'}/>
            <button><Link to={"/details/" + prod.id}>Ver detalle</Link></button>
        </div>
    )
}

export default Product
