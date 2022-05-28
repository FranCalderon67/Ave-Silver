import "./contactForm.css";

export function ContactForm({style = null}) {
    const STYLE = (style === 2) && 'contactForm-Style2'

  return (
    <article className="contactFormContainer--layout">
      <div>
        <h1 className="contactForm--h1">¡Hablemos!</h1>
        <p className="contactForm--p">Ave te invita a jugar con tu imaginación y ser parte del proceso creativo de tu amuleto, creando una pieza personalizada y única para ti.</p>
      </div>
      <form action="https://formsubmit.co/16c1b46b4a176fbc1a7a4163c936856b" method="POST" className={`contactForm--size contactForm--position contactForm--layout ${STYLE}`}>
        <label className="contactForm--label-layout">
          Email:
          <input className="contactForm--email" type={"email"} name={'email'} placeholder={"email@ejemplo.com"} />
        </label>
        <label className="contactForm--label-layout">
          Escribe tu consulta:
          <textarea
            className="contactForm--inquiry"
            name={'consulta'}
            placeholder={"Tu consulta aquí"}
          />
        </label>
        <button className="btn1">ENVIAR</button>
      </form>
    </article>
  );
}
