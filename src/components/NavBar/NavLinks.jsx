import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NavLinks = () => {
  const location = useLocation();

  // Når URL'en ændres, scroll til den sektion der svarer til hash
  useEffect(() => {
    // Hvis der er en hash i URL'en
    if (location.hash) {
      // Få elementet med id svarende til hash
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // Scroll til det element
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <nav className="NavLinks">
      <ul>
        <li>
          <Link to="/#forside">Hjem</Link>
        </li>
        <li>
          <Link to="/#kompetencer">Kompetencer</Link>
        </li>
        <li>
          <Link to="/#ommig">Om mig</Link>
        </li>
        <li>
          <Link to="/#projekter">Projekter</Link>
        </li>

        <figure className="socials">
          <a
            href="https://github.com/Mikkelrubydk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/github.svg" alt="Github Logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/mikkel-h%C3%B8j-ruby-b5531228b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin.svg" alt="Linkedin Logo" />
          </a>
        </figure>
      </ul>
    </nav>
  );
};

export default NavLinks;
