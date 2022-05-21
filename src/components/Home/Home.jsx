import React from "react";

import { ContactForm } from "../ContactForm/Index";

import "./home.css";

function Home() {
  return (
    <>
      <div className="homeBackground">
        <img className="headerLogo" src="https://i.ibb.co/k2vGBdZ/quality-Logo.png" alt="logo de calidad" />
        <img className="backgroundImg " src="https://i.ibb.co/DrDsBMP/homeBg.png" alt="Background" />
      </div>
      <main>
        <section>
          <div className="flexContainer">
            <div className="textPosition">
              <p className="headerText">
                AMULETOS <br /> CREADOS CON LA SABIDURIA DE LA MANO
              </p>
              <button type="button" className="headerButton ">
                VER PIEZAS
              </button>
            </div>
            <div>
              <img className="headerImg" src="https://i.ibb.co/SQVQfCB/header-Model.jpg" alt="Imagen" />
            </div>
          </div>
        </section>
        <section className="videoBackground ">
          <div className="videoSection">
            <video poster="https://i.ibb.co/G9mjJJp/video-Poster.jpg" controls src={require("./imagenes/VideoAve.mp4")}></video>
            <p className="videoDotUp">.</p>
            <p className="videoText ">
              Ave se realiza a través de los métodos más tradicionales de la orfebrería, creando un producto totalmente artesanal, cuidando cada detalle para que llegue a tus manos y a tu corazón.
            </p>
            <p className="videoDotDown">.</p>
          </div>
        </section>
        <section>
          <div className="descriptionSection">
            <img className="homeLogo" src={require("./imagenes/logo.png")} alt="LOGO" />
            <p className="made">MADE IN TULUM</p>
            <p className="inspirado ">Inspirado en la Naturaleza</p>
            <p className="homeDescription">
              Rodeada de selva, mar tibio, cenotes frescos, palmeras y una fauna increíblemente inspiradora, <strong>Ave, desde México para todo el mundo.</strong>
            </p>

            <div className="list">
              <span className="productsList">
                ANILLOS<span className="listDot">.</span>
              </span>
              <span className="productsList">
                AMULETOS <span className="listDot">.</span>
              </span>

              <span className="productsList">
                AROS<span className="listDot">.</span>
              </span>
              <span className="productsList">COLGANTES</span>
            </div>
          </div>
          <div className="imgCollage">
            <img className="imgAnillo" src="https://i.ibb.co/ng44KcK/home-Mano-Con-Anillo.jpg" alt="IMAGEN" />
            <img className="imgAros" src="https://i.ibb.co/RhMy6vy/homeAros.jpg" alt="IMAGEN" />
            <img className="imgAnillos" src="https://i.ibb.co/Fkvx1MH/home-Anillos.jpg" alt="IMAGEN" />
            <img className="imgColgante" src="https://i.ibb.co/Cw7PsF8/home-Colgante.jpg" alt="IMAGEN" />
            <img className="imgCollar" src="https://i.ibb.co/zGYNvNW/home-Collar.jpg" alt="IMAGEN" />
          </div>
        </section>
        <section className="contactSection">
          <ContactForm />
        </section>
      </main>
    </>
  );
}

export default Home;
