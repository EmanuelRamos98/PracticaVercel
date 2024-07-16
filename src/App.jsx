import React from 'react'

import { Route, Routes } from 'react-router-dom'
import { Carrito, Contac, Detail, Home } from './Pages'


const App = () => {
    return (
        <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/detail/:productId' element={<Detail/>}/>
            <Route path='/contac' element={<Contac/>}/>
            <Route path='/carrito' element={<Carrito/>}/>
        </Routes>
        </>
    )
}
export default App