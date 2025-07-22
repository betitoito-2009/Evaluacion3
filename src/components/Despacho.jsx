import React, { useState } from 'react';

const Despacho = ({ ventas, registrarDespacho }) => {
  const [codigoVenta, setCodigoVenta] = useState('');
  const [datosDespacho, setDatosDespacho] = useState({
    cliente: '',
    email: '',
    telefono: '',
    direccion: '',
    producto: '',
    fecha: '',
    metodo: '',
    confirmar: false,
  });
  const [mensaje, setMensaje] = useState('');
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [despachosSesion, setDespachosSesion] = useState([]); // ⬅️ Solo los de esta sesión

  const handleBuscar = (e) => {
    e.preventDefault();
    const venta = ventas[codigoVenta.trim()];

    if (!venta) {
      alert('Código de venta no encontrado.');
      setMostrarFormulario(false);
      return;
    }

    setDatosDespacho({
      cliente: venta.cliente,
      producto: venta.productos,
      email: '',
      telefono: '',
      direccion: '',
      fecha: '',
      metodo: '',
      confirmar: false,
    });
    setMostrarFormulario(true);
    setMensaje('');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDatosDespacho(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    if (!emailRegex.test(datosDespacho.email)) {
      alert('Correo electrónico no válido.');
      return;
    }

    if (!datosDespacho.confirmar) {
      alert('Debes confirmar la información.');
      return;
    }

    registrarDespacho(datosDespacho); // Guarda en localStorage vía App
    setDespachosSesion([...despachosSesion, datosDespacho]); // Solo en sesión

    setMensaje('Despacho registrado con éxito.');
    setMostrarFormulario(false);
    setCodigoVenta('');
    setDatosDespacho({
      cliente: '',
      email: '',
      telefono: '',
      direccion: '',
      producto: '',
      fecha: '',
      metodo: '',
      confirmar: false,
    });
  };

  return (
    <section id="despacho">
      <h2>Despacho</h2>

      <form onSubmit={handleBuscar}>
        <label>
          Código de Venta:
          <input
            type="text"
            value={codigoVenta}
            onChange={e => setCodigoVenta(e.target.value)}
            required
          />
        </label>
        <button type="submit">Buscar Venta</button>
      </form>

      {mostrarFormulario && (
        <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
          <label>
            Cliente:
            <input type="text" name="cliente" value={datosDespacho.cliente} readOnly />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={datosDespacho.email}
              onChange={handleChange}
              required
              placeholder="tuemail@dominio.cl"
            />
          </label>

          <label>
            Teléfono:
            <input
              type="tel"
              name="telefono"
              value={datosDespacho.telefono}
              onChange={handleChange}
              required
              placeholder="Teléfono"
            />
          </label>

          <label>
            Dirección:
            <input
              type="text"
              name="direccion"
              value={datosDespacho.direccion}
              onChange={handleChange}
              required
              placeholder="Dirección de entrega"
            />
          </label>

          <label>
            Producto:
            <textarea
              name="producto"
              value={datosDespacho.producto}
              readOnly
              rows={3}
            />
          </label>

          <label>
            Fecha de entrega:
            <input
              type="date"
              name="fecha"
              value={datosDespacho.fecha}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Método de pago:
            <select
              name="metodo"
              value={datosDespacho.metodo}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione un método</option>
              <option value="Efectivo">Efectivo</option>
              <option value="Tarjeta">Tarjeta</option>
              <option value="Transferencia">Transferencia</option>
            </select>
          </label>

          <label>
            <input
              type="checkbox"
              name="confirmar"
              checked={datosDespacho.confirmar}
              onChange={handleChange}
              required
            />
            Confirmo que la información es correcta
          </label>

          <button type="submit">Registrar Despacho</button>
        </form>
      )}

      {mensaje && <p className="mensaje">{mensaje}</p>}

      {despachosSesion.length > 0 && (
        <>
          <h3>Despachos Registrados (Sesión Actual)</h3>
          <table>
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Email</th>
                <th>Teléfono</th>
                <th>Dirección</th>
                <th>Producto</th>
                <th>Fecha</th>
                <th>Método</th>
              </tr>
            </thead>
            <tbody>
              {despachosSesion.map((d, i) => (
                <tr key={i}>
                  <td>{d.cliente}</td>
                  <td>{d.email}</td>
                  <td>{d.telefono}</td>
                  <td>{d.direccion}</td>
                  <td style={{ whiteSpace: 'pre-line' }}>{d.producto}</td>
                  <td>{d.fecha}</td>
                  <td>{d.metodo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </section>
  );
};

export default Despacho;
