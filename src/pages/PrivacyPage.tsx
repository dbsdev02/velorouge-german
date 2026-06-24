import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useTranslation } from "react-i18next";

const de = {
  title: "Datenschutzrichtlinie",
  sections: [
    {
      heading: "1. Präambel",
      body: `Diese Datenschutzrichtlinie informiert Sie über die Verarbeitung personenbezogener Daten durch TourDeWheel zum Schutz personenbezogener Daten natürlicher Personen gemäß der Verordnung (EU) 2016/679 des Europäischen Parlaments und des Rates vom 27. April 2016 (DSGVO).\n\nIndem Sie uns Ihre persönlichen und sonstigen Daten zur Verfügung stellen, stimmen Sie den allgemeinen Bedingungen dieser Datenschutzrichtlinie zu.\n\nDiese Datenschutzrichtlinie kann sich in Abhängigkeit vom rechtlichen und regulatorischen Kontext ändern.`,
    },
    {
      heading: "2. Identität des Verantwortlichen",
      body: `TourDeWheel, eine vereinfachte Aktiengesellschaft mit einem Stammkapital von 20.000 €, mit Sitz in 16 avenue de la Paix – 67000 Straßburg, eingetragen im Handelsregister Straßburg unter der Nummer 100 164 706, vertreten durch ihren Präsidenten, Herrn Prashant KOTHARI.`,
    },
    {
      heading: "3. Erhobene Daten",
      body: `TourDeWheel achtet darauf, nur die für den jeweiligen Verarbeitungszweck streng notwendigen Daten zu erheben und zu verarbeiten, entsprechend dem Grundsatz der Datensparsamkeit.\n\n\"Personenbezogene Daten\" sind Informationen, die Sie als Person identifizieren oder sich auf eine identifizierbare Person beziehen.\n\nZur Ermittlung des Kundenbedarfs und zur Erstellung der Kundendatei und des Buchungsvertrags können folgende personenbezogene Daten je nach Nutzerstatus erhoben und verarbeitet werden:`,
      subsections: [
        {
          heading: "3.1. Allgemeine Daten",
          items: [
            "Identitäts- und Kontaktdaten: Anrede, Name, Vorname, Geburtsdatum und -ort, Staatsangehörigkeit, Wohnadresse, E-Mail-Adresse, Telefonnummer, Notfallkontakt (Name, Vorname und Telefonnummer), Sprachpräferenz, Unterschrift, Ausweisdokument, durch Videoüberwachung am Verkaufspunkt erfasste Bilder …",
            "Finanz- und Vertragsdaten: Bankdaten, Bankvorautorisierung per Kreditkarte, Zahlungshistorie, Streitbeilegung, Rechnungsdaten …",
            "Identitätsverifizierungsdaten: Ein KYC-Prozess (\"Know Your Customer\") kann bei der Vermietung bestimmter Modelle eingesetzt werden.",
            "Standort- und GPS-Daten: GPS-Koordinaten in Echtzeit, Routenverlauf, Fahrtdauer und -strecke, Daten zu geführten Touren …",
            "Digitale und technische Daten: Login-ID, Geräte-ID und IP-Adresse, Browser-Nutzungsdaten, Cookie-bezogene Daten, Benachrichtigungspräferenzen …",
          ],
        },
        {
          heading: "3.2. Zusätzliche Daten speziell für unabhängige Lieferfahrer",
          body: "Berufsstatus, SIRET-Nummer, Zugehörigkeit zu einer Lieferplattform, Wartungsanfragen-Verlauf, Vorfalls- und Unfallberichte, Fahrradstandsberichte, Betrag und Datum der Fondszahlungen, Vertragslaufzeit, Bonitätsprüfung …",
        },
        {
          heading: "3.3. Zusätzliche Daten speziell für touristische Aktivitäten",
          body: "Tourenbuchung, Interaktionsdaten mit dem Audioguide, Bewertungen und Kommentare, OTA-Buchungsreferenz, Tauglichkeitserklärung …\n\nDiese Daten können direkt von der betroffenen Person oder von Partnern und anderen Dritten, wie z. B. Reisebüros, erhoben werden.",
        },
        {
          heading: "3.5. Cookies",
          body: "Beim Durchsuchen der Website können Cookies auf dem Endgerät des Nutzers gesetzt werden. Ein Cookie ist eine kleine alphanumerische Textdatei, die vom Server der besuchten Website oder einem Drittanbieter-Server (Tawk, Meta und Google Analytics) auf dem Computer des Internetnutzers abgelegt wird.\n\nEs gibt verschiedene Arten von Cookies (Sitzungs-, Drittanbieter-, persistente Cookies usw.) mit unterschiedlichen Funktionen. Einige Cookies sind erforderlich, um auf Funktionen der Website zuzugreifen, andere sind für den Besucher praktisch nützlich.\n\nSie sind nicht verpflichtet, Cookies zu akzeptieren, um unsere Website zu besuchen. Die Funktionalität unserer Website und unserer Dienste kann jedoch beeinträchtigt sein, wenn Sie das Setzen von Cookies nicht erlauben.",
        },
      ],
    },
    {
      heading: "4. Zwecke der Erhebung",
      body: "Die von TourDeWheel durchgeführten Verarbeitungen dienen expliziten, legitimen und bestimmten Zwecken, nämlich der Bereitstellung von E-Bike- und Segway-Roller-Vermietungen in drei verschiedenen Formen:",
      items: [
        "Mietkaufprogramm für professionelle Lieferfahrer",
        "Touristische Erlebnisse – geführte Fahrradtouren über mobile App oder unabhängigen Reiseführer für Einzelpersonen",
        "Kurz-, mittel- und langfristige Vermietung – täglich, wöchentlich, monatlich und jährlich für Einzelpersonen",
      ],
      afterItems: "Diese sind Gegenstand der für Folgendes notwendigen Hauptverarbeitungen: Erstellung der Kundendatei; administrative und buchhalterische Verwaltung; Streitbeilegung; Verwaltung geführter Touren; Flottenmanagement (Sicherheit, Versicherung, Wartung …); Partnermanagement; Optimierung der Kundenerfahrung, Marketing, Statistik.\n\nAll diese Verarbeitungen sind für die Durchführung des E-Bike- oder Segway-Vermietungsvertrags durch TourDeWheel erforderlich.",
    },
    {
      heading: "5. Rechtsgrundlage der Verarbeitung",
      body: "Die Rechtsgrundlagen der Verarbeitung Ihrer personenbezogenen Daten sind vertraglicher Natur und basieren auf der Einwilligung der betroffenen Person oder dem berechtigten Interesse von TourDeWheel.",
    },
    {
      heading: "6. Empfänger der Daten",
      body: "Empfänger Ihrer personenbezogenen Daten sind die zuständigen Mitarbeiter von TourDeWheel.\n\nTourDeWheel gibt Ihre personenbezogenen Daten nur an befugte und bestimmte Empfänger weiter, wie z. B. den IT-Datenhoster.\n\nIhre Daten werden von TourDeWheel nicht außerhalb des Gebiets der Europäischen Union übermittelt.",
    },
    {
      heading: "7. Aufbewahrungsfrist",
      body: "TourDeWheel bewahrt Ihre personenbezogenen Daten nur so lange auf, wie es für die Zwecke, für die sie erhoben wurden, erforderlich ist, und in Übereinstimmung mit den geltenden Rechtsvorschriften.",
      items: [
        "Kundendaten werden für die Dauer der Vertragsbeziehung zuzüglich 5 Jahren aufbewahrt.",
        "Interessentendaten werden für einen Zeitraum von 3 Jahren ab dem letzten eingehenden Kontakt mit TourDeWheel aufbewahrt.",
        "Buchhaltungsdaten werden 10 Jahre ab dem Ende des entsprechenden Geschäftsjahres aufbewahrt.",
        "Standort-/GPS-Daten werden 30 Tage ab Ende der Vermietung aufbewahrt.",
        "Der Nachweis der Einwilligung zur Cookie-Setzung wird 5 Jahre ab dem Einwilligungsdatum aufbewahrt.",
        "Videoüberwachungsbilder werden maximal 30 Tage aufbewahrt. Bilder, die als Beweismittel in einem Rechtsstreit dienen, werden für die Dauer des Rechtsstreits aufbewahrt.",
      ],
      afterItems: "Diese Aufbewahrungsfristen können sich in Abhängigkeit von gesetzlichen Aufbewahrungspflichten und Verjährungsfristen ändern.",
    },
    {
      heading: "8. Pflicht- oder freiwillige Angaben",
      body: "Mit einem Sternchen gekennzeichnete Felder sind Pflichtfelder, um die Anfrage bearbeiten zu können.",
    },
    {
      heading: "9. Sicherheit",
      body: "TourDeWheel gewährleistet die Sicherheit Ihrer personenbezogenen Daten durch den Einsatz geeigneter physischer und logischer Sicherheitsmaßnahmen.\n\nDas Daten-Hosting wird von einem Unternehmen bereitgestellt, dessen Server in Frankreich (EU) angesiedelt sind.",
    },
    {
      heading: "10. Ihre Rechte",
      body: "Gemäß der DSGVO (Verordnung (EU) 2016/679 vom 27. April 2016) haben Sie das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten.\n\nSie können diese Rechte geltend machen, indem Sie unseren Datenschutzbeauftragten per E-Mail unter: info@velorouge.de oder per Post an: TourDeWheel – 16 avenue de la Paix – 67000 Straßburg kontaktieren.\n\nSie haben außerdem das Recht, eine Beschwerde beim Bundesbeauftragten für den Datenschutz und die Informationsfreiheit (BfDI) – Husarenstraße 30, 53117 Bonn – oder bei der zuständigen Datenschutzaufsichtsbehörde einzulegen, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen die DSGVO verstößt.",
    },
    {
      heading: "11. Kontakt",
      body: "Für alle Anfragen zur Datenschutzrichtlinie von TourDeWheel wenden Sie sich bitte an: info@velorouge.de",
    },
  ],
};

