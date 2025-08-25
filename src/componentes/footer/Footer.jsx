import "./Footer.css"
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/" className="footer-link">INICIO</Link>
          <Link to="/productos" className="footer-link">PRODUCTOS</Link>
        </div>
        <div className="footer-logo">
          AI
        </div>
        <div className="footer-contact">
          <Link to="/contacto" className="footer-link">CONTACTO</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
