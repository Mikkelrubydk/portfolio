import "./Pages.css";
import Animation from "./../components/Animation/Animation.jsx";
import { Link } from "react-router-dom";

const StudieSpar = () => {
  return (
    <section className="projektvisning">
      <figure>
        <Animation animationClass="slideInLeft">
          <img
            src="/studiesparmockup.webp"
            alt="Mockup af StudieSpar hjemmeside"
          />
        </Animation>
      </figure>
      <article>
        <Animation animationClass="slideInRight">
          <h1 className="forsideoverskrift">StudieSpar</h1>
          <p>
            I dette projekt har jeg udviklet en hjemmeside rettet mod
            medstuderende, der fokuserer på SU-venlige tips og råd. Formålet var
            at skabe en platform, der giver praktiske og relevante oplysninger
            om, hvordan man kan optimere sin økonomi som studerende. <br />
            <br />
            Hjemmesiden er udviklet med HTML5 og CSS3, og jeg har lagt vægt på
            at optimere både SEO og performance. Informationsarkitekturen er
            designet med fokus på en klar og intuitiv navigation, som
            understøtter en effektiv brugeroplevelse. <br /> <br /> Projektet
            har givet mig erfaring i planlægning, ideudvikling og
            projektstyring, og resultatet er en hjemmeside, der effektivt
            imødekommer målgruppens behov og skaber en engagerende oplevelse.
            Hjemmesiden blev implementeret med en visuel identitet og
            funktionalitet, der imødekommer målgruppens behov og skaber en
            engagerende oplevelse.
          </p>
          <div className="knap">
            <Link to="/">
              <button className="forsideknap">Se andre projekter</button>
            </Link>
            <a href="https://studiespar.mikkelruby.dk/">
              <button className="forsideknap">Besøg hjemmesiden</button>
            </a>
          </div>
        </Animation>
      </article>
    </section>
  );
};

export default StudieSpar;
