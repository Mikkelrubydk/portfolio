import "./Pages.css";
import Animation from "../components/Animation/Animation.jsx";
import { Link } from "react-router-dom";

const Nippon = () => {
  return (
    <section className="projektvisning">
      <figure>
        <Animation animationClass="slideInLeft">
          <img src="/nipponmockup.webp" alt="Mockup af Nippons hjemmeside" />
        </Animation>
      </figure>
      <article>
        <Animation animationClass="slideInLeft">
          <h1 className="forsideoverskrift">Nippon</h1>
          <p>
            I dette projekt arbejdede jeg sammen med et team om at udvikle et
            digitalt interface for Nippon, et fiktivt måltidskassefirma
            inspireret af det japanske køkken. Vores mål var at skabe en
            brugervenlig platform, der effektivt imødekommer forskellige behov
            hos målgrupperne. <br />
            <br />
            Prototyping blev udført i Figma med både lo-fi og hi-fi versioner,
            der blev testet for at sikre, at designet var funktionelt og
            effektivt. Vi arbejdede også med UX writing for at forbedre
            onboarding-processen og integrerede infographics for at berige
            brugeroplevelsen. <br />
            <br />
            Udviklingsdelen omfattede brug af HTML, CSS og JavaScript til at
            implementere de interaktive elementer på platformen. Selvom vi ikke
            udviklede en fuld bestillingsløsning, skabte vi en funktionel
            prototype, der demonstrerede de ønskede interaktive features.
          </p>
          <div className="knap">
            <Link to="/">
              <button className="forsideknap">Se andre projekter</button>
            </Link>
            <a href="https://nippon.mikkelruby.dk/">
              <button className="forsideknap">Besøg hjemmesiden</button>
            </a>
          </div>
        </Animation>
      </article>
    </section>
  );
};

export default Nippon;
