import React from "react";
import { useTranslation } from "react-i18next";
import { styles } from "../../styles";

const LegalNotice = () => {
  const { t } = useTranslation();

  return (
      <section className={`${styles.paddingX} prose prose-lg py-20 space-y-4 leading-relaxed text-justify`}>
        <h1 className="text-4xl font-extrabold mb-6 text-center">
          {t("LegalNotice.title")}
        </h1>

        <h2 className="font-bold">{t("LegalNotice.generalInformation.title")}</h2>
        <p>{t("LegalNotice.generalInformation.paragraph1")}</p>
        <p>{t("LegalNotice.generalInformation.paragraph2")}</p>
        <address className="not-italic">
          <p>{t("LegalNotice.generalInformation.direction")}</p>
          <p>{t("LegalNotice.generalInformation.phone")}</p>
          <p>
            <a
              href={`mailto:${t("LegalNotice.generalInformation.email")}`}
              className="underline hover:no-underline"
            >
              {t("LegalNotice.generalInformation.email")}
            </a>
          </p>
        </address>


        <h2 className="font-bold">{t("LegalNotice.generalTermsAndCondi.title")}</h2>
        <h3 className="font-bold">{t("LegalNotice.generalTermsAndCondi.subtitle")}</h3>
        <p>{t("LegalNotice.generalTermsAndCondi.paragraph1")}</p>
        <p>{t("LegalNotice.generalTermsAndCondi.paragraph2")}</p>
        <p>{t("LegalNotice.generalTermsAndCondi.paragraph3")}</p>
        <p>{t("LegalNotice.generalTermsAndCondi.paragraph4")}</p>

        <h3 className="font-bold">{t("LegalNotice.generalTermsAndCondi.userTitle")}</h3>
        <p>{t("LegalNotice.generalTermsAndCondi.paragraph5")}</p>
        <p>{t("LegalNotice.generalTermsAndCondi.paragraph6")}</p>
        <ul className="list-disc pl-6">
          <li>{t("LegalNotice.generalTermsAndCondi.item1")}</li>
          <li>{t("LegalNotice.generalTermsAndCondi.item2")}</li>
        </ul>
        <p>{t("LegalNotice.generalTermsAndCondi.paragraph7")}</p>
        <p>{t("LegalNotice.generalTermsAndCondi.paragraph8")}</p>
        <p>{t("LegalNotice.generalTermsAndCondi.paragraph9")}</p>
        <p>{t("LegalNotice.generalTermsAndCondi.paragraph10")}</p>
        <p>{t("LegalNotice.generalTermsAndCondi.paragraph11")}</p>

        <h2 className="font-bold">{t("LegalNotice.accessAndNavigation.title")}</h2>
        <p>{t("LegalNotice.accessAndNavigation.paragraph1")}</p>
        <p>{t("LegalNotice.accessAndNavigation.paragraph2")}</p>
        <p>{t("LegalNotice.accessAndNavigation.paragraph3")}</p>

        <h2 className="font-bold">{t("LegalNotice.linksPolicy.title")}</h2>
        <p>{t("LegalNotice.linksPolicy.paragraph1")}</p>
        <p>{t("LegalNotice.linksPolicy.paragraph2")}</p>
        <p>{t("LegalNotice.linksPolicy.paragraph3")}</p>
        <p>{t("LegalNotice.linksPolicy.paragraph4")}</p>
        <p>{t("LegalNotice.linksPolicy.paragraph5")}</p>
        <p>{t("LegalNotice.linksPolicy.paragraph6")}</p>
        <p>{t("LegalNotice.linksPolicy.paragraph7")}</p>
        <p>{t("LegalNotice.linksPolicy.paragraph8")}</p>
        <p>{t("LegalNotice.linksPolicy.paragraph9")}</p>
        <p>{t("LegalNotice.linksPolicy.paragraph10")}</p>
        <p>{t("LegalNotice.linksPolicy.paragraph11")}</p>

        <h2 className="font-bold">{t("LegalNotice.intellectAndIndusProperty.title")}</h2>
        <p>{t("LegalNotice.intellectAndIndusProperty.paragraph1")}</p>
        <p>{t("LegalNotice.intellectAndIndusProperty.paragraph2")}</p>
        <p>{t("LegalNotice.intellectAndIndusProperty.paragraph3")}</p>
        <p>{t("LegalNotice.intellectAndIndusProperty.paragraph4")}</p>
      </section>
  );
};

export default LegalNotice;
