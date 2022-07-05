import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./piezasNav.css";

const FilterLink = ({ to, children }) => {
  const { pathname } = useLocation();
  const ACTIVE = pathname === to && "nav--link--active";

  return (
    <li>
      <Link className={`piezasNav--link ${ACTIVE}`} to={to}>
        {children}
      </Link>
    </li>
  );
};

export function PiezasNav() {
  const [t, i18n] = useTranslation("global");
  i18n.off();
  return (
    <nav className="piezasNav-textAlign">
      <ul className="piezasNav--list-layout">
        <FilterLink to="/piezas">{t("subNav.todo")}</FilterLink>
        <FilterLink to="/piezas/colgantes">{t("subNav.colgantes")}</FilterLink>
        <FilterLink to="/piezas/anillos">{t("subNav.anillos")}</FilterLink>
        <FilterLink to="/piezas/brazaletes">{t("subNav.brazaletes")}</FilterLink>
        <FilterLink to="/piezas/aros">{t("subNav.aros")}</FilterLink>
        <FilterLink to="/piezas/prendedores">{t("subNav.prendedores")}</FilterLink>
        <FilterLink to="/piezas/tiaras">{t("subNav.tiaras")}</FilterLink>
      </ul>
    </nav>
  );
}
