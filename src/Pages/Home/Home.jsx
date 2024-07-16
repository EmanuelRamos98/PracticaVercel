import React, { useEffect, useState } from 'react'
import { Navbar } from '../../Components'
import { Link } from 'react-router-dom'
import { obtenerProductos } from '../../Feching/products.feching'

const Home = () => {

    useEffect(() => {
        setTimeout(() => {
            obtenerProductos()
                .then((productos) => {
                    console.log('productos', productos);
                    setListaProductos(productos)
                    setIsLoading(false)
                })
        },
            2000
        )
    },
        []
    )

    const [listaProductos, setListaProductos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    return (
        <div>
            <Navbar />
            {
                isLoading
                    ? <h2>Cargando...</h2>
                    : listaProductos.map(producto => {
                        return (
                            <div key={producto.id}>
                                <h2>{producto.titulo}</h2>
                                <span>Precio ${producto.precio}</span>
                                <Link to={'/detail/' + producto.id}>Ver detalle</Link>
                                <hr />
                            </div>
                        )
                    })}
        </div>
    )
}

export default Home