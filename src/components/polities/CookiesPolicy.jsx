import React from "react";
import { useTranslation } from "react-i18next";
import { styles } from "../../styles";

const CookiesPolicy = () => {
  const { t } = useTranslation();

  return (
    <section
      className={`${styles.paddingX} prose prose-lg space-y-4 leading-relaxed text-justify`}
    >

      <h1 className="text-4xl font-extrabold mb-6 text-center">
        {t("cookiesPolicy.title")}
      </h1>

      <p>{t("cookiesPolicy.paragraph1")}</p>
      <p>{t("cookiesPolicy.paragraph2")}</p>
      <p>{t("cookiesPolicy.paragraph3")}</p>
      <p>{t("cookiesPolicy.paragraph4")}</p>

      <h2 className="font-bold">{t("cookiesPolicy.titleCokkies")}</h2>
      <p>{t("cookiesPolicy.paragraph5")}</p>

      <h2 className="font-bold">{t("cookiesPolicy.deleteCookies")}</h2>
      <p>{t("cookiesPolicy.paragraph6")}</p>

      <p>{t("cookiesPolicy.paragraph7")}</p>
    </section>
  );
};

export default CookiesPolicy;
