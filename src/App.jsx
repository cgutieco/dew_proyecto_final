import {Route, Routes} from "react-router-dom";
import Home from "./componentes/pages/home/Home";
import Productos from "./componentes/pages/productos/Productos";
import Contacto from "./componentes/pages/contacto/Contacto";
import Login from "./componentes/pages/Login";
import Layout from "./componentes/ui/Layout";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route element={<Layout/>}>
                <Route path="/home" element={<Home/>}/>
                <Route path="/productos" element={<Productos/>}/>
                <Route path="/contacto" element={<Contacto/>}/>
            </Route>
        </Routes>
    );
}

export default App;