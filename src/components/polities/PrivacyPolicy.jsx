import React from "react";
import { useTranslation } from "react-i18next";

const PrivacyPolicy= () => {
  const { t } = useTranslation();

  return (
    <main className="container mx-auto px-4 py-10 prose dark:prose-invert space-y-4 leading-relaxed text-justify">
      <h1 className="text-4xl font-extrabold mb-6 text-center">
        {t("privacyPolicys.title")}
      </h1>
      <h2 className="font-bold">
        {t("privacyPolicys.privacyAndDataProtectionPolicy.title")}
      </h2>
      <p>{t("privacyPolicys.privacyAndDataProtectionPolicy.paragraph1")}</p>
      <p>{t("privacyPolicys.privacyAndDataProtectionPolicy.LawsPrivacyPolicy.paragraph1")}</p>
      <ul className="list-disc pl-6">
        <li>
          {t(
            "privacyPolicys.privacyAndDataProtectionPolicy.LawsPrivacyPolicy.listItem.item1"
          )}
        </li>
        <li>
          {t(
            "privacyPolicys.privacyAndDataProtectionPolicy.LawsPrivacyPolicy.listItem.item2"
          )}
        </li>
        <li>
          {t(
            "privacyPolicys.privacyAndDataProtectionPolicy.LawsPrivacyPolicy.listItem.item3"
          )}
        </li>
        <li>
          {t(
            "privacyPolicys.privacyAndDataProtectionPolicy.LawsPrivacyPolicy.listItem.item4"
          )}
        </li>
      </ul>
      <p>{t("privacyPolicys.privacyAndDataProtectionPolicy.dataResponsible.paragraph1")}</p>
      <address className="not-italic">
        <p>
          {t(
            "privacyPolicys.privacyAndDataProtectionPolicy.dataResponsible.direction"
          )}
        </p>
        <p>
          {t(
            "privacyPolicys.privacyAndDataProtectionPolicy.dataResponsible.tel"
          )}
        </p>
        <p>
          <a
            href={`mailto:${t(
              "privacyPolicys.privacyAndDataProtectionPolicy.dataResponsible.email"
            )}`}
            className="underline hover:no-underline"
          >
            {t(
              "privacyPolicys.privacyAndDataProtectionPolicy.dataResponsible.email"
            )}
          </a>
        </p>
      </address>
      <h3 className="font-bold">
        {t("privacyPolicys.privacyAndDataProtectionPolicy.personalDataRegistry")}
      </h3>
      <p>{t("privacyPolicys.privacyAndDataProtectionPolicy.paragraph2")}</p>
      <h3 className="font-bold">
        {t("privacyPolicys.privacyAndDataProtectionPolicy.principlesApplicable.title")}
      </h3>
      <p>
        {t(
          "privacyPolicys.privacyAndDataProtectionPolicy.principlesApplicable.paragraph1"
        )}
      </p>
      <ul className="list-disc pl-6">
        {Array.from({ length: 7 }).map((_, idx) => (
          <li key={`principle-${idx}`}>
            {t(
              `privacyPolicys.privacyAndDataProtectionPolicy.principlesApplicable.items.item${
                idx + 1
              }`
            )}
          </li>
        ))}
      </ul>
      <h3 className="font-bold">
        {t("privacyPolicys.privacyAndDataProtectionPolicy.categorysPersonalData.title")}
      </h3>
      <p>
        {t(
          "privacyPolicys.privacyAndDataProtectionPolicy.categorysPersonalData.paragraph1"
        )}
      </p>
      <h3 className="font-bold">
        {t("privacyPolicys.privacyAndDataProtectionPolicy.legalBasis.title")}
      </h3>
      <p>{t("privacyPolicys.privacyAndDataProtectionPolicy.legalBasis.paragraph1")}</p>
      <p>{t("privacyPolicys.privacyAndDataProtectionPolicy.legalBasis.paragraph2")}</p>
      <p>{t("privacyPolicys.privacyAndDataProtectionPolicy.legalBasis.paragraph3")}</p>
      <h3 className="font-bold">
        {t("privacyPolicys.privacyAndDataProtectionPolicy.destinationOfTheData.title")}
      </h3>
      <p>
        {t(
          "privacyPolicys.privacyAndDataProtectionPolicy.destinationOfTheData.paragraph1"
        )}
      </p>
      <p>
        {t(
          "privacyPolicys.privacyAndDataProtectionPolicy.destinationOfTheData.paragraph2"
        )}
      </p>
      <p>
        {t(
          "privacyPolicys.privacyAndDataProtectionPolicy.destinationOfTheData.paragraph3"
        )}
      </p>
      <h3 className="font-bold">
        {t("privacyPolicys.privacyAndDataProtectionPolicy.retentionPeriods.title")}
      </h3>
      <p>
        {t(
          "privacyPolicys.privacyAndDataProtectionPolicy.retentionPeriods.paragraph1"
        )}
      </p>
      <p>
        {t(
          "privacyPolicys.privacyAndDataProtectionPolicy.retentionPeriods.paragraph2"
        )}
      </p>
      <h3 className="font-bold">
        {t("privacyPolicys.privacyAndDataProtectionPolicy.recipientsPersonalData.title")}
      </h3>
      <p>
        {t(
          "privacyPolicys.privacyAndDataProtectionPolicy.recipientsPersonalData.paragraph1"
        )}
      </p>
      <p>
        {t(
          "privacyPolicys.privacyAndDataProtectionPolicy.recipientsPersonalData.paragraph2"
        )}
      </p>
      <p>
        {t(
          "privacyPolicys.privacyAndDataProtectionPolicy.recipientsPersonalData.paragraph3"
        )}
      </p>
      <h3 className="font-bold">
        {t("privacyPolicys.privacyAndDataProtectionPolicy.personalDataOfMinors.title")}
      </h3>
      <p>
        {t(
          "privacyPolicys.privacyAndDataProtectionPolicy.personalDataOfMinors.paragraph1"
        )}
      </p>
      <h3 className="font-bold">
        {t(
          "privacyPolicys.privacyAndDataProtectionPolicy.secrecyAndSecurityOfPersonalData.title"
        )}
      </h3>
      <p>
        {t(
          "privacyPolicys.privacyAndDataProtectionPolicy.secrecyAndSecurityOfPersonalData.paragraph1"
        )}
      </p>
      <p>
        {t(
          "privacyPolicys.privacyAndDataProtectionPolicy.secrecyAndSecurityOfPersonalData.paragraph2"
        )}
      </p>
      <p>
        {t(
          "privacyPolicys.privacyAndDataProtectionPolicy.secrecyAndSecurityOfPersonalData.paragraph3"
        )}
      </p>
      <h3 className="font-bold">
        {t(
          "privacyPolicys.privacyAndDataProtectionPolicy.RightsFromProcessingOfPersonalData.title"
        )}
      </h3>
      <p>
        {t(
          "privacyPolicys.privacyAndDataProtectionPolicy.RightsFromProcessingOfPersonalData.paragraph1"
        )}
      </p>
      <ul className="list-disc pl-6">
        {Array.from({ length: 7 }).map((_, idx) => (
          <li key={`right-${idx}`}>
            {t(
              `privacyPolicys.privacyAndDataProtectionPolicy.RightsFromProcessingOfPersonalData.listDigitalRights.item${
                idx + 1
              }`
            )}
          </li>
        ))}
      </ul>
      <p>
        {t(
          "privacyPolicys.privacyAndDataProtectionPolicy.RightsFromProcessingOfPersonalData.paragraph2"
        )}
      </p>
      <ul className="list-disc pl-6">
        {Array.from({ length: 5 }).map((_, idx) => (
          <li key={`req-${idx}`}>
            {t(
              `privacyPolicys.privacyAndDataProtectionPolicy.RightsFromProcessingOfPersonalData.listOfRequireForComuni.item${
                idx + 1
              }`
            )}
          </li>
        ))}
      </ul>
      <p>
        {t(
          "privacyPolicys.privacyAndDataProtectionPolicy.RightsFromProcessingOfPersonalData.paragraph3"
        )}
      </p>
      <p>
        {t(
          "privacyPolicys.privacyAndDataProtectionPolicy.RightsFromProcessingOfPersonalData.paragraph4"
        )}
      </p>
      <p>
        {t(
          "privacyPolicys.privacyAndDataProtectionPolicy.RightsFromProcessingOfPersonalData.paragraph5"
        )}
      </p>
      <h3 className="font-bold">
        {t(
          "privacyPolicys.privacyAndDataProtectionPolicy.linksThirdPartyWebsites.title"
        )}
      </h3>
      <p>
        {t(
          "privacyPolicys.privacyAndDataProtectionPolicy.linksThirdPartyWebsites.paragraph1"
        )}
      </p>
      <h3 className="font-bold">
        {t(
          "privacyPolicys.privacyAndDataProtectionPolicy.complaintsSupervisoryAuthority.title"
        )}
      </h3>
      <p>
        {t(
          "privacyPolicys.privacyAndDataProtectionPolicy.complaintsSupervisoryAuthority.paragraph1"
        )}
      </p>
      <h2 className="font-bold mt-10">
        {t("privacyPolicys.acceptanceAndChangesPrivacyPolicy.title")}
      </h2>
      <p>{t("privacyPolicys.acceptanceAndChangesPrivacyPolicy.paragraph1")}</p>
      <p>{t("privacyPolicys.acceptanceAndChangesPrivacyPolicy.paragraph2")}</p>
      <p>{t("privacyPolicys.acceptanceAndChangesPrivacyPolicy.paragraph3")}</p>
      <p>{t("privacyPolicys.acceptanceAndChangesPrivacyPolicy.paragraph4")}</p>
    </main>
  );
};

export default PrivacyPolicy;
