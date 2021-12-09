import React from "react";
import Button from "./Button";
import { useEffect, useRef } from "react";

import { gsap } from "gsap";

const Nav = ({ timeline }) => {
  var gs = timeline || gsap;

  useEffect(() => {
    gs.from(".nav *", {
      duration: 0.5,
      y: -100,
      opacity: 0,
      stagger: 0.05,
    });
  }, []);

  return (
    <nav className="nav">
      <span className="logo">Logo</span>
      <div className="nav-items">
        <a href="#home" alt="home" className="nav-item">
          Home
        </a>
        <a href="#services" alt="services" className="nav-item">
          Services
        </a>
        <a href="#features" alt="features" className="nav-item">
          Features
        </a>
        <a href="#pricing" alt="pricing" className="nav-item">
          Pricing
        </a>
        <a href="#team" alt="team" className="nav-item">
          Team
        </a>
        <a href="#contact" alt="contact" className="nav-item">
          Contact
        </a>
      </div>
      {/* <button className="ctaa">CTA</button> */}
      <Button type="cta-secondary" text="Get Started" />
    </nav>
  );
};

export default Nav;
