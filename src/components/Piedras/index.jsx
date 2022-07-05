import "./piedras.css";
import { useTranslation } from "react-i18next";

const ContenedorPiedra = () => {
  const [t, i18n] = useTranslation("global");
  i18n.off();
  return (
    <>
      <section className="container">
        <div className="piedras-container">
          <div className="card mb-3">
            <div className="row g-0 piedraCard--row">
              <div className="col-md-4 piedraCard--imgContainer">
                <img src="https://i.ibb.co/mhDH3Lt/b36ce98e0da6a04676bbf5eb01db80c7.png" className="piedrasCard--img img-fluid" alt="PIEDRAS AVE" />
              </div>
              <div className="col-md-8 piedraCard--titleCol">
                <div className="card-body">
                  <h5 className="card-title">{t("piedras.piedraDeLuna.nombre")}</h5>
                </div>
              </div>
              <div className="card-body row piedraCard--pCol">
                <p className="card-text">{t("piedras.piedraDeLuna.descripcion")}</p>
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <div className="row g-0 piedraCard--row">
              <div className="col-md-4 piedraCard--imgContainer">
                <img src="https://i.ibb.co/HqYrKNd/6268a6fe217a7343f6a399528743d041.png" className="piedrasCard--img img-fluid" alt="PIEDRAS AVE" />
              </div>
              <div className="col-md-8 piedraCard--titleCol">
                <div className="card-body">
                  <h5 className="card-title">{t("piedras.aguamarina.nombre")}</h5>
                </div>
              </div>
              <div className="card-body row piedraCard--pCol">
                <p className="card-text">{t("piedras.aguamarina.descripcion")}</p>
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <div className="row g-0 piedraCard--row">
              <div className="col-md-4 piedraCard--imgContainer">
                <img src="https://i.ibb.co/Nmk5Tv3/20acf0234cd3b9ab8300f4bf2cbdb852.png" className="piedrasCard--img img-fluid" alt="PIEDRAS AVE" />
              </div>
              <div className="col-md-8 piedraCard--titleCol">
                <div className="card-body">
                  <h5 className="card-title">{t("piedras.labradorita.nombre")}</h5>
                </div>
              </div>
              <div className="card-body row piedraCard--pCol">
                <p className="card-text">{t("piedras.labradorita.descripcion")}</p>
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <div className="row g-0 piedraCard--row">
              <div className="col-md-4 piedraCard--imgContainer">
                <img src="https://i.ibb.co/5ntLjgs/piedra-granate.png" className="piedrasCard--img img-fluid" alt="PIEDRAS AVE" />
              </div>
              <div className="col-md-8 piedraCard--titleCol">
                <div className="card-body">
                  <h5 className="card-title">{t("piedras.granate.nombre")}</h5>
                </div>
              </div>
              <div className="card-body row piedraCard--pCol">
                <p className="card-text">{t("piedras.granate.descripcion")}</p>
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <div className="row g-0 piedraCard--row">
              <div className="col-md-4 piedraCard--imgContainer">
                <img src="https://i.ibb.co/3WR1H89/5528de1eeda6f1f567beb82b9c083766.png" className="piedrasCard--img img-fluid" alt="PIEDRAS AVE" />
              </div>
              <div className="col-md-8 piedraCard--titleCol">
                <div className="card-body">
                  <h5 className="card-title">{t("piedras.ambar.nombre")}</h5>
                </div>
              </div>
              <div className="card-body row piedraCard--pCol">
                <p className="card-text">{t("piedras.ambar.descripcion")}</p>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="row g-0 piedraCard--row">
              <div className="col-md-4 piedraCard--imgContainer">
                <img src="https://i.ibb.co/6nGgdYr/e8ebf1695e7c4cfcad25c308b276465c.png" className="piedrasCard--img img-fluid" alt="PIEDRAS AVE" />
              </div>
              <div className="col-md-8 piedraCard--titleCol">
                <div className="card-body">
                  <h5 className="card-title">{t("piedras.amatista.nombre")}</h5>
                </div>
              </div>
              <div className="card-body row piedraCard--pCol">
                <p className="card-text">{t("piedras.amatista.descripcion")}</p>
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <div className="row g-0 piedraCard--row">
              <div className="col-md-4 piedraCard--imgContainer">
                <img src="https://i.ibb.co/gDWKjvz/6485d4cd901b0754b30d2ca925066e88.png" className="piedrasCard--img img-fluid" alt="PIEDRAS AVE" />
              </div>
              <div className="col-md-8 piedraCard--titleCol">
                <div className="card-body">
                  <h5 className="card-title">{t("piedras.turmalina.nombre")}</h5>
                </div>
              </div>
              <div className="card-body row piedraCard--pCol">
                <p className="card-text">{t("piedras.turmalina.descripcion")}</p>
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <div className="row g-0 piedraCard--row">
              <div className="col-md-4 piedraCard--imgContainer">
                <img src="https://i.ibb.co/4SF7Hkp/896915892b413802ef0a5ea66693ea27.png" className="piedrasCard--img img-fluid" alt="PIEDRAS AVE" />
              </div>
              <div className="col-md-8 piedraCard--titleCol">
                <div className="card-body">
                  <h5 className="card-title">{t("piedras.cuarzo.nombre")}</h5>
                </div>
              </div>
              <div className="card-body row piedraCard--pCol">
                <p className="card-text">{t("piedras.cuarzo.descripcion")}</p>
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <div className="row g-0 piedraCard--row">
              <div className="col-md-4 piedraCard--imgContainer">
                <img src="https://i.ibb.co/0CRxpt3/2ac508181eab9204e2a715da4bd4acf6.png" className="piedrasCard--img img-fluid" alt="PIEDRAS AVE" />
              </div>
              <div className="col-md-8 piedraCard--titleCol">
                <div className="card-body">
                  <h5 className="card-title">{t("piedras.topacio.nombre")}</h5>
                </div>
              </div>
              <div className="card-body row piedraCard--pCol">
                <p className="card-text">{t("piedras.topacio.descripcion")}</p>
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <div className="row g-0 piedraCard--row">
              <div className="col-md-4 piedraCard--imgContainer">
                <img src="https://i.ibb.co/pQB7hxK/09ebd9faec9918cca75362bcf50d408b.png" className="piedrasCard--img img-fluid" alt="PIEDRAS AVE" />
              </div>
              <div className="col-md-8 piedraCard--titleCol">
                <div className="card-body">
                  <h5 className="card-title">{t("piedras.piedraDelSol.nombre")}</h5>
                </div>
              </div>
              <div className="card-body row piedraCard--pCol">
                <p className="card-text">{t("piedras.piedraDelSol.descripcion")}</p>
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <div className="row g-0 piedraCard--row">
              <div className="col-md-4 piedraCard--imgContainer">
                <img src="https://i.ibb.co/YhTLwM7/431f315ee8a713899ef715558a9bda87.png" className="piedrasCard--img img-fluid" alt="PIEDRAS AVE" />
              </div>
              <div className="col-md-8 piedraCard--titleCol">
                <div className="card-body">
                  <h5 className="card-title">{t("piedras.malaquita.nombre")}</h5>
                </div>
              </div>
              <div className="card-body row piedraCard--pCol">
                <p className="card-text">{t("piedras.malaquita.descripcion")}</p>
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <div className="row g-0 piedraCard--row">
              <div className="col-md-4 piedraCard--imgContainer">
                <img src="https://i.ibb.co/Jq0VPzy/4c42db558eae102c3c7d9f84fe14bbc8.png" className="piedrasCard--img img-fluid" alt="PIEDRAS AVE" />
              </div>
              <div className="col-md-8 piedraCard--titleCol">
                <div className="card-body">
                  <h5 className="card-title">{t("piedras.prehnita.nombre")}</h5>
                </div>
              </div>
              <div className="card-body row piedraCard--pCol">
                <p className="card-text">{t("piedras.prehnita.descripcion")}</p>
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <div className="row g-0 piedraCard--row">
              <div className="col-md-4 piedraCard--imgContainer">
                <img src="https://i.ibb.co/ChjrR7B/b0d182145dbd7ce62af4ec9bf69c6b39.png" className="piedrasCard--img img-fluid" alt="PIEDRAS AVE" />
              </div>
              <div className="col-md-8 piedraCard--titleCol">
                <div className="card-body">
                  <h5 className="card-title">{t("piedras.crisocola.nombre")}</h5>
                </div>
              </div>
              <div className="card-body row piedraCard--pCol">
                <p className="card-text">{t("piedras.crisocola.descripcion")}</p>
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <div className="row g-0 piedraCard--row">
              <div className="col-md-4 piedraCard--imgContainer">
                <img src="https://i.ibb.co/5khVYb2/b186e1f8ce025db401900d9dbb562ef0.png" className="piedrasCard--img img-fluid" alt="PIEDRAS AVE" />
              </div>
              <div className="col-md-8 piedraCard--titleCol">
                <div className="card-body">
                  <h5 className="card-title">{t("piedras.amazonita.nombre")}</h5>
                </div>
              </div>
              <div className="card-body row piedraCard--pCol">
                <p className="card-text">{t("piedras.amazonita.descripcion")}</p>
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <div className="row g-0 piedraCard--row">
              <div className="col-md-4 piedraCard--imgContainer">
                <img src="https://i.ibb.co/h7jBXdW/ba2370474516ce6d943a4d7737238af7.png" className="piedrasCard--img img-fluid" alt="PIEDRAS AVE" />
              </div>
              <div className="col-md-8 piedraCard--titleCol">
                <div className="card-body">
                  <h5 className="card-title">{t("piedras.lapisLazuli.nombre")}</h5>
                </div>
              </div>
              <div className="card-body row piedraCard--pCol">
                <p className="card-text">{t("piedras.lapisLazuli.descripcion")}</p>
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <div className="row g-0 piedraCard--row">
              <div className="col-md-4 piedraCard--imgContainer">
                <img src="https://i.ibb.co/wMpsVGf/434bcb1a2c3f051d738e34500e148039.png" className="piedrasCard--img img-fluid" alt="PIEDRAS AVE" />
              </div>
              <div className="col-md-8 piedraCard--titleCol">
                <div className="card-body">
                  <h5 className="card-title">{t("piedras.ojoDeTigre.nombre")}</h5>
                </div>
              </div>
              <div className="card-body row piedraCard--pCol">
                <p className="card-text">{t("piedras.ojoDeTigre.descripcion")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContenedorPiedra;
