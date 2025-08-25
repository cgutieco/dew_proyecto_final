import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carrusel } from "../../../carrusel";
import "./Home.css"
import CarruselProductos from "./carruselProductos/CarruselProductos";


const Home = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <div className="contenedor-carrusel">
        <Slider {...settings}>
          {carrusel.map((item) => (
            <div key={item.id}>
              <img
                src={item.urlImage}
                alt={item.nombreProducto}
                className="carrusel-img"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="contenedor-2">
        <div className="caja1">
          <p> En nuestra tienda encontraras procesadores AMD e
            Intel de última generación, ideales para potenciar
            tu PC con el máximo rendimiento. </p>
        </div>

        <div className="caja2">

          <h2>¡COMPRA AHORA!</h2>
          <div className="marcas">
            <span className="amd">AMD</span>
            <span className="intel">INTEL</span>
          </div>
        </div>
      </div>

      <CarruselProductos/>
        
    </>

  )
}

export default Home
