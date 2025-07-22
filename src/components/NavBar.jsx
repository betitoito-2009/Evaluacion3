// src/components/NavBar.jsx
import React from 'react'

const NavBar = ({ cambiarSeccion }) => {
  return (
    <nav>
      <button onClick={() => cambiarSeccion('inicio')}> 🏠 Inicio</button>
      <button onClick={() => cambiarSeccion('quienes-somos')}>🧑‍🔧 Quiénes Somos</button>
      <button onClick={() => cambiarSeccion('contacto')}>✉️  Contacto</button>
      <button onClick={() => cambiarSeccion('ventas')}>🛒 Ventas</button>
      <button onClick={() => cambiarSeccion('despacho')}> 🚚 Despacho</button>
    </nav>
  )
}

export default NavBar
