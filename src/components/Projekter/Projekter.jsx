import React, { useState } from "react";
import "../Projekter/Projekter.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Animation from "../Animation/Animation.jsx";

const Projekter = () => {
  // JS-library
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const [isTextVisible, setIsTextVisible] = useState(false); // Holder styr på synlighed

  const textReveal = () => {
    setIsTextVisible(!isTextVisible); // Skifter tilstand mellem synlig/ikke synlig
  };

  return (
    <section className="projekter" id="projekter">
      <main>
        <Animation animationClass="slideInBottom">
          <h2 className="forsideoverskrift">Projekter</h2>
        </Animation>

        <Animation animationClass="slideInLeft">
          <div className="projekt-centrering">
            <Slider {...settings}>
              <div className="projekt-container">
                <article>
                  <figure>
                    <img src="/hella.webp" alt="Hella Website" />
                    <figcaption
                      className={`imgtext ${isTextVisible ? "visible" : ""}`}
                      onClick={textReveal}
                    >
                      <h2>Hella - Cocktailbar</h2>
                      <p>
                        For Hella Cocktailbar på Aarhus Ø udviklede vi en
                        hjemmeside, der afspejler barens moderne koncept og
                        unikke atmosfære. Projektet fokuserede på at skabe en
                        responsiv og interaktiv prototype, der binder barens
                        fysiske og digitale identitet sammen. Ved at anvende
                        HTML, CSS og JavaScript sikrede vi en engagerende
                        brugeroplevelse på tværs af enheder.
                      </p>
                      <div className="projektknapper">
                        <Link to="/hella">
                          <button>Læs mere</button>
                        </Link>
                        <a href="https://hella.mikkelruby.dk/" target="_blank">
                          <button>Besøg hjemmesiden</button>
                        </a>
                      </div>
                    </figcaption>
                  </figure>
                </article>
              </div>
              <div className="projekt-container">
                <article>
                  <figure>
                    <img src="/troejborgbryg.webp" alt="TrøjborgBryg Website" />
                    <figcaption
                      className={`imgtext ${isTextVisible ? "visible" : ""}`}
                      onClick={textReveal}
                    >
                      <h2>TrøjborgBryg - Alkoholfri Øl</h2>
                      <p>
                        Dette projekt handlede om at udvikle en
                        multimedieløsning for TrøjborgBryg, et mikrobryggeri fra
                        Aarhus, med fokus på at promovere deres alkoholfri øl.
                        Projektet omfattede design og udvikling af et responsivt
                        website, der skulle skabe værdi for brugerne og
                        præsentere TrøjborgBrygs brand som et attraktivt valg.
                      </p>
                      <div className="projektknapper">
                        <Link to="/troejborgbryg">
                          <button>Læs mere</button>
                        </Link>
                        <a
                          href="https://troejborgbryg.mikkelruby.dk/"
                          target="_blank"
                        >
                          <button>Besøg hjemmesiden</button>
                        </a>
                      </div>
                    </figcaption>
                  </figure>
                </article>
              </div>
              <div className="projekt-container">
                <article>
                  <figure>
                    <img src="/nippon.webp" alt="Nippon Website" />
                    <figcaption
                      className={`imgtext ${isTextVisible ? "visible" : ""}`}
                      onClick={textReveal}
                    >
                      <h2>Nippon - Japanske Måltidskasser</h2>
                      <p>
                        I dette projekt arbejdede jeg sammen med et team om at
                        udvikle et digitalt interface for Nippon, et fiktivt
                        måltidskassefirma inspireret af det japanske køkken.
                        Vores mål var at skabe en brugervenlig platform, der
                        effektivt imødekommer de forskellige behov hos
                        målgrupperne. For at implementere de interaktive dele af
                        platformen benyttede vi HTML, CSS og JavaScript.
                      </p>
                      <div className="projektknapper">
                        <Link to="/nippon">
                          <button>Læs mere</button>
                        </Link>
                        <a href="https://nippon.mikkelruby.dk/" target="_blank">
                          <button>Besøg hjemmesiden</button>
                        </a>
                      </div>
                    </figcaption>
                  </figure>
                </article>
              </div>
              <div className="projekt-container">
                <article>
                  <figure>
                    <img src="/studiespar.webp" alt="Studiespar Website" />
                    <figcaption
                      className={`imgtext ${isTextVisible ? "visible" : ""}`}
                      onClick={textReveal}
                    >
                      <h2>StudieSpar - SU-venlige råd</h2>
                      <p>
                        I dette projekt udviklede jeg en hjemmeside målrettet
                        medstuderende, der fokuserer på SU-venlige tips og råd.
                        Jeg skabte indhold om sparetips og SU-venlig mad og
                        udviklede en visuel identitet med farver, layout og
                        komposition. Hjemmesiden er bygget med HTML5 og CSS3 og
                        er optimeret for både SEO og performance.
                      </p>
                      <div className="projektknapper">
                        <Link to="/studiespar">
                          <button>Læs mere</button>
                        </Link>
                        <a
                          href="https://studiespar.mikkelruby.dk/"
                          target="_blank"
                        >
                          <button>Besøg hjemmesiden</button>
                        </a>
                      </div>
                    </figcaption>
                  </figure>
                </article>
              </div>
              <div className="projekt-container">
                <article>
                  <figure>
                    <img
                      src="/streetfood.webp"
                      alt="Aarhus Streetfood Website"
                    />
                    <figcaption
                      className={`imgtext ${isTextVisible ? "visible" : ""}`}
                      onClick={textReveal}
                    >
                      <h2>Aarhus Streetfood - Redesign af deres hjemmeside</h2>
                      <p>
                        I dette projekt redesignede vi Aarhus Streetfoods
                        hjemmeside med fokus på Mobile First og Responsive Web
                        Design. Vi forbedrede den grafiske appel,
                        navigationsstrukturen og responsiviteten for at
                        imødekomme moderne brugeradfærd. Hjemmesiden blev
                        optimeret for SEO og performance, med en valideret
                        HTML5- og CSS3-struktur, og tilpasset til forskellige
                        enheder, især smartphones.
                      </p>
                      <div className="projektknapper">
                        <Link to="/streetfood">
                          <button>Læs mere</button>
                        </Link>
                        <a
                          href="https://aarhusstreetfood.mikkelruby.dk/"
                          target="_blank"
                        >
                          <button>Besøg hjemmesiden</button>
                        </a>
                      </div>
                    </figcaption>
                  </figure>
                </article>
              </div>
              <div className="projekt-container">
                <article>
                  <figure>
                    <img
                      src="/interactive-storytelling.webp"
                      alt="Interactive Storytelling Website"
                    />
                    <figcaption
                      className={`imgtext ${isTextVisible ? "visible" : ""}`}
                      onClick={textReveal}
                    >
                      <h2>
                        Interactive Storytelling - Historien om Atombomben
                      </h2>
                      <p>
                        I samarbejde med Steno-museet i Aarhus fik vi udviklet
                        en innovativ interaktiv storytelling-løsning til deres
                        udstilling om atomvåben. Projektet havde til formål at
                        skabe en dybdegående og engagerende digital oplevelse,
                        der både supplerede den fysiske udstilling og
                        invitererede besøgende til at udforske emnet på en ny og
                        interaktiv måde.
                      </p>
                      <div className="projektknapper">
                        <Link to="/public/interactive-storytelling">
                          <button>Læs mere</button>
                        </Link>
                        <a
                          href="https://atombomben.mikkelruby.dk/"
                          target="_blank"
                        >
                          <button>Besøg hjemmesiden</button>
                        </a>
                      </div>
                    </figcaption>
                  </figure>
                </article>
              </div>
            </Slider>
          </div>
        </Animation>
        <figure className="blurredCircle2"></figure>
      </main>
    </section>
  );
};

export default Projekter;
