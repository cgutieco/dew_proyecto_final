import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CarritoProvider } from "./componentes/header/CarritoContext.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/dew_proyecto_final/">
    <CarritoProvider>
      <App />
    </CarritoProvider>
  </BrowserRouter>
)
