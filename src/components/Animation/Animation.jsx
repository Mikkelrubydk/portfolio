import { useEffect, useRef } from "react";
import "./Animation.css";

/**
 * Animation-komponent:
 * Denne komponent tilføjer en CSS-animation, når de scroller ind i 'view'.
 * Den bruger Intersection Observer API til at overvåge, hvornår komponenten er i viewporten.
 */

const Animation = ({ children, animationClass }) => {
  const sectionRef = useRef(null);

  // useEffect-hooket bruges til at håndtere side-effekter som opsætning af Intersection Observer.
  useEffect(() => {
    const observerOptions = {
      root: null, // Ingen specifik rod, så vi bruger standarden (browserens viewport).
      rootMargin: "0px", // Ingen ekstra marginer.
      threshold: 0.01, // Animationen aktiveres, når 1% af elementet kommer i view.
    };

    // Definerer en ny Intersection Observer, der aktiverer, når det observerede element kommer i view.
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Hvis elementet er i view, tilføjes animationsklassen.
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass); // Tilføjer den angivne animationsklasse.
          observer.unobserve(entry.target); // Stopper observeringen for dette element, så det ikke aktiveres igen.
        }
      });
    }, observerOptions);

    // Hvis (sectionRef) er tilgængeligt, begynder observeren at overvåge det.
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Rydder op efter sig ved at fjerne observeren, når komponenten afmonteres eller ændres.
    return () => {
      observer.disconnect(); // Stopper alle observeringer
    };
  }, [animationClass]); // Afhængig af animationClass - hooket kører, hvis animationClass ændres.

  // Denne div bliver observeret, og animationsklassen vil blive tilføjet, når den scroller ind i view.
  return (
    <div ref={sectionRef} className="animated-section">
      {children}{" "}
      {/* Børnene (children) af komponenten, som vil få tilføjet animationen */}
    </div>
  );
};

export default Animation;
