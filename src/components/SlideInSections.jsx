import React, { useEffect } from "react";
import "../styles/SlideInSections.css";
import flowers from "../assets/flowers.jpg";
import winter from "../assets/winter.jpg";
import bubble from "../assets/soap-bubble.jpg";

import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

const SlideInSections = () => {
  const tl = gsap.timeline();
  useEffect(() => {
    gsap.defaults({ duration: 1 });
    gsap.utils.toArray(".slide-in-section").forEach((s, index) => {
      tl.from(s, {
        opacity: 0,
        x: 100,
        scrollTrigger: {
          trigger: s,
          start: "top top",
          pin: true,
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div className="slide-in-container">
      <section className="slide-in-section blue">
        <div>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae
            facilis ea illo inventore praesentium provident soluta eos labore
            aperiam?
          </h4>
        </div>
        <img src={flowers} alt="flowers" />
      </section>

      <section className="slide-in-section red">
        <img src={winter} alt="winter" />
        <div>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae
            facilis ea illo inventore praesentium provident soluta eos labore
            aperiam?
          </h4>
        </div>
      </section>

      <section className="slide-in-section green">
        <div>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae
            facilis ea illo inventore praesentium provident soluta eos labore
            aperiam?
          </h4>
        </div>
        <img src={bubble} alt="bubble" />
      </section>
    </div>
  );
};

export default SlideInSections;
