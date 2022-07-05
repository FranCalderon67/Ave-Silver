import "./aboutAveInfo.css";
import { useTranslation } from "react-i18next";
export function AboutAveInfo() {
  const [t, i18n] = useTranslation("global");
  i18n.off();
  return (
    <article className="aboutUs--pContainer-position">
      <p className="aboutUs--p">
        <span>{t("sobreAve.parrafoUno")}</span>
        <span>{t("sobreAve.parrafoDos")}</span>
        <span>{t("sobreAve.parrafoTres")}</span>
        <span>{t("sobreAve.parrafoCuatro")}</span>
        <span> {t("sobreAve.parrafoCinco")}</span>
      </p>
    </article>
  );
}
