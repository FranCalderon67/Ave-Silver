import React from "react";

import { Link } from "react-router-dom";

import { ContactForm } from "../ContactForm/Index";
import { useTranslation } from "react-i18next";
import { LazyVideo } from "../HomeVideo/Index";

import "./home.css";

function Home() {
  const [t, i18n] = useTranslation("global");
  i18n.off();
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
              <img className="headerHand" src="https://i.ibb.co/K0KMbBW/logo-De-Mano.png" alt="Logo de ave" />
              <h1 className="headerText">
                {t("home.textoAmuletos")}
                <br /> {t("home.textoCreados")}
              </h1>
              <Link to={"/piezas"}>
                <button type="button" className="headerButton ">
                  {t("home.boton")}
                </button>
              </Link>
            </div>
            <div>
              <img className="headerImg" src="https://i.ibb.co/SQVQfCB/header-Model.jpg" alt="Imagen" />
            </div>
          </div>
        </section>
        <section className="videoBackground ">
          <div className="videoSection">
            <LazyVideo />
            <p className="videoDotUp">.</p>
            <p className="videoText ">{t("home.textoAve")}</p>
            <p className="videoDotDown">.</p>
          </div>
        </section>
        <section>
          <div className="descriptionSection">
            <img className="homeLogo" src={require("./imagenes/logo.png")} alt="LOGO" />
            <p className="made">HANDMADE IN TULUM</p>
            <p className="inspirado ">{t("home.inspirado")}</p>
            <p className="homeDescription">
              {t("home.rodeado")} <strong>{t("home.rodeadoBolt")}</strong>
            </p>

            <div className="list">
              <span className="productsList">
                {t("home.listAnillo")}
                <span className="listDot">.</span>
              </span>
              <span className="productsList">
                {t("home.listAmuleto")}
                <span className="listDot">.</span>
              </span>

              <span className="productsList">
                {t("home.listAros")}
                <span className="listDot">.</span>
              </span>
              <span className="productsList">{t("home.listColgantes")}</span>
            </div>
          </div>
          <div className="imgCollage">
            <img className="imgAnillo" src="https://i.ibb.co/ng44KcK/home-Mano-Con-Anillo.jpg" alt="IMAGEN" />
            <img className="imgAros" src="https://i.ibb.co/RhMy6vy/homeAros.jpg" alt="IMAGEN" />
            <img className="imgCollar" src="https://i.ibb.co/zGYNvNW/home-Collar.jpg" alt="IMAGEN" />
            <img className="imgColgante" src="https://i.ibb.co/Cw7PsF8/home-Colgante.jpg" alt="IMAGEN" />
            <img className="imgAnillos" src="https://i.ibb.co/Fkvx1MH/home-Anillos.jpg" alt="IMAGEN" />
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
