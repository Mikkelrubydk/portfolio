import "../Kompetencer/Kompetencer.css";
import Animation from "../Animation/Animation.jsx";

const Kompetencer = () => {
  return (
    <section className="kompetencer" id="kompetencer">
      <div className="flex-centrering">
        <Animation animationClass="slideInBottom">
          <h2 className="forsideoverskrift">Kompetencer</h2>
        </Animation>
        <div className="kompetencecontainer">
          <Animation animationClass="slideInLeft">
            <article>
              <h3>Programmering</h3>
              <div>
                <img src="/coding.webp" alt="Coding Icon" />
                <p>
                  Jeg har erfaring med frontend-udvikling ved hjælp af HTML,
                  CSS, JavaScript og React. Jeg fokuserer på at skabe dynamiske
                  og brugervenlige webapplikationer, der kombinerer
                  funktionalitet og design.
                </p>
              </div>
            </article>
          </Animation>

          <Animation animationClass="slideInLeft">
            <article>
              <h3>UX/UI Design</h3>
              <div>
                <img src="/ux-design.webp" alt="UX/UI Icon" />
                <p>
                  Mit arbejde med UX/UI-design sikrer, at brugeren er i fokus.
                  Jeg stræber efter at skabe intuitive og æstetisk tiltalende
                  interfaces, der forbedrer brugeroplevelsen.
                </p>
              </div>
            </article>
          </Animation>

          <Animation animationClass="slideInLeft">
            <article>
              <h3>Responsivt Design</h3>
              <div>
                <img
                  src="/responsive-design.webp"
                  alt="Responsive Design Icon"
                />
                <p>
                  Jeg designer løsninger, der tilpasser sig perfekt til
                  forskellige enheder, fra mobil til desktop, hvilket sikrer en
                  optimal brugeroplevelse på tværs af platforme.
                </p>
              </div>
            </article>
          </Animation>

          <Animation animationClass="slideInLeft">
            <article>
              <h3>Grafisk Design</h3>
              <div>
                <img src="/web-design.webp" alt="Web Design Icon" />
                <p>
                  Med en baggrund inden for grafisk design kan jeg skabe visuelt
                  appellerende elementer, der styrker kommunikationen og
                  brandidentiteten i digitale produkter.
                </p>
              </div>
            </article>
          </Animation>

          <figure className="blurredCircle"></figure>
        </div>
      </div>
    </section>
  );
};

export default Kompetencer;
