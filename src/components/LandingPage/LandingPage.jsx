import { useEffect } from "react";
import "../LandingPage/LandingPage.css";
import ScrollPoint from "./ScrollPoint";
// import Beam from "../UI/Beam.jsx";

const LandingPage = () => {
  useEffect(() => {
    let data = ["Nysgerrig", "Ambitiøs", "Kreativ"];
    let len = 0;
    let speed = 150;
    for (let i = 0; i < data.length; ++i) len += 2 * data[i].length;
    len += 3 * data.length;

    let timeouts = [];

    function type() {
      let p = 0;
      for (let i = 0; i < data.length; ++i) {
        let x = 0;
        while (x <= data[i].length) {
          let y = x;
          timeouts.push(
            setTimeout(() => {
              if (document.getElementById("typewriter")) {
                document.getElementById("typewriter").innerHTML = `${data[
                  i
                ].substr(0, y)}`;
              }
            }, p * speed),
          );
          (++x, ++p);
        }
        (--x, (p += 2));
        while (x >= 0) {
          let y = x;
          timeouts.push(
            setTimeout(() => {
              if (document.getElementById("typewriter")) {
                document.getElementById("typewriter").innerHTML = `${data[
                  i
                ].substr(0, y)}`;
              }
            }, p * speed),
          );
          (--x, ++p);
        }
      }
      timeouts.push(
        setTimeout(() => {
          type();
        }, len * speed),
      );
    }

    function blinkingPointer() {
      timeouts.push(
        setTimeout(() => {
          if (document.getElementById("check")) {
            document.getElementById("check").style.borderRightColor =
              `rgba(22, 49, 81, 1)`;
          }
        }, 500),
      );
      timeouts.push(
        setTimeout(() => {
          blinkingPointer();
        }, 1000),
      );
    }

    blinkingPointer();
    type();

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  function scrollDown() {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }

  return (
    <section className="forside" id="forside">
      {/* <Beam /> */}

      <figure>
        <img src="/forsidefoto.webp" alt="Billede af mig" />
      </figure>

      <article>
        <div className="forsidecontainer">
          <div className="frontbackcontainer">
            <div id="check">
              <span id="typewriter"> </span>
            </div>
            <div className="github">
              <a
                target="_blank"
                href="https://github.com/Mikkelrubydk?tab=repositories"
              >
                <img src="/github.webp" alt="GitHub Logo" />
              </a>
            </div>
            <h2 className="front">Front</h2>
            <h2 className="back">End</h2>
          </div>
          <h2 className="bottom">Developer &lt;/&gt;</h2>
        </div>
      </article>
      <ScrollPoint />

      <section className="scrollDown" onClick={scrollDown}>
        <h3>Scroll</h3>
        <img src="/pilned.png" alt="Pil ned" />
      </section>

      <article className="forsidetekst">
        <h3>Webudvikler med flair for design og funktionalitet.</h3>
      </article>
    </section>
  );
};

export default LandingPage;
