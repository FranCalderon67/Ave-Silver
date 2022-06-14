import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./piezasNav.css";

export function PiezasNav() {
  const [t, i18n] = useTranslation("global");
  return (
    <nav className="piezasNav-textAlign">
      <ul className="piezasNav--list-layout">
        <li>
          <Link className="piezasNav--link" to="/piezas">
            {t("subNav.todo")}
          </Link>
        </li>
        <li>
          <Link className="piezasNav--link" to="/piezas/colgantes">
            {t("subNav.colgantes")}
          </Link>
        </li>
        <li>
          <Link className="piezasNav--link" to="/piezas/anillos">
            {t("subNav.anillos")}
          </Link>
        </li>
        <li>
          <Link className="piezasNav--link" to="/piezas/brazaletes">
            {t("subNav.brazaletes")}
          </Link>
        </li>
        <li>
          <Link className="piezasNav--link" to="/piezas/aros">
            {t("subNav.aros")}
          </Link>
        </li>
        <li>
          <Link className="piezasNav--link" to="/piezas/prendedores">
            {t("subNav.prendedores")}
          </Link>
        </li>
        <li>
          <Link className="piezasNav--link" to="/piezas/tiaras">
            {t("subNav.tiaras")}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
