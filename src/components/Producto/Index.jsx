import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import LoadingRing from "../LoadingRing/LoadingRing";
import { filtrarProductos } from "../../productos";

import "./producto.css";

const Producto = ({ item }) => {
  return (
    <>
      <div className="card" key={item.id}>
        <div>
          <img className="card-img-top" src={item.imagen} alt="ERROR" />
        </div>
        <div>
          <h5 className="card-title">{item.nombre}</h5>
        </div>
        <a className="consulta-link" href={`https://wa.me/5219841082450?text=Me%20interesa%20el%20producto%20${item.nombre}%20de%20tu%20web`} target={"_blank"} rel="noreferrer">
          Consultar
        </a>
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
  const { category } = useParams()
  const [productos, setProductos] = useState();
  const [cargando, setCargando] = useState(null);
  
  useEffect(() => {
    setCargando(true)
    filtrarProductos( { category } )
      .then((res) => {
        setProductos(res);
        setCargando(false)
      })
      .catch((error) => {
        console.log("error=>", error);
      });
      
  }, [category]);

  return <>{cargando ? <LoadingRing /> : <section>{<ListaProducto productos={productos} />}</section>}</>;
}

export default ContenedorProducto;
