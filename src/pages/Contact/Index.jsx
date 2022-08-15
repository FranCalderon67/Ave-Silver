import { ContactForm } from "../../components/ContactForm/Index";
import { useTranslation } from "react-i18next";
import "./contact.css";

export function Contact() {
  const [t, i18n] = useTranslation("global");
  i18n.off();

  return (
    <>
      <section>
        <span className="contact-title">{t("contacto.contactanos")}</span>
        <ContactForm type={2} />
      </section>
      <section className="contact--gallerySection">
        <h2 className="contactgallery--h2"> {t("contacto.seguinos")}</h2>
        <p className="contactgallery--p"> {t("contacto.seguinosTexto")} </p>
        <ul className="contactGallery--ul-layout">
          <li className="contactGallery--li-layout ">
            <div className="contactGallery--img-bg contactGallery--bigPic-size contactGallery--pic1" />
            <div className="contactGallery--img-bg contactGallery--smallPic-size contactGallery--pic2" />
          </li>
          <li className="contactGallery--li-layout">
            <div className="contactGallery--img-bg contactGallery--smallPic-size contactGallery--pic3" />
            <div className="contactGallery--img-bg contactGallery--bigPic-size contactGallery--pic4">
              <div className="contactGallery--pic4-filter">
                <a className="pic4--filter-anchor" href="https://www.instagram.com/ave.silver/?igshid=YmMyMTA2M2Y=" target={'_blank'} rel='noreferrer'>
                  ave.silverandcrystals@gmail.com
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}
