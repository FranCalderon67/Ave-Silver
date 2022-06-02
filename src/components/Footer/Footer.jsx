import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="container-fluid">
        <div className="footerFlex">
          <img className="logoFooter" src={require("./imagenes/logoFooter.png")} alt="LOGO" />

          <div className="redes">
            <a href="https://www.facebook.com/aVe.silver.and.crystals">{<BsFacebook className="facebookLogo" />}</a>
            <a href="https://www.instagram.com/ave.silver/?igshid=YmMyMTA2M2Y=">
              <AiFillInstagram className="instagramLogo" />
            </a>

            <FaWhatsappSquare className="wppLogo" />
          </div>
          <ul className="footer--contactIcons">
            <li className="contactIcons--link">
              <img className="contactIcon" src={require("./imagenes/telIcon.png")} alt='icono de telefono' />
              <span> +52 984 108 24 50</span>
            </li>
            <li>
              <a className="contactIcons--link" href={"mailto:ave.silverandcrystals@gmail.com"}>
                <img className="contactIcon" src={require("./imagenes/gmailIcon.png")} alt='icono de google' />
                <span> ave.silverandcrystals@gmail.com</span> 
              </a>
            </li>
          </ul>

          <p className="footerText">© 2022 Todos los derechos reservados</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
