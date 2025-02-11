import React from "react";
import { ToastContainer } from "react-toastify";
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
  StarsCanvas,
  Notes
} from "./components";
import "./styles/global.scss";
import i18n from "./utils/i18";
import {styles} from "../src/styles";


const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <div className={`relative z-0 ${styles.bg}`} >
          <div className={`${styles.bg} dark:bg-hero-pattern bg-cover bg-no-repeat bg-center relative`}>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Works />
          {/*<Notes/>*/}
          <Tech />
          
          {/*<Feedbacks />*/}
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
          <ToastContainer/>
        </div>
      </BrowserRouter>
    </I18nextProvider>
  );
};

export default App;

