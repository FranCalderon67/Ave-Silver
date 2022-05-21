import React, { useState, useEffect } from "react";
import { exportarProductos } from "../../productos";
import "./producto.css";

const Producto = ({ item }) => {
  return (
    <>
      <div className="card " key={item.id}>
        <div>
          <img className="card-img-top" src={item.imagen} alt="ERROR" />
        </div>
        <div>
          <h5 className="card-title">{item.nombre}</h5>
        </div>
        <p>Consultar</p>
      </div>
    </>
  );
};

function ListaProducto({ productos }) {
  return (
    <div className="producto-container">
      {productos &&
        productos.map((p) => {
          return <Producto item={p} />;
        })}
    </div>
  );
}

function ContenedorProducto() {
  const [productos, setProductos] = useState();
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    exportarProductos
      .then((res) => {
        setProductos(res);
        setCargando(false);
      })
      .catch((error) => {
        console.log("error=>", error);
      });
  });

  return <>{cargando ? <h1>Cargando...</h1> : <section>{<ListaProducto productos={productos} />}</section>}</>;
}

export default ContenedorProducto;
