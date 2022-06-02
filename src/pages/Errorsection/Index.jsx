import { Link } from "react-router-dom";

import "./errorSection.css";

export function ErrorSection() {
  return (
    <main className="notFound-layout">
        <section className="notFound-bg">
            <div className="notFoundBg-img"></div>
        </section>
      <section className="notFound--errorMessage">
        <p className="errorMessage--error">ERROR</p>
        <p className="errorMessage--404">404 <span className="cero-img"></span></p>
      </section>
      <section className="notFound--piezasCta">
        <p>¡NO TE PREOCUPES!</p>
        <p>Podes encontrar los siguientes productos</p>
        <article className="notFound--ctaSection">
          <Link className="notFound--ctaButton" to={"/piezas"}>
            CONTINUAR EN PIEZAS
            <span className="cta-arrow" role={'img'}><img src="https://i.ibb.co/YdDLJYB/flechas-a-la-derecha.png" alt="imagen de flecha" /></span>
          </Link>
        </article>
      </section>
      <section className="notFound--ctaSection notFound--backCta">
        <Link className="notFound--ctaButton" to={'.'}>
          REGRESAR
          <span className="cta-arrow" role={'img'}><img src="https://i.ibb.co/YdDLJYB/flechas-a-la-derecha.png" alt="imagen de flecha" /></span>
        </Link>
      </section>
    </main>
  );
}
