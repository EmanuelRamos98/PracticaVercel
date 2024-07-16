import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <h2>Logo</h2>
            <nav>
                <NavLink to={'/carrito'}>Carrito</NavLink>
                <NavLink to={'/contac'}>Contacto</NavLink>
            </nav>
        </header>
    )
}

export default Navbar