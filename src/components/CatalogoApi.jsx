
import React, { useState, useEffect } from 'react';

const CatalogoApi = () => {
  const [productos, setProductos] = useState([]);
  const [seleccionado, setSeleccionado] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(err => console.error('Error cargando productos:', err));
  }, []);

  const manejarSeleccion = (e) => {
    const idSeleccionado = parseInt(e.target.value);
    const producto = productos.find(p => p.id === idSeleccionado);
    setSeleccionado(producto);
  };

  return (
    <div style={{ textAlign: 'center', margin: '2rem auto' }}>
      <h2>"EJEMPLO DE API"</h2>

      <select onChange={manejarSeleccion} defaultValue="">
        <option value="" disabled>-- Elige un producto --</option>
        {productos.map(producto => (
          <option key={producto.id} value={producto.id}>
            {producto.title}
          </option>
        ))}
      </select>

      {seleccionado && (
        <div style={{ marginTop: '2rem' }}>
          <h3>{seleccionado.title}</h3>
          <img
            src={seleccionado.image}
            alt={seleccionado.title}
            style={{ maxWidth: '200px', height: 'auto' }}
          />
          <p><strong>Precio:</strong> ${seleccionado.price}</p>
          <p><strong>Descripción:</strong> {seleccionado.description}</p>
        </div>
      )}
    </div>
  );
};

export default CatalogoApi;

