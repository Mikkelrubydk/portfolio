import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./beam.css";

function Beam() {
  const beam = useRef();

  useEffect(() => {
    gsap.fromTo(
      beam.current,
      { x: "-120%", skewX: -20, opacity: 0 },
      {
        x: "120%",
        opacity: 1,
        duration: 2,
        ease: "power3.out",
      },
    );
  }, []);

  return (
    <div className="beam-wrap">
      <div ref={beam} className="beam" />
    </div>
  );
}

export default Beam;
