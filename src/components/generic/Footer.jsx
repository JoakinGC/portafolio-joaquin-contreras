import React from "react";
import {  useNavigate } from "react-router-dom";   
import { useTranslation } from "react-i18next";
import { SectionWrapper } from "../../hoc";

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const go = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="text-black dark:text-white p-8 flex flex-col md:flex-row md:justify-between gap-4 text-sm">
      <p>
        © 2025 Gaston Joaquin Contreras {t("footer.allRightsReserved")}
      </p>

      <nav className="flex gap-4 underline-offset-4">
        <button onClick={() => go("/legal-notice")}  className="hover:underline">{t("footer.legalNotice")}</button>
        <button onClick={() => go("/privacy-policy")} className="hover:underline">{t("footer.privacyPolicy")}</button>
        <button onClick={() => go("/cookies-policy")} className="hover:underline">{t("footer.cookiesPolicy")}</button>
      </nav>
    </footer>
  );
};

export default SectionWrapper(Footer, "footer");
