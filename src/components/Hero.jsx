import React from "react";
import "../styles/Hero.css";
import { useEffect } from "react";
import Button from "./Button";

import { gsap } from "gsap";

const Hero = ({ timeline }) => {
  var gs = timeline || gsap;

  useEffect(() => {
    gs.from(".hero > *", {
      duration: 0.5,
      y: 100,
      opacity: 0,
      stagger: 0.1,
    });
  });
  return (
    <div className="hero">
      <h1>Lorem ipsum dolor sit </h1>
      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum magni
        repellendus officiis libero blanditiis adipisci expedita assumenda
        consequuntur animi ullam?
      </h4>
      <div className="hero-input">
        <input type="email" name="email" id="email" placeholder="Email" />
        <Button text="Subscribe" type="cta" />
      </div>
    </div>
  );
};

export default Hero;
