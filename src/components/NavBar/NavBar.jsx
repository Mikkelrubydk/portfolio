import NavLinks from "./NavLinks";
import "./NavBar.css";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [scrollColor, setScrollColor] = useState(false);
  const [menuColor, setMenuColor] = useState("white");
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;

    const secondaryLogo = document.querySelector(".secondary");
    const primaryLogo = document.querySelector(".primary");
    const navBar = document.querySelector(".MobileNavigation");

    if (isDesktop) {
      if (
        scrollPosition < 2 * viewportHeight ||
        scrollPosition >= 3 * viewportHeight
      ) {
        setScrollColor(false);
        primaryLogo.style.display = "block";
        secondaryLogo.style.display = "none";
        setMenuColor("rgba(22, 49, 81, 1)");
      } else {
        setScrollColor(true);
        primaryLogo.style.display = "none";
        secondaryLogo.style.display = "block";
        setMenuColor("white");
      }
    } else {
      if (scrollPosition > 0) {
        navBar.classList.add("isScrolled");
        primaryLogo.style.display = "none";
        secondaryLogo.style.display = "block";
        setMenuColor("white");
      } else {
        navBar.classList.remove("isScrolled");
        primaryLogo.style.display = "block";
        secondaryLogo.style.display = "none";
        setMenuColor("rgba(22, 49, 81, 1)");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Ensure the correct logo and menu color are set initially
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDesktop]);

  return (
    <header className="MobileNavigation">
      <nav className="nav-wrapper">
        <Link to="/">
          <img src="/logo.webp" className="logo primary" alt="Logo blå" />
          <img
            src="/logohvid.webp"
            className="logo secondary"
            alt="Logo hvid"
          />
        </Link>
        {click ? (
          <TfiClose
            className="HamburgerMenu"
            size="25px"
            color="white"
            onClick={() => setClick(!click)}
          />
        ) : (
          <CiMenuFries
            className="HamburgerMenu"
            size="30px"
            color={menuColor}
            onClick={() => setClick(!click)}
          />
        )}
        {click && <NavLinks />}
      </nav>
    </header>
  );
};

export default NavBar;
