import React, { useState, useEffect } from "react";
import { exportarPiedras } from "../../piedras";
import { Loading } from "../Loading/Index";
import "./piedras.css";
import { useTranslation } from "react-i18next";

const Piedra = ({ item }) => {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <div key={item.id} className="card mb-3">
        <div className="row g-0 piedraCard--row">
          <div className="col-md-4 piedraCard--imgContainer">
            <img src={item.imagen} className="piedrasCard--img img-fluid" alt="PIEDRAS AVE" />
          </div>
          <div className="col-md-8 piedraCard--titleCol">
            <div className="card-body">
              <h5 className="card-title">{item.nombre}</h5>
            </div>
          </div>
          <div className="card-body row piedraCard--pCol">
            <p className="card-text">{item.descripcion}</p>
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

  return <>{cargando ? <Loading /> : <section className="container">{<ListaPiedra piedras={piedras} />}</section>}</>;
}

export default ContenedorPiedra;
