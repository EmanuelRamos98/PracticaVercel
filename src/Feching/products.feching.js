const obtenerProductos = async ()=>{
    const response = await fetch(
        '/data.json',
        {
            method:'GET'
        }
    )
    return await response.json()
}
export {obtenerProductos}