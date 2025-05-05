import React from "react";
import { Link } from "react-router-dom";   // ← react‑router‑dom
import { useTranslation } from "react-i18next";
import { SectionWrapper } from "../../hoc";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="text-black dark:text-white p-8 flex flex-col md:flex-row md:justify-between gap-4 text-sm">
      <p>
        © 2025 Gaston Joaquin Contreras {t("footer.allRightsReserved")}
      </p>

      <nav className="flex gap-4 underline-offset-4">
        <Link to="/legal-notice" className="hover:underline">
          {t("footer.legalNotice")}
        </Link>
        <Link to="/privacy-policy" className="hover:underline">
          {t("footer.privacyPolicy")}
        </Link>
        <Link to="/cookies-policy" className="hover:underline">
          {t("footer.cookiesPolicy")}
        </Link>
      </nav>
    </footer>
  );
};

export default SectionWrapper(Footer, "footer");
