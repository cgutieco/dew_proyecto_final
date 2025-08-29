import "./Productos.css"
import { datos } from "../../../datos";
import { useState } from "react";
import { useCarrito } from '../../header/CarritoContext.jsx';
const Productos = () => {

  const { agregarAlCarrito } = useCarrito();

  const agregar = (producto) => {
    agregarAlCarrito(producto);  
  };



  const [productos, setProductos] = useState(

    datos.slice(0, 9).map((p) => ({ ...p, cantidad: 1 }))

  );

  const aumentar = (index) => {
    const nuevos = [...productos];
    nuevos[index].cantidad += 1;
    setProductos(nuevos);
  };

  const disminuir = (index) => {
    const nuevos = [...productos];
    if (nuevos[index].cantidad > 1) {
      nuevos[index].cantidad -= 1;
      setProductos(nuevos);
    }
    else {
      alert("La cantidad no puede ser menor a 1");
    }
  };


  return (
    <div className="productos-container">
      {productos.map((producto, index) => (
        <div key={index} className="card">
          <img
            src={producto.urlImage}
            alt={producto.nombreProducto}
            className="card-img"
          />
          <h3 className="card-title">{producto.nombreProducto}</h3>
          <p className="card-precio">S/{producto.precio}</p>

          <div className="card-cantidad">
            <div>CANTIDAD</div>

            <div className="cantidad-controles">


              <button className="boton-cantidad disminuir" onClick={() => disminuir(index)}>-</button>

              <div className="contador-cantidad">{producto.cantidad}</div>

              <button className="boton-cantidad aumentar" onClick={() => aumentar(index)}>+</button>


            </div>

          </div>

          <button className="btn-agregar" onClick={() => agregar(producto)}>AGREGAR</button>
        </div>
      ))}
    </div>
  )
}

export default Productos
