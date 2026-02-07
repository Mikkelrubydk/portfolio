import "./Pages.css";
import Animation from "../components/Animation/Animation.jsx";
import { Link } from "react-router-dom";

const Streetfood = () => {
  return (
    <section className="projektvisning">
      <figure>
        <Animation animationClass="slideInLeft">
          <img
            src="/streetfoodmockup.webp"
            alt="Mockup af Aarhus Streetfoods hjemmeside"
          />
        </Animation>
      </figure>
      <article>
        <Animation animationClass="slideInRight">
          <h1 className="forsideoverskrift">Aarhus Streetfood</h1>
          <p>
            I dette projekt har vi redesignede Aarhus Streetfoods hjemmeside med
            fokus på Mobile First og Responsive Web Design. Vores mål var at
            forbedre den grafiske appel, navigationsstrukturen og
            responsiviteten for at imødekomme moderne brugeradfærd, især på
            smartphones. <br />
            <br /> Vi begyndte med at indsamle data og analysere brugeradfærd
            for at definere vores målgruppe og udvikle personas. Baseret på
            denne research har vi designet en mobilvenlig grænseflade med
            prioritering af vigtigste funktioner og indhold til mindre skærme.
            Kodningsmæssigt implementerede vi en valideret HTML5- og
            CSS3-struktur og anvendte JavaScript til interaktive elementer. Vi
            har optimeret hjemmesiden til hurtig indlæsning og SEO med fokus på
            mobilvenlighed. Projektet resulterede i en hjemmeside, der lever op
            til Mobile First strategien og giver en sammenhængende
            brugeroplevelse på både smartphones og desktop.
          </p>
          <div className="knap">
            <Link to="/">
              <button className="forsideknap">Se andre projekter</button>
            </Link>
            <a href="https://aarhusstreetfood.mikkelruby.dk/">
              <button className="forsideknap">Besøg hjemmesiden</button>
            </a>
          </div>
        </Animation>
      </article>
    </section>
  );
};

export default Streetfood;
