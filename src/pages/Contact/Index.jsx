import { ContactForm } from "../../components/ContactForm/Index";
import { useTranslation } from "react-i18next";
import "./contact.css";

export function Contact() {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <section>
        <span className="contact-title"> CONTACTANOS</span>
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
                <span>@ave.silverandcrystals</span>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}
