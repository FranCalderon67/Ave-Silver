import { Link } from "react-router-dom";

import "./piezasNav.css";

export function PiezasNav() {
  return (
    <nav className="piezasNav-textAlign">
      <ul className="piezasNav--list-layout">
        <li>
          <Link className="piezasNav--link" to="/piezas">VER TODO</Link>
        </li>
        <li>
          <Link className="piezasNav--link" to="/piezas/colgantes">COLGANTES</Link>
        </li>
        <li>
          <Link className="piezasNav--link" to="/piezas/anillos">ANILLOS</Link>
        </li>
        <li>
          <Link className="piezasNav--link" to="/piezas/brazaletes">BRAZALETES</Link>
        </li>
        <li>
          <Link className="piezasNav--link" to="/piezas/aros">AROS</Link>
        </li>
        <li>
          <Link className="piezasNav--link" to="/piezas/prendedores">PRENDEDORES</Link>
        </li>
        <li>
          <Link className="piezasNav--link" to="/piezas/tiaras">TIARAS</Link>
        </li>
      </ul>
    </nav>
  );
}
