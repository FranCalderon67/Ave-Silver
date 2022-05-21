import { ContactForm } from "../../components/ContactForm/Index";

import "./contact.css";

export function Contact() {
  return (
    <>
      <section>
        <span class="contact-title">CONTACTANOS</span>
        <ContactForm style={2} />
      </section>
      <section className="contact--gallerySection">
        <h2 className="contactgallery--h2">Seguinos</h2>
        <p className="contactgallery--p">
          Seguinos en instagram para actualizarte sobre nuevas piezas y
          novedades
        </p>
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