const en = {
  title: "Data Protection Policy",
  sections: [
    {
      heading: "1. Preamble",
      body: `This data protection policy aims to inform you about the personal data processing implemented by TourDeWheel to ensure respect for the personal data of individuals, in accordance with European Regulation No. 2016/679/EU of 27 April 2016 on Data Protection (GDPR).\n\nBy providing us with your personal and other information, you accept the general terms of this Data Protection Policy.\n\nThis privacy policy may evolve depending on the legal and regulatory context.`,
    },
    {
      heading: "2. Identity of the data controller",
      body: `TourDeWheel, a simplified joint-stock company, with a share capital of €20,000, whose registered office is located 16 avenue de la Paix – 67000 Strasbourg, registered with the Strasbourg Trade and Companies Register under number 100 164 706, represented by its President, Mr. Prashant KOTHARI.`,
    },
    {
      heading: "3. Data collected",
      body: `TourDeWheel ensures that only data strictly necessary for the purpose of the processing implemented is collected and processed, in accordance with the data minimisation principle.\n\n"Personal data" is information that identifies you as a person or relates to an identifiable person.\n\nIn order to define customer needs and to create customer files and booking contracts, the following personal data may be collected and processed depending on the user's role:`,
      subsections: [
        {
          heading: "3.1. General data",
          items: [
            "Identity and contact details: title, surname, first name, date and place of birth, nationality, home address, email address, telephone number, emergency contact (name, first name and telephone number), language preference, signature, identity document, images collected by video surveillance at the point of sale…",
            "Financial and contractual data: bank details, bank pre-authorisation by credit card, payment history, dispute resolution, billing data…",
            "Identity verification data: the KYC (\"Know Your Customer\") process may be implemented for the rental of specific models.",
            "Location and GPS data: real-time GPS coordinates, route history, journey duration and distance, guided tour data…",
            "Digital and technical data: login ID, device ID and IP address, browser usage data, cookie-related data, notification preferences…",
          ],
        },
        {
          heading: "3.2. Additional data specific to independent delivery riders",
          body: "Professional status, SIRET number, delivery platform affiliation, maintenance request history, incident and accident reports, bicycle condition reports, amount and date of payment of calls for funds, contract duration, solvency assessment…",
        },
        {
          heading: "3.3. Additional data specific to tourist activities",
          body: "Tour booking, audio guide interaction data, reviews and comments, OTA booking reference, fitness declaration…\n\nThis data may be collected directly from the data subject or from partners and other third parties, such as travel agencies.",
        },
        {
          heading: "3.5. Cookies",
          body: "When browsing the website, cookies may be placed on the user's device. A cookie is a small alphanumeric text file placed on the internet user's computer by the server of the website visited or by a third-party server (Tawk, Meta and Google Analytics).\n\nThere are different types of cookies (session, third-party, persistent, etc.) with different roles. Some cookies are necessary to access website features, while others are practically useful for the visitor.\n\nYou are not required to accept cookies to visit our website. However, the functioning of our website and services may be affected if you do not allow cookies to be placed.",
        },
      ],
    },
    {
      heading: "4. Purposes of collection",
      body: "The processing implemented by TourDeWheel serves explicit, legitimate and defined purposes, namely the provision of electric bicycle and Segway scooter rentals in three distinct modes:",
      items: [
        "Lease-purchase programme for professional delivery riders",
        "Tourist experiences — guided bicycle tours via mobile app or independent guide, for individuals",
        "Short, medium and long-term rental — daily, weekly, monthly and yearly, for individuals",
      ],
      afterItems: "These are subject to the main processing operations necessary for: creating the customer file; administrative and accounting management; dispute management; guided tour management; fleet management (safety, insurance, maintenance…); partnership management; customer experience optimisation, marketing, statistics.\n\nAll of these processing operations are necessary for the execution of the electric bicycle or Segway scooter rental contract by TourDeWheel.",
    },
    {
      heading: "5. Legal basis for processing",
      body: "The legal bases associated with the processing of your personal data are contractual and based on the consent of the data subject or the legitimate interest of TourDeWheel.",
    },
    {
      heading: "6. Data recipients",
      body: "The recipients of your personal data are the relevant employees of TourDeWheel.\n\nTourDeWheel only communicates your personal data to authorised and specific recipients, such as its IT data host.\n\nYour data is not transferred outside the European Union territory by TourDeWheel.",
    },
    {
      heading: "7. Data retention period",
      body: "TourDeWheel only retains your personal data for the period necessary for the operations for which it was collected, and in compliance with current legislation.",
      items: [
        "Customer data is retained for the duration of the contractual relationship, plus 5 years.",
        "Prospect data is retained for a period of 3 years from the last incoming contact with TourDeWheel.",
        "Accounting data is retained for 10 years from the end of the corresponding financial year.",
        "Location/GPS data is retained for 30 days from the end of the rental.",
        "Proof of consent for cookie placement is retained for 5 years from the date of consent.",
        "Video surveillance images are retained for a maximum of 30 days. Images used as evidence in legal proceedings are retained for the duration of the dispute.",
      ],
      afterItems: "These retention periods are subject to change depending on legal retention obligations and statutory limitation periods.",
    },
    {
      heading: "8. Mandatory or optional nature of responses",
      body: "Fields marked with an asterisk are mandatory in order to process the request.",
    },
    {
      heading: "9. Security",
      body: "TourDeWheel ensures the security of your personal data through the use of appropriate physical and logical security measures.\n\nData hosting is provided by a company whose servers are located in France (EU).",
    },
    {
      heading: "10. Your rights",
      body: "In accordance with the GDPR (Regulation (EU) 2016/679 of 27 April 2016), you have the right of access, rectification, erasure, restriction of processing, data portability, and objection to the processing of your personal data.\n\nYou can exercise these rights by contacting our representative by email at: info@velorouge.de or by post to: TourDeWheel – 16 avenue de la Paix – 67000 Strasbourg.\n\nYou also have the right to lodge a complaint with the Federal Commissioner for Data Protection and Freedom of Information (BfDI) or with the competent supervisory authority in your country of residence if you believe that the processing of your data violates the GDPR.",
    },
    {
      heading: "11. Contact",
      body: "For any information requests concerning the personal data protection policy implemented by TourDeWheel, you can contact: info@velorouge.de",
    },
  ],
};

