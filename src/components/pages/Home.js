import React, { Component } from "react";
import "../../css/pages/home.css";
import Carousel from "../Carousel";
import book1 from "../../images/book1.jpg";
import book2 from "../../images/book2.jpg";
import book3 from "../../images/book3.jpg";
import book4 from "../../images/book4.jpg";

const images = [book1, book2, book3];

class Home extends Component {
  render() {
    return (
      <div className="app__main__home">
        <Carousel images={images} />

        <section id="services" className="app__main__home__section">
          <h2 className="text-center mb-5">Cosa facciamo?</h2>

          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-4 service">
                <h3 className="text-center mb-3">Stampa</h3>
                <p className="lead">
                  Tramite un meccanismo iper-avanzato la stampa su carta non
                  contiene errori e ti assicuriamo una qualità ottima anche su
                  lucido.
                </p>
              </div>

              <div className="col-sm-12 col-md-4 service">
                <h3 className="text-center mb-3">Rilegatura</h3>
                <p className="lead">
                  Ogni singolo libro viene rilegato a mano con cuciture in
                  vista. Fatto per durare negli anni, fatto per durare per
                  sempre.
                </p>
              </div>

              <div className="col-sm-12 col-md-4 service">
                <h3 className="text-center mb-3">Pubblicazione</h3>
                <p className="lead">
                  Sei un autore? Pubblica il tuo libro con noi! Ci occupiamo di
                  pubblicità e costi di distribuzione, contattaci per saperne di
                  più.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr />

        <section className="app__main__home__section">
          <div className="attraction">
            <h1>La passione è l'arte di saper fare qualcosa con amore.</h1>
            <p>E con amore viene sempre tutto bene.</p>
          </div>
        </section>

        <hr />

        <section className="app__main__home__section">
          <h2 className="text-center mb-5">Chi siamo?</h2>

          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-12 col-md-8">
                <img
                  src={book4}
                  width="600"
                  className="img-fluid"
                  alt="book4"
                />
              </div>

              <div className="col-sm-12 col-md-4 p-3">
                <h4 className="text-center mb-3">Appassionati di libri</h4>
                <p className="lead">
                  Parlare di libri, lavorarli, leggerli, sentire il profumo
                  delle pagine ci rende persone appassionate e per questo motivo
                  diamo sempre il massimo per pubblicare il tuo libro senza
                  errori.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
