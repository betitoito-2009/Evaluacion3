import React, { useState } from 'react'

const Contacto = ({ mensajes, setMensajes }) => {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [telefono, setTelefono] = useState('')
  const [asunto, setAsunto] = useState('')
  const [mensaje, setMensaje] = useState('')

  const validarNombre = (nombre) => /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)
  const validarCorreo = (correo) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)
  const validarTelefono = (telefono) => /^\d{7,15}$/.test(telefono)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validarNombre(nombre)) {
      alert('El nombre no puede contener números ni caracteres especiales.')
      return
    }

    if (!validarCorreo(correo)) {
      alert('Por favor, ingresa un correo válido.')
      return
    }

    if (!validarTelefono(telefono)) {
      alert('Por favor, ingresa un teléfono válido (solo números, 7-15 dígitos).')
      return
    }

    if (!asunto.trim()) {
      alert('Por favor, ingresa un asunto.')
      return
    }

    if (!mensaje.trim()) {
      alert('Por favor, ingresa un mensaje.')
      return
    }

    const nuevoMensaje = {
      nombre,
      correo,
      telefono,
      asunto,
      mensaje,
      fecha: new Date().toLocaleString(),
    }

    const mensajesActualizados = [...mensajes, nuevoMensaje]
    setMensajes(mensajesActualizados)
    localStorage.setItem('mensajesContacto', JSON.stringify(mensajesActualizados))

    alert(`Gracias por tu mensaje, ${nombre}. Te responderemos pronto.`)

    // Limpiar formulario
    setNombre('')
    setCorreo('')
    setTelefono('')
    setAsunto('')
    setMensaje('')
  }

  return (
    <section id="contacto">
      <h2>Envíanos un mensaje</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="nombre"
          placeholder="Nombre completo"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          required
        />
        <input
          type="email"
          id="correo"
          placeholder="Correo electrónico"
          value={correo}
          onChange={e => setCorreo(e.target.value)}
          required
        />
        <input
          type="text"
          id="telefono"
          placeholder="Teléfono"
          value={telefono}
          onChange={e => setTelefono(e.target.value)}
          required
        />
        <input
          type="text"
          id="asunto"
          placeholder="Asunto"
          value={asunto}
          onChange={e => setAsunto(e.target.value)}
          required
        />
        <textarea
          id="mensaje"
          placeholder="Mensaje"
          rows="4"
          value={mensaje}
          onChange={e => setMensaje(e.target.value)}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}

export default Contacto
