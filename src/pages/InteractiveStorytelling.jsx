import "./Pages.css";
import Animation from "./../components/Animation/Animation.jsx";
import { Link } from "react-router-dom";

const InteractiveStorytelling = () => {
  return (
    <section className="projektvisning">
      <figure>
        <Animation animationClass="slideInLeft">
          <img
            src="/atombombenmockup.webp"
            alt="Mockup af Atombombens hjemmeside"
          />
        </Animation>
      </figure>
      <article>
        <Animation animationClass="slideInRight">
          <h1 className="forsideoverskrift">Interactive Storytelling</h1>
          <p>
            I samarbejde med Steno-museet i Aarhus udviklede vi en innovativ
            interaktiv storytelling-løsning til deres udstilling om atomvåben.
            Målet var at skabe en dybdegående digital oplevelse, der både
            supplerede den fysiske udstilling og engagerede besøgende på en ny
            måde. Vi integrerede JSON-data for at muliggøre dynamisk indhold og
            skabte en interaktiv platform med elementer som video, animationer,
            infografikker og lyd, alt præsenteret gennem en velstruktureret
            brugerflade. <br /> <br /> Projektet omfattede udviklingen af en
            prototype tilgængelig online samt en præsentation af vores proces og
            løsning. Vi fokuserede på at formidle en interessant historie om
            atomvåben, med målrettet indhold og en grafisk trend, der matcher
            emnet og målgruppen. Den interaktive løsning blev kodet med HTML5,
            CSS3 og JavaScript, og vi anvendte GitHub til samarbejde og
            dokumentation af vores arbejde.
          </p>
          <div className="knap">
            <Link to="/">
              <button className="forsideknap">Se andre projekter</button>
            </Link>
            <a href="https://atombomben.mikkelruby.dk/">
              <button className="forsideknap">Besøg hjemmesiden</button>
            </a>
          </div>
        </Animation>
      </article>
    </section>
  );
};

export default InteractiveStorytelling;
