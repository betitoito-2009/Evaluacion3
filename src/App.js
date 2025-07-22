import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Inicio from './components/Inicio'
import QuienesSomos from './components/QuienesSomos'
import Contacto from './components/Contacto'
import Ventas from './components/Ventas'
import Despacho from './components/Despacho'
import Footer from './components/Footer'
import './styles/style.css'

function App() {
  const [seccion, setSeccion] = useState('inicio')
  const [ventas, setVentas] = useState({})

  // Cargar ventas desde localStorage al iniciar
  useEffect(() => {
    const ventasGuardadas = localStorage.getItem('ventas')
    if (ventasGuardadas) {
      setVentas(JSON.parse(ventasGuardadas))
    }
  }, [])

  // Guardar ventas nuevas
  const agregarVenta = (codigo, datos) => {
    const nuevasVentas = { ...ventas, [codigo]: datos }
    setVentas(nuevasVentas)
    localStorage.setItem('ventas', JSON.stringify(nuevasVentas))
  }
  const [datosDespacho, setDatosDespacho] = useState([])

useEffect(() => {
  const datosGuardados = localStorage.getItem('despachos')
  if (datosGuardados) {
    setDatosDespacho(JSON.parse(datosGuardados))
  }
}, [])


const registrarDespacho = (nuevoDespacho) => {
  const nuevosDatos = [...datosDespacho, nuevoDespacho]
  setDatosDespacho(nuevosDatos)
  localStorage.setItem('despachos', JSON.stringify(nuevosDatos))
}

const [mensajes, setMensajes] = useState(() => {
  const datosGuardados = localStorage.getItem('mensajesContacto');
  return datosGuardados ? JSON.parse(datosGuardados) : [];
});



const renderSeccion = () => {
    switch (seccion) {
      case 'inicio':
        return <Inicio />
      case 'quienes-somos':
        return <QuienesSomos />
      case 'contacto':
        return <Contacto setMensajes={setMensajes} mensajes={mensajes} />
      case 'ventas':
        return <Ventas agregarVenta={agregarVenta} ventas={ventas} />
      case 'despacho':
        return <Despacho ventas={ventas} registrarDespacho={registrarDespacho} datosDespacho={datosDespacho} />

      default:
        return <Inicio />
    }
  }

  return (
    <>
      <Header />
      <NavBar cambiarSeccion={setSeccion} />
      <main>
        {renderSeccion()}
      </main>
      <Footer />
    </>
  )
}

export default App
