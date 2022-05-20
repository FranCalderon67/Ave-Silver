import { AboutAveInfo } from "../../components/AboutAveInfo/Index";
import { ContactForm } from "../../components/ContactForm/Index";

import "./aboutAve.css";

export function AboutAve() {
  return (
    <>
      <section className="aboutUsInfo-layout">
        <article className="aboutUs--imgContainer">
          <div className="aboutUs--img-size aboutUs--img-bg aboutUs--img-filters">
            <img
              className="img--logo"
              src="https://i.ibb.co/k2vGBdZ/quality-Logo.png"
              alt="logo de calidad"
            />
          </div>
        </article>
        <article className="aboutUsTitle-position">
          <span className="aboutUsTitle--span">HANDMADE JEWELRY</span>
          <h1 className="aboutUsTitle--h1">Sobre AVE</h1>
        </article>
        <AboutAveInfo />
      </section>
      <section>
        <ul className="aboutUsGallery--ul">
          <li className="aboutUsGallery--li aboutUsGallery--leftPic" />
          <li className="aboutUsGallery--li aboutUsGallery--middlePic" />
          <li className="aboutUsGallery--li aboutUsGallery--rightPic" />
        </ul>
      </section>
      <section className="contactSection">
        <ContactForm />
      </section>
    </>
  );
}
