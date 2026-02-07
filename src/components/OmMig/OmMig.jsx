import "../OmMig/OmMig.css";
import { Link } from "react-router-dom";
import Animation from "../Animation/Animation.jsx";
import Materialer from "../../../materialer/CV-Mikkel-2026.pdf";

const OmMig = () => {
  return (
    <section className="ommig" id="ommig">
      <main>
        <Animation animationClass="slideInLeft">
          <article>
            <h2 className="forsideoverskrift">Lær mig at kende</h2>
            <p>
              Mit navn er Mikkel Ruby, og jeg er 24 år og studerer webudvikling
              på Erhvervsakademi Aarhus. Jeg bruger teknologier som JavaScript,
              React, Next.js, Tailwind og SASS, og har erfaring med både
              frontend og backend gennem PHP, Node.js, Express og SQL.
              <br />
              <br />
              Jeg er vant til både selvstændigt arbejde og teamwork, hvor jeg
              omsætter designs fra Figma til fungerende løsninger, håndterer
              kundekontakt og sikrer, at alt fungerer optimalt. I mit studiejob
              som WordPress-udvikler arbejder jeg med custom theme-building,
              vedligeholdelse af eksisterende websites og mindre projekter, hvor
              jeg har ansvar for planlægning, levering og support.
              <br />
              <br />
              Jeg er nysgerrig, motiveret og organiseret, og jeg stræber altid
              efter at optimere løsninger og lære nye teknologier for at skabe
              bedre weboplevelser.
            </p>
            <div className="knap">
              <Link to="/about">
                <button className="forsideknap">Læs mere</button>
              </Link>
              <a href={Materialer} target="_blank" rel="noopener noreferrer">
                <button className="forsideknap">Hent CV</button>
              </a>
            </div>
          </article>
        </Animation>

        <Animation animationClass="slideInRight">
          <figure>
            <div className="fotofilter"></div>
            <img src="/ommigfoto.webp" alt="Billede af mig" />
          </figure>
        </Animation>
      </main>
    </section>
  );
};

export default OmMig;
