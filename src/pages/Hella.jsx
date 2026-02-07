import "./Pages.css";
import Animation from "../components/Animation/Animation.jsx";
import { Link } from "react-router-dom";

const Hella = () => {
  return (
    <section className="projektvisning">
      <figure>
        <Animation animationClass="slideInLeft">
          <img src="/hellamockup.webp" alt="Mockup af Hellas hjemmeside" />
        </Animation>
      </figure>
      <article>
        <Animation animationClass="slideInRight">
          <h1 className="forsideoverskrift">Hella</h1>
          <h2>Cocktailbar på Aarhus Ø</h2>
          <p>
            I dette projekt udviklede vi en webbaseret løsning for cocktailbaren
            Hella på Aarhus Ø. Formålet var at skabe en hjemmeside, der
            reflekterer barens unikke atmosfære og moderne koncept, samt
            fungerer som en glidende overgang mellem Hellas fysiske og digitale
            tilstedeværelse. Ved hjælp af metoder som Double Diamond-modellen og
            Golden Circle, dybdegående analyser af virksomheden og konkurrenter,
            samt målgruppeundersøgelser, formåede vi at designe en hjemmeside,
            der ikke blot informerer brugerne, men også engagerer dem gennem
            interaktive elementer, intuitiv navigation og et visuelt design, der
            afspejler Hellas brand. Hjemmesiden skaber en sammenhængende
            oplevelse, som styrker Hellas identitet online og appellerer til
            deres publikum.
          </p>
          <div className="knap">
            <Link to="/">
              <button className="forsideknap">Se andre projekter</button>
            </Link>
            <a href="https://hella.mikkelruby.dk/">
              <button className="forsideknap">Besøg hjemmesiden</button>
            </a>
          </div>
        </Animation>
      </article>
    </section>
  );
};

export default Hella;
