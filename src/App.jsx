import React from "react";
import { ToastContainer } from "react-toastify";
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Footer,
  WhatsAppButton,
  LegalNotice,
  Home
} from "./components";
import "./styles/global.scss";
import i18n from "./utils/i18";
import {styles} from "../src/styles";
import PrivacyPolicy from "./components/polities/PrivacyPolicy";
import CookiesPolicy from "./components/polities/CookiesPolicy";


const App = () => (
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      <div className={`relative z-0 ${styles.bg}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal-notice" element={<LegalNotice />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookies-policy" element={<CookiesPolicy />} />
        </Routes>
        <Footer />
        <ToastContainer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  </I18nextProvider>
);


export default App;

