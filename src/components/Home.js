import {useEffect, useState} from 'react'
import Product from './Product'


function Home() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const loadProducts = async ()=>{
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setLoading(false)
        setProducts(data)
        
    }

    useEffect(()=>{
        loadProducts()
        
    },[])

    if (loading) {
        return (
            <div>
                loading...
            </div>
        )
    } else {
        return (
            <div className='container'>
                Listado de productos
                <div className='productContainer'>
                {products.map(product => <Product prod={product} key={product.id}/>)}
                </div>
            </div>
        )
    }
}

export default Home
