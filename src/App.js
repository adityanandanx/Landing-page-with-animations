import "./styles/vars.css";
import "./styles/utils.css";
import "./styles/App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SlideInSections from "./components/SlideInSections";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);

function App() {
  const timeline = gsap.timeline();

  // useEffect(() => {
  //   gsap.to("#rect", {
  //     duration: 2,
  //     scrollTrigger: {
  //       trigger: "svg",
  //       markers: true,
  //       scrub: true,
  //       pin: true,
  //     },
  //     motionPath: {
  //       path: "#path",
  //       align: "#path",
  //       autoRotate: true,
  //       alignOrigin: [0.5, 0.5],
  //     },
  //   });
  // }, []);

  return (
    <div className="App">
      <Nav timeline={timeline} />
      <Hero timeline={timeline} />
      <SlideInSections />
    </div>
  );
}

export default App;
