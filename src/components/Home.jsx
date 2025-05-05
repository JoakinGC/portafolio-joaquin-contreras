import React from "react";
import {
  About,
  Contact,
  Experience,
  Hero,
  Tech,
  Works,
  Notes,
  StarsCanvas,
} from "./index";

const Home = () => (
  <>
    <div className="dark:bg-hero-pattern bg-cover bg-no-repeat bg-center relative">
      <Hero />
    </div>
    <About />
    <Experience />
    <Works />
    <Notes />
    <Tech />
    <div className="relative z-0">
      <Contact />
      <StarsCanvas />
    </div>
  </>
);

export default Home;