type Section = {
  heading: string;
  body?: string;
  items?: string[];
  afterItems?: string;
  subsections?: {
    heading: string;
    body?: string;
    items?: string[];
  }[];
};

const renderSection = (section: Section, idx: number) => (
  <div key={idx} className="mb-10">
    <h2 className="font-display text-xl md:text-2xl font-black mb-3">{section.heading}</h2>
    {section.body && section.body.split("\n\n").map((p, i) => (
      <p key={i} className="text-muted-foreground leading-relaxed mb-3">{p}</p>
    ))}
    {section.items && (
      <ul className="list-disc list-inside space-y-1.5 mb-3 text-muted-foreground">
        {section.items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    )}
    {section.afterItems && section.afterItems.split("\n\n").map((p, i) => (
      <p key={i} className="text-muted-foreground leading-relaxed mb-3">{p}</p>
    ))}
    {section.subsections && section.subsections.map((sub, si) => (
      <div key={si} className="mt-5 ml-4">
        <h3 className="font-semibold text-base mb-2">{sub.heading}</h3>
        {sub.body && sub.body.split("\n\n").map((p, i) => (
          <p key={i} className="text-muted-foreground leading-relaxed mb-3">{p}</p>
        ))}
        {sub.items && (
          <ul className="list-disc list-inside space-y-1.5 text-muted-foreground">
            {sub.items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        )}
      </div>
    ))}
  </div>
);

const PrivacyPage = () => {
  const { i18n } = useTranslation();
  const content = i18n.language.startsWith("de") ? de : en;

  return (
    <main>
      <SEO
        title="Datenschutzrichtlinie — VéloRouge"
        description="Datenschutzrichtlinie von VéloRouge / TourDeWheel."
        canonical="/privacy"
      />
      <Navbar />

      <section className="pt-32 pb-16 bg-dark text-dark-foreground">
        <div className="container">
          <h1 className="font-display text-4xl md:text-6xl font-black leading-tight max-w-3xl">
            {content.title}
          </h1>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container max-w-3xl">
          {content.sections.map((section, idx) => renderSection(section as Section, idx))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PrivacyPage;
