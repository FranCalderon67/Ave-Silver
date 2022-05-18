import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer>
        <img className="logoFooter" src={require("./imagenes/logoFooter.png")} alt="LOGO" />

        <div className="redes">
          <a href="https://www.facebook.com/aVe.silver.and.crystals">{<BsFacebook className="facebookLogo" />}</a>
          <a href="https://www.instagram.com/ave.silver/?igshid=YmMyMTA2M2Y=">
            <AiFillInstagram className="instagramLogo" />
          </a>

          <FaWhatsappSquare className="wppLogo" />
        </div>

        <p className="footerText">© 2022 Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default Footer;
