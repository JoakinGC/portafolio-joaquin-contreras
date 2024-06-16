import React from "react";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas
} from "./components";
import "./components/portfolio.scss";
import i18n from "./utils/i18";

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center relative'>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Works />
          <Tech />
          {/*<Feedbacks />*/}
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </I18nextProvider>
  );
};

export default App;

