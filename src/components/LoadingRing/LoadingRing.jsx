import React from "react";
import "./loadingRing.css";
function LoadingRing() {
  return (
    <>
      <div className="gif-layout">
        <img className="gif" src={require("./Imagenes/Double-Ring.gif")} alt="CARGANDO..." />
      </div>
    </>
  );
}

export default LoadingRing;
