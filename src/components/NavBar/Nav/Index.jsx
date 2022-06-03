import { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";

import './nav.css'

export function Nav() {
  const [ isNavOpen, setIsNavOpen ] = useState(false);
  const URL = useLocation()
  
  useEffect( () => {
    setIsNavOpen(false)
  }, [URL.pathname])

  const OPEN_NAV = isNavOpen && 'navbar--nav--open'

  return (
    <>
      <div onClick={ () => setIsNavOpen(!isNavOpen) } className="nav--toggler-size nav--toggler--position nav--toggler-layout">
        {
          !isNavOpen ? 
          <img src={'https://i.ibb.co/qnG3pTq/menu.png'} alt='boton de abrir nav' />
          :
          <img src={'https://i.ibb.co/7bBymyG/close.png'} alt='boton de cerrar nav' />
        }
        
        
      </div>
      <nav className={`navBar--nav-layout navBar--nav-size navBar--nav--position ${OPEN_NAV}`}>
          <ul className="nav--ul-layout">
              <li>
                  <Link className="nav--link" to={'/piezas'}>
                      PIEZAS
                  </Link>
              </li>
              <li>
                  <Link className="nav--link" to={'/piedras'}>
                    PIEDRAS
                  </Link>
              </li>
          </ul>
          <ul className="nav--ul-layout">
              <li>
                  <Link className="nav--link" to={'/sobreAve'}>
                    SOBRE AVE
                  </Link>
              </li>
              <li>
                  <Link className="nav--link" to={'/contacto'}>
                    CONTACTO
                  </Link>
              </li>
          </ul>
      </nav>
    </>
  );
}
