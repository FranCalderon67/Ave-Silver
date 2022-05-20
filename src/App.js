import React from "react";
import { Routes, Route } from 'react-router-dom';

import { AboutAve } from './pages/AboutAve/Index'

import { NavBar } from './components/NavBar/Index';
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route 
          path={"/"} 
          element={<Home />}  
        />
        <Route 
          path={"/piezas"} 
          element={<Home />}  
        />
        <Route 
          path={"/piedras"} 
          element={<Home />}  
        />
        <Route 
          path={"/sobreAve"} 
          element={<AboutAve />}  
        />
        <Route 
          path={"/contacto"} 
          element={<Home />}  
        />
        

      </Routes>
      <Footer />
    </>
  );
}

export default App;
