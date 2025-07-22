import React from 'react'
import inicio1 from '../assets/img/inicio1.jpg'
import inicio2 from '../assets/img/inicio2.jpg'
import inicio3 from '../assets/img/inicio3.jpg'
import inicio4 from '../assets/img/inicio4.jpg'
import inicio5 from '../assets/img/inicio5.jpg'
import inicio6 from '../assets/img/inicio6.jpg'
import CatalogoApi from './CatalogoApi'

const Inicio = () => (
  <section id="inicio">
    <h1>¡Bienvenido a Ferretería Teresa!</h1>
    <p>
      Ferretería Teresa te damos la más cordial bienvenida a nuestro sitio web, donde encontrarás todo lo que necesitas para construir, reparar, remodelar o mejorar tus espacios. Somos una empresa familiar con más de 20 años de experiencia en el rubro ferretero, comprometida con brindar productos de alta calidad y un servicio personalizado que se adapta a tus necesidades.
    </p>
    <p>
      Contamos con una amplia variedad de herramientas, materiales de construcción, artículos eléctricos, pinturas, accesorios de plomería, ferretería en general y mucho más. Ya seas un maestro profesional, un técnico especializado o alguien que ama los proyectos en casa, en Ferretería Teresa encontrarás lo necesario para hacer realidad tus ideas.
    </p>
    <p>
      Nos caracteriza la atención cercana, los precios competitivos y un firme compromiso con la excelencia. Además, ofrecemos servicios de asesoría, despacho a domicilio y promociones especiales para apoyar tus proyectos, grandes o pequeños.
    </p>
    <p>
      Gracias por preferirnos. En Ferretería Teresa, tu confianza es nuestra mejor herramienta.
    </p>

    {/* 👇 Aquí va el catálogo API */}
    <CatalogoApi />

    <div className="galeria">
      <img src={inicio1} alt="Herramientas variadas" />
      <img src={inicio2} alt="Materiales de construcción" />
      <img src={inicio3} alt="Interior de la ferretería" />
      <img src={inicio4} alt="Herramientas 4" />
      <img src={inicio5} alt="Herramientas 5" />
      <img src={inicio6} alt="Herramientas 6" />
    </div>
  </section>
)

export default Inicio

  