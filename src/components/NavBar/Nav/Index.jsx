import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./nav.css";

const NavLink = ({to, children}) => {
  const { pathname } = useLocation();
  const ACTIVE = (pathname === to) && 'nav--link--active'


  return (
    <li>
      <Link className={`nav--link ${ACTIVE}`} to={to}>
        {children}
      </Link>
    </li>
  );
};

export function Nav() {
  const [t, i18n] = useTranslation("global");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const {pathname} = useLocation();

  useEffect(() => {
    setIsNavOpen(false);
  }, [pathname]);

  const OPEN_NAV = isNavOpen && "navbar--nav--open";

  return (
    <>
      <div onClick={() => setIsNavOpen(!isNavOpen)} className="nav--toggler-size nav--toggler--position nav--toggler-layout">
        {!isNavOpen ? <img src={"https://i.ibb.co/qnG3pTq/menu.png"} alt="boton de abrir nav" /> : <img src={"https://i.ibb.co/7bBymyG/close.png"} alt="boton de cerrar nav" />}
      </div>
      <nav className={`navBar--nav-layout navBar--nav-size navBar--nav--position ${OPEN_NAV}`}>
        <ul className="nav--ul-layout">
          <NavLink to={"/piezas"}>
            {t("navBar.piezas")}
          </NavLink>
          <NavLink to={"/piedras"}>
            {t("navBar.piedras")}
          </NavLink>
        </ul>
        <ul className="nav--ul-layout">
          <NavLink to={"/sobreAve"}>
            {t("navBar.sobreAve")}
          </NavLink>
          <NavLink to={"/contacto"}>
          {t("navBar.contacto")}
          </NavLink>
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
