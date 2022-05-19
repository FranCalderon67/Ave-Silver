import "./contactForm.css";

export function ContactForm({style= null}) {
    const STYLE = (style === 2) && 'contactForm-Style2'

  return (
    <section className="contactFormContainer--layout">
        <article>
            <h1 className="contactForm--h1">¡Hablemos!</h1>
            <p className="contactForm--p">Ave te invita a jugar con tu imaginación y ser parte del proceso creativo de tu amuleto, creando una pieza personalizada y única para ti.</p>
        </article>
      <form className={`contactForm--size contactForm--position contactForm--layout ${STYLE}`}>
        <label className="contactForm--label-layout">
          Email:
          <input className="contactForm--email" type={"email"} placeholder={"email@ejemplo.com"} />
        </label>
        <label className="contactForm--label-layout">
          Escribe tu consulta:
          <textarea
            className="contactForm--inquiry"
            placeholder={"Tu consulta aquí"}
          />
        </label>
        <button className="btn1">ENVIAR</button>
      </form>
    </section>
  );
}
