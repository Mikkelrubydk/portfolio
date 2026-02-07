import "../About/About.css";
import Animation from "../../components/Animation/Animation.jsx";
import icons from "./icons.json";

const About = () => {
  return (
    <>
      <section className="about">
        <figure>
          <Animation animationClass="slideInLeft">
            <img src="/aboutbillede.webp" alt="Billede af mig" />
          </Animation>
        </figure>
        <article>
          <Animation animationClass="slideInRight">
            <h1 className="forsideoverskrift">Baggrund & erfaring</h1>
            <p>
              Mit navn er Mikkel Ruby, jeg er 24 år gammel og studerer
              webudvikling på Erhvervsakademi Aarhus.
              <br />
              <br />
              Jeg brænder for at skabe digitale løsninger, der kombinerer
              funktionalitet, brugervenlighed og æstetik. På studiet har jeg
              erfaring med HTML, CSS, JavaScript, React, Next.js, Tailwind og
              SASS samt backend-teknologier som PHP, Node.js, Express og SQL.
              <br />
              <br />
              Jeg arbejder både selvstændigt og i teams, omsætter designs fra
              Figma til fungerende løsninger, planlægger og udvikler websites,
              og sikrer, at alt fungerer optimalt for brugeren. I mit studiejob
              som WordPress-udvikler arbejder jeg med custom themes,
              vedligeholdelse af sites og mindre projekter med ansvar for
              planlægning, levering og support.
              <br />
              <br />
              Jeg er nysgerrig, motiveret og organiseret, og jeg stræber efter
              at skabe engagerende, intuitive og visuelt tiltalende
              weboplevelser. Mit mål er at fortsætte med at udvikle mine
              færdigheder og levere digitale løsninger, hvor teknologi og design
              går hånd i hånd.
            </p>
          </Animation>
        </article>
      </section>
      <section className="programmer">
        <Animation animationClass="slideInBottom">
          <h2 className="forsideoverskrift">Værktøjer</h2>
        </Animation>
        <Animation animationClass="slideInBottom">
          <div className="program-wrapper">
            {icons.map((icon, index) => (
              <figure key={index}>
                <img src={icon.src} alt={`${icon.name} Logo`} />
                <figcaption>{icon.name}</figcaption>
              </figure>
            ))}
          </div>
        </Animation>
      </section>

      <section className="udtalelser">
        <h2 className="forsideoverskrift">Udtalelser</h2>
        <div className="udtalelse-wrapper">
          <article>
            <Animation animationClass="slideInLeft">
              <img src="/valdemar.webp" alt="Billede af Valdemar" />
              <h3>Valdemar Berg</h3>
              <h4>Tidl. kollega</h4>
              <p>
                "Mikkel er en utrolig positiv og imødekommende person at arbejde
                sammen med. Hans smittende energi løfter stemningen blandt
                kollegerne og motiverer dem til at yde mere. Han er engageret i
                sine opgaver og meget fleksibel, når det kræves. Mikkel er
                generelt en fantastisk kollega, der både skaber en sjov
                atmosfære, men også ved, hvornår det er tid til at tage tingene
                seriøst."
              </p>
            </Animation>
          </article>

          <article>
            <Animation animationClass="slideInBottom">
              <img src="/louise.webp" alt="Billede af Louise" />
              <h3>Louise Thysen</h3>
              <h4>Medstuderende</h4>
              <p>
                "Mikkel er imødekommende og nem at arbejde sammen med i
                projekter. Han er fantastisk til at gribe vores sjove ideer og
                skabe noget unikt ud af dem. Med sin rolige og humoristiske
                personlighed bidrager han altid til et godt arbejdsmiljø."
              </p>
            </Animation>
          </article>

          <article>
            <Animation animationClass="slideInRight">
              <img src="/emil.webp" alt="" />
              <h3>Emil Klein</h3>
              <h4>Tidl. kollega</h4>
              <p>
                "Man skal lede længe efter en medarbejder med så positiv energi
                som Mikkel. Han gør en stor indsats for at skabe et trygt og
                sikkert arbejdsmiljø, og det er altid en glæde at samarbejde med
                ham. Når han får en opgave, leverer han altid 110%, og intet
                mindre. Han er altid klar på en udfordring, og hans nysgerrighed
                og vilje til at lære er virkelig beundringsværdig."
              </p>
            </Animation>
          </article>
        </div>
      </section>
    </>
  );
};

export default About;
