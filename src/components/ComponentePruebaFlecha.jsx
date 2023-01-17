import React from 'react'

const ComponentePruebaFlecha = ({nombre, apellido, edad, children, contador, setContador}) => {

  const handleContador = () => {
    setContador(contador + 1);
  }

  return (
    <>
        <h1>Hola desde el Componente</h1>
        <p>Nombre: {nombre}</p>
        <p>Apellido: {apellido}</p>
        <p>Edad: {edad}</p>
        <p onClick={handleContador}>El contador va en: <strong>{contador}</strong></p>
        <hr />
        {children}
    </>
  )
}

export default ComponentePruebaFlecha