import React, { useState, useEffect } from "react";
import { exportarPiedras } from "../../piedras";
import "./piedras.css";

const Piedra = ({ item }) => {
  return (
    <>
      <div key={item.id} className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={item.imagen} className="img-fluid rounded-start" alt="PIEDRAS AVE" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{item.nombre}</h5>
              <p className="card-text">{item.descripcion}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function ListaPiedra({ piedras }) {
  return (
    <div className="piedras-container">
      {piedras &&
        piedras.map((p) => {
          return <Piedra item={p} />;
        })}
    </div>
  );
}

function ContenedorPiedra() {
  const [piedras, setPiedras] = useState();
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    exportarPiedras
      .then((res) => {
        setPiedras(res);
        setCargando(false);
      })
      .catch((error) => {
        console.log("error=>", error);
      });
  });

  return <>{cargando ? <h1>Cargando...</h1> : <section className="container">{<ListaPiedra piedras={piedras} />}</section>}</>;
}

export default ContenedorPiedra;
