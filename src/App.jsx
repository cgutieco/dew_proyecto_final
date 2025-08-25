import { Route, Router, Routes } from "react-router-dom"
import Header from "./componentes/Header/Header"
import Home from "./componentes/pages/home/Home"
import Productos from "./componentes/pages/productos/Productos"
import Contacto from "./componentes/pages/contacto/Contacto"
import Footer from "./componentes/footer/Footer"
function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
