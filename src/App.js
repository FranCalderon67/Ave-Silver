import React from "react";

import { NavBar } from './components/NavBar/Index';
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
