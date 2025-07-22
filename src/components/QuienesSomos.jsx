import React from 'react'
import logo from '../assets/img/ferreteriateresa.png'

const QuienesSomos = () => (
  <section id="quienes-somos">
    <h2>¿Quiénes somos?</h2>
    <p>
      En Ferretería Teresa somos una empresa familiar con más de 20 años de trayectoria al servicio de la comunidad. Nacimos con el objetivo de ser mucho más que una tienda de herramientas: queremos ser un aliado confiable en cada proyecto de construcción, reparación o mejora que emprendan nuestros clientes, ya sea en el hogar, en una obra o en su lugar de trabajo.
    </p>
    <p>
      Desde nuestros inicios, hemos trabajado con dedicación para ofrecer productos de alta calidad, un amplio stock de materiales, y una atención cercana y personalizada. Nuestro equipo está conformado por personas comprometidas, con vocación de servicio y conocimiento técnico, dispuestas a brindar asesoría y soluciones prácticas a cada necesidad.
    </p>
    <p>
      Nos enorgullece haber crecido junto a nuestros clientes, adaptándonos a los avances del rubro y manteniendo siempre la calidez que nos caracteriza. A través de los años, hemos incorporado nuevas líneas de productos, herramientas especializadas, servicio de despacho a domicilio y tecnologías que nos permiten mejorar la experiencia de compra.
    </p>
    <p>
      En Ferretería Teresa creemos que los grandes resultados comienzan con pequeños detalles, por eso cuidamos cada aspecto de nuestro servicio. Nuestra misión es seguir acompañándote con responsabilidad, cercanía y profesionalismo en cada uno de tus proyectos. Porque más que vender, nos dedicamos a construir confianza.
    </p>
    <ul>
      <li>Atención personalizada y asesoría técnica</li>
      <li>Amplio catálogo de productos de calidad</li>
      <li>Precios accesibles y promociones frecuentes</li>
      <li>Despacho a domicilio eficiente y puntual</li>
      <li>Más de 20 años de experiencia en el rubro</li>
      <li>Compromiso con la mejora continua y la innovación</li>
      <li>Equipo capacitado y enfocado en el cliente</li>
      <li>Ambiente familiar y trato cordial</li>
    </ul>
    <a href="https://www.sodimac.cl/sodimac-cl" target="_blank">
      <img src={logo} alt="Ferretería Teresa" className="imagen-quienes" />
    </a>
  </section>
)

export default QuienesSomos