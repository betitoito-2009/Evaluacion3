import React, { useState } from 'react';

// Catálogo con imagen, precio y código
const catalogo = {
  "Martillo": {
    precio: 5000,
    imagen: "https://media.falabella.com/sodimacCL/5432103_001/w=1500,h=1500,fit=pad",
    codigo: "F001"
  },
  "Taladro": {
    precio: 25000,
    imagen: "https://media.falabella.com/falabellaCL/113508805_01/w=1500,h=1500,fit=pad",
    codigo: "F002"
  },
  "Clavos": {
    precio: 1500,
    imagen: "https://media.falabella.com/sodimacCL/85820_001/w=1500,h=1500,fit=pad",
    codigo: "F003"
  },
  "Esmeril": {
    precio: 35500,
    imagen: "https://media.falabella.com/sodimacCL/7309465_01/w=1500,h=1500,fit=pad",
    codigo: "F004"
  },
  "Compresor": {
    precio: 255000,
    imagen: "https://media.sodimac.cl/sodimacCL/83291_001/width=240,height=240,quality=70,format=webp,fit=pad",
    codigo: "F006"
  },
  "Maquina de soldar": {
    precio: 75500,
    imagen: "https://media.sodimac.cl/sodimacCL/7464584_001/width=240,height=240,quality=70,format=webp,fit=pad",
    codigo: "F005"
  },
  "Set de herramientas": {
    precio: 195500,
    imagen: "https://media.sodimac.cl/falabellaCL/119966641_01/width=240,height=240,quality=70,format=webp,fit=pad",
    codigo: "F009"
  },
  "Moto podadora": {
    precio: 40000,
    imagen: "https://media.sodimac.cl/falabellaCL/113897031_01/width=240,height=240,quality=70,format=webp,fit=pad",
    codigo: "F010"
  }
};

const Ventas = ({ agregarVenta }) => {
  const [cliente, setCliente] = useState('');
  const [productos, setProductos] = useState([{ producto: '', cantidad: 1 }]);
  const [mensaje, setMensaje] = useState('');
  const [ventaReciente, setVentaReciente] = useState(null);

  const agregarProducto = () => {
    setProductos([...productos, { producto: '', cantidad: 1 }]);
  };

  const eliminarProducto = (index) => {
    setProductos(productos.filter((_, i) => i !== index));
  };

  const actualizarProducto = (index, campo, valor) => {
    const nuevosProductos = [...productos];
    nuevosProductos[index][campo] = campo === 'cantidad' ? Number(valor) : valor;
    setProductos(nuevosProductos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cliente.trim()) {
      alert('Ingrese el nombre del cliente');
      return;
    }

    for (const p of productos) {
      if (!p.producto || p.cantidad < 1) {
        alert('Complete todos los productos con cantidad válida');
        return;
      }
    }

    let resumen = '';
    let total = 0;
    productos.forEach(({ producto, cantidad }) => {
      resumen += `${producto} (x${cantidad}), `;
      total += catalogo[producto].precio * cantidad;
    });

    resumen = resumen.slice(0, -2);
    const codigo = 'V' + Math.floor(100000 + Math.random() * 900000);

    const nuevaVenta = {
      cliente,
      productos: resumen,
      total,
      codigo
    };

    agregarVenta(codigo, {
      cliente,
      productos: resumen,
      total
    });

    setVentaReciente(nuevaVenta);
    setMensaje(`Venta registrada con éxito. Código: ${codigo}`);
    alert(`Con su código, diríjase al área de despacho. Código de venta: ${codigo}`);

    setCliente('');
    setProductos([{ producto: '', cantidad: 1 }]);
  };

  return (
    <section id="ventas">
      <h2>Catálogo de Productos</h2>
      <div className="catalogo-productos">
        {Object.entries(catalogo).map(([nombre, datos]) => (
          <div key={datos.codigo} className="producto">
            <img src={datos.imagen} alt={nombre} />
            <p><strong>Código:</strong> {datos.codigo}</p>
            <p><strong>{nombre}</strong></p>
            <p>Precio: ${datos.precio.toLocaleString()}</p>
          </div>
        ))}
      </div>

      <h2>Registro de Ventas</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del Cliente"
          value={cliente}
          onChange={e => setCliente(e.target.value)}
          required
        />
        {productos.map((p, i) => (
          <div key={i} className="grupo-producto">
            <select
              value={p.producto}
              onChange={e => actualizarProducto(i, 'producto', e.target.value)}
              required
            >
              <option value="">Seleccione un producto</option>
              {Object.keys(catalogo).map((prod) => (
                <option key={prod} value={prod}>
                  {prod} - ${catalogo[prod].precio.toLocaleString()}
                </option>
              ))}
            </select>
            <input
              type="number"
              min="1"
              value={p.cantidad}
              onChange={e => actualizarProducto(i, 'cantidad', e.target.value)}
              required
            />
            {productos.length > 1 && (
              <button type="button" onClick={() => eliminarProducto(i)}>Eliminar</button>
            )}
          </div>
        ))}
        <button type="button" onClick={agregarProducto}>Agregar Producto</button>
        <button type="submit">Finalizar Compra</button>
      </form>

      {ventaReciente && (
        <>
          <h3>Venta Registrada</h3>
          <table>
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Productos</th>
                <th>Total ($)</th>
                <th>Código</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{ventaReciente.cliente}</td>
                <td>{ventaReciente.productos}</td>
                <td>${ventaReciente.total.toLocaleString()}</td>
                <td>{ventaReciente.codigo}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
      <p>{mensaje}</p>
    </section>
  );
};

export default Ventas;
