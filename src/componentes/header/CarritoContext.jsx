import { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export const useCarrito = () => useContext(CarritoContext);

export const CarritoProvider = ({ children }) => {

    
  const [carrito, setCarrito] = useState([]);

const agregarAlCarrito = (producto) => {
  setCarrito((prev) => {
    const existente = prev.find((p) => p.id === producto.id);

    if (existente) {
      // ✅ Si ya existe, suma cantidad y recalcula el total del mismo producto
      return prev.map((p) =>
        p.id === producto.id
          ? { ...p, cantidad: p.cantidad + producto.cantidad }
          : p
      );
    } else {
      // ✅ Si no existe, lo agrega como nuevo
      return [...prev, producto];
    }
  });
};


  const eliminarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((p) => p.id !== id));
  };

  const vaciarCarrito = () => setCarrito([]);

  return (
    <CarritoContext.Provider
      value={{ carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
