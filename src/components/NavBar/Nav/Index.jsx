import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./nav.css";

export function Nav() {
  const [t, i18n] = useTranslation("global");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const URL = useLocation();

  useEffect(() => {
    setIsNavOpen(false);
  }, [URL.pathname]);

  const OPEN_NAV = isNavOpen && "navbar--nav--open";

  return (
    <>
      <div onClick={() => setIsNavOpen(!isNavOpen)} className="nav--toggler-size nav--toggler--position nav--toggler-layout">
        {!isNavOpen ? <img src={"https://i.ibb.co/qnG3pTq/menu.png"} alt="boton de abrir nav" /> : <img src={"https://i.ibb.co/7bBymyG/close.png"} alt="boton de cerrar nav" />}
      </div>
      <nav className={`navBar--nav-layout navBar--nav-size navBar--nav--position ${OPEN_NAV}`}>
        <ul className="nav--ul-layout">
          <li>
            <Link className="nav--link" to={"/piezas"}>
              {t("navBar.piezas")}
            </Link>
          </li>
          <li>
            <Link className="nav--link" to={"/piedras"}>
              {t("navBar.piedras")}
            </Link>
          </li>
        </ul>
        <ul className="nav--ul-layout">
          <li>
            <Link className="nav--link" to={"/sobreAve"}>
              {t("navBar.sobreAve")}
            </Link>
          </li>
          <li>
            <Link className="nav--link" to={"/contacto"}>
              {t("navBar.contacto")}
            </Link>
          </li>
          <li onClick={() => i18n.changeLanguage("es")} className="nav--link">
            ES
          </li>
          <li onClick={() => i18n.changeLanguage("en")} className="nav--link">
            EN
          </li>
        </ul>
      </nav>
    </>
  );
}
