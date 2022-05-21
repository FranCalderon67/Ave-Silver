import React from "react";
import { Routes, Route } from "react-router-dom";

import { AboutAve } from "./pages/AboutAve/Index";

import { NavBar } from "./components/NavBar/Index";
import Home from "./components/Home/Home";
import Productos from "./pages/ProductosAve";
import Piedras from "./pages/PiedrasAve";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/piezas"} element={<Productos />} />
        <Route path={"/piedras"} element={<Piedras />} />
        <Route path={"/sobreAve"} element={<AboutAve />} />
        <Route path={"/contacto"} element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
