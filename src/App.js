import React from "react";
import { Routes, Route } from "react-router-dom";

import Productos from "./pages/ProductosAve";
import Piedras from "./pages/PiedrasAve";
import { AboutAve } from "./pages/AboutAve/Index";
import { Contact } from "./pages/Contact/Index";

import { NavBar } from "./components/NavBar/Index";
import Home from "./components/Home/Home";
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
        <Route path={"/contacto"} element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
