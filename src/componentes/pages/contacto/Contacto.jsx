import './Contacto.css'


const Contacto = () => {
  return (
    <div className="contenedor-contacto">

      <h1 className="titulo-contacto">CONTÁCTANOS</h1>

      <div className="formulario-contacto">

        <div className="campo-fila">
          <input  placeholder="nombres" className="campo-texto" />
          <input  placeholder="apellidos" className="campo-texto" />
        </div>
        
        <input placeholder="email" className="campo-texto" />
        <input placeholder="telefono" className="campo-texto" />
        <textarea placeholder="mensaje" className="campo-mensaje"></textarea>

        <button className="boton-enviar">ENVIAR</button>

      </div>

    </div>
  );
};

export default Contacto;