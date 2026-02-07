import "../Footer/Footer.css";
import Animation from "../Animation/Animation.jsx";
import Materialer from "../../../materialer/CV-Mikkel-2026.pdf";

const Footer = () => {
  return (
    <footer className="footer">
      <article>
        <Animation animationClass="slideInBottom">
          <h3>Navigation</h3>
          <nav>
            <ul>
              <li>
                <a href="/">Hjem</a>
              </li>
              <li>
                <a href="#kompetencer">Kompetencer</a>
              </li>
              <li>
                <a href="#ommmig">Om mig</a>
              </li>
              <li>
                <a href="#projekter">Projekter</a>
              </li>
            </ul>
          </nav>
        </Animation>
      </article>
      <article>
        <Animation animationClass="slideInBottom">
          <h3>Kontakt mig</h3>
          <div className="kontaktinfo">
            <p>Knudrisgade 9, st</p>
            <p>8000 Aarhus C</p>
            <p>
              <a href="tel:+4542610079">+45 42 61 00 79</a>
            </p>
            <p>
              <a href="mailto:Mikkelruby1@hotmail.com">
                Mikkelruby1@hotmail.com
              </a>
            </p>
          </div>
          <figure className="footersocials">
            <a
              href="https://www.linkedin.com/in/mikkel-h%C3%B8j-ruby-b5531228b/"
              aria-label="LinkedIn"
              target="_blank"
            >
              <img src="/linkedin2.svg" alt="LinkedIn Logo" />
            </a>
            <a
              href="https://www.instagram.com/mikkelruby"
              aria-label="Instagram"
              target="_blank"
            >
              <img src="/insta.svg" alt="Instagram Logo" />
            </a>
            <a
              href="https://www.facebook.com/mikkelruby"
              aria-label="Facebook"
              target="_blank"
            >
              <img src="/facebook.svg" alt="Facebook Logo" />
            </a>
          </figure>
        </Animation>
      </article>
      <article>
        <Animation animationClass="slideInBottom">
          <h3>Er vi et match?</h3>
          <p>
            Jeg er på udkig efter en praktikplads som frontend eller fullstack
            developer, hvor jeg kan arbejde med moderne frameworks og
            videreudvikle mine kompetencer.
          </p>
          <div className="knap">
            <a
              href={Materialer}
              target="_blank"
              rel="noopener noreferrer"
              className="forsideknap"
            >
              Hent CV
            </a>
          </div>
        </Animation>
      </article>
      <p className="copyright">
        © 2024 Mikkel Ruby. Alle rettigheder forbeholdes.
      </p>
    </footer>
  );
};

export default Footer;
