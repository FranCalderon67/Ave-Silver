import { Link } from "react-router-dom";

import { Nav } from "./Nav/Index";

import './navBar.css'

export function NavBar() {
  return (
    <header className="navBar--size navBar--layout">
      <Nav />
      <div className="navBar--brand-size navBar--brand-position">
        <Link to={"./"}>
            <img src="https://i.ibb.co/QKHPg7N/AVE-WEB.png" alt="Logo de Ave" />
        </Link>
      </div>
    </header>
  );
}
