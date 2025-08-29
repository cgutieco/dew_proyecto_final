import './Header.css'
import { Link } from 'react-router-dom'
import { useCarrito } from './CarritoContext.jsx';
import { useState } from 'react';


const Header = () => {
  const { carrito, eliminarDelCarrito, vaciarCarrito } = useCarrito();
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  return (
    <header className='header'>
        <h1><Link to="/">AI</Link></h1>
        <nav className='nav'>
            <ul className='ul'>
                <li className='li'><Link to="/home">INICIO</Link></li>
                <li className='li'><Link to="/productos">PRODUCTOS</Link></li>
                <li className='li'><Link to="/contacto">CONTACTO</Link></li>
            </ul>
        </nav>


        <div className='carrito-contenedor' >
          <div className='contador'>
            {carrito.reduce((acc, p) => acc + p.cantidad, 0)}
          </div>

          <button 
            className='carrito'
            onClick={() => setMostrarCarrito(!mostrarCarrito)}
          >
            🛒
          </button>

          {mostrarCarrito && (

            
            <div className='carrito-dropdown'>
              {carrito.length === 0 ? (
                <p>Tu carrito está vacío</p>
              ) : (
                <>
                  {carrito.map((p) => (
                    <div key={p.id} className='carrito-item'>
                      <span>{p.cantidad}</span>
                      <span className='carrito-nombre'>{p.nombreProducto}</span>
                      <span className='carrito-precio'>S/{p.precio}</span>
                      <button className='borrar' onClick={() => eliminarDelCarrito(p.id)}>X</button>
                    </div>
                  ))}
                  <div className='carrito-total'>
                    Total: S/{total}
                  </div>
                  <button className='vaciar' onClick={vaciarCarrito}>
                    Vaciar Carrito
                  </button>
                </>
              )}
            </div>
          )}
        </div>
    </header>
  )
}

export default Header;