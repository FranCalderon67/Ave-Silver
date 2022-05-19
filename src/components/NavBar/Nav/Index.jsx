import { useState } from 'react'
import { Link } from "react-router-dom";

import './nav.css'

export function Nav() {
  const [ isNavOpen, setIsNavOpen ] = useState(false);

  const OPEN_NAV = isNavOpen && 'navbar--nav--open'

  return (
    <>
      <div onClick={ () => setIsNavOpen(!isNavOpen) } className="nav--toggler-size nav--toggler--position nav--toggler-layout">
        <span className="navToggler--span"></span>
        <span className="navToggler--span"></span>
        <span className="navToggler--span"></span>
      </div>
      <nav className={`navBar--nav-layout navBar--nav-size navBar--nav--position ${OPEN_NAV}`}>
          <ul className="nav--ul-layout">
              <li>
                  <Link className="nav--link" to={'./piezas'}>
                      PIEZAS
                  </Link>
              </li>
              <li>
                  <Link className="nav--link" to={'./piedras'}>
                    PIEDRAS
                  </Link>
              </li>
          </ul>
          <ul className="nav--ul-layout">
              <li>
                  <Link className="nav--link" to={'./sobreAve'}>
                    SOBRE AVE
                  </Link>
              </li>
              <li>
                  <Link className="nav--link" to={'./contacto'}>
                    CONTACTO
                  </Link>
              </li>
          </ul>
      </nav>
    </>
  );
}
