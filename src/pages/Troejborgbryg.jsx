import "./Pages.css";
import Animation from "../components/Animation/Animation.jsx";
import { Link } from "react-router-dom";

const Troejborgbryg = () => {
  return (
    <section className="projektvisning">
      <figure>
        <Animation animationClass="slideInLeft">
          <img
            src="/troejborgbrygmockup.webp"
            alt="Mockup af TrøjborgBrygs hjemmeside"
          />
        </Animation>
      </figure>
      <article>
        <Animation animationClass="slideInLeft">
          <h1 className="forsideoverskrift">TrøjborgBryg</h1>
          <p>
            Projektet havde til formål at udvikle en prototype af et oplevelses-
            og informationswebsite for TrøjborgBryg, et fiktivt mikrobryggeri i
            Aarhus, der specialiserer sig i alkoholfri øl. Målet var at skabe en
            engagerende online-oplevelse, der ikke blot præsenterer bryggeriets
            udvalg, men også bygger en stærk forbindelse til målgruppen og
            positionerer TrøjborgBryg som en leder inden for alkoholfri øl.{" "}
            <br />
            <br />
            Alt indhold til websitet blev skabt fra bunden, herunder tekster,
            billeder, videoer og infografikker. Dette indhold blev udformet med
            henblik på at kommunikere alkoholfri øls fordele og bryggeriets
            værdier effektivt til målgruppen. Websitet blev kodet med HTML5 og
            CSS3 og designet til at være responsivt, hvilket sikrede en god
            brugeroplevelse på både desktop- og mobile enheder. Der blev lagt
            vægt på SEO og optimering for at sikre hurtig indlæsning og
            mobilvenlighed.
          </p>
          <div className="knap">
            <Link to="/">
              <button className="forsideknap">Se andre projekter</button>
            </Link>
            <a href="https://troejborgbryg.mikkelruby.dk/">
              <button className="forsideknap">Besøg hjemmesiden</button>
            </a>
          </div>
        </Animation>
      </article>
    </section>
  );
};

export default Troejborgbryg;
