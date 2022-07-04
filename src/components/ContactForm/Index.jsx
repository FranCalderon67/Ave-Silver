import "./contactForm.css";
import { useTranslation } from "react-i18next";
export function ContactForm({ type = null }) {
  const STYLE = type === 2 ? "contactForm-Style2" : null;
  const [t, i18n] = useTranslation("global");
  return (
    <article className="contactFormContainer--layout">
      <div>
        <h2 className="contactForm--h2">{t("contacto.hablemos")}</h2>
        <p className="contactForm--p"> {t("contacto.invita")}</p>
      </div>
      <form action="https://formsubmit.co/ave.silverandcrystals@gmail.com" method="POST" className={`contactForm--size contactForm--position contactForm--layout ${STYLE}`}>
        <label className="contactForm--label-layout">
          Email:
          <input className="contactForm--email" type={"email"} name={"email"} placeholder={t("contacto.emailPlaceHolder")} />
        </label>
        <label className="contactForm--label-layout">
          {t("contacto.consulta")}

          <textarea className="contactForm--inquiry" name={"consulta"} placeholder={t("contacto.consultaPlaceHolder")} />
        </label>
        <button className="btn1">{t("contacto.boton")}</button>
      </form>
    </article>
  );
}
