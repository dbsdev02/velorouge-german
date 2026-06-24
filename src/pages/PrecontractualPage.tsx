import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useTranslation } from "react-i18next";

const pricingDE = [
  { product: "Segway-Verleih", price: "29 €", vehicle: "Segway Roller L60", format: "Selbstgeführt · App · 2h" },
  { product: "E-Bike Audio-Erlebnis + Stampz", price: "49 €", vehicle: "Premium-E-Bike", format: "Selbstgeführt · IZI Travel · 3–4h" },
  { product: "Geführte Gruppenführung", price: "59 €/Pers. · min. 4", vehicle: "Premium-E-Bike", format: "Reiseleiter · 3h · max. 8" },
];

const pricingEN = [
  { product: "Segway Rental", price: "€29", vehicle: "Segway Scooter L60", format: "Self-guided · app · 2h" },
  { product: "E-Bike Audio + Stampz Guided Experience", price: "€49", vehicle: "Premium electric bike", format: "Self-guided · IZI Travel · 3–4h" },
  { product: "Group guided tour", price: "€59/person · min 4", vehicle: "Premium electric bike", format: "Human guide · 3h · max 8" },
];

const de = {
  pageTitle: "Vorvertragliches Informationsblatt",
  pageSubtitle: "Touristisches Erlebnis – E-Bike-Verleih mit geführter Tour und Segway-Rollern",
  pricing: pricingDE,
  pricingHeaders: ["Produkt", "Öffentlicher Preis inkl. MwSt.", "Fahrzeug", "Format"],
  sections: [
    {
      heading: "1. Identität und Kontaktdaten des Anbieters",
      rows: [
        ["Firmenname", "TourDeWheel"],
        ["Rechtsform", "Vereinfachte Aktiengesellschaft mit einem Stammkapital von 20.000 €"],
        ["Handelsregister", "Straßburg 100 164 706"],
        ["Sitz", "16 avenue de la Paix – 67000 Straßburg"],
        ["Telefon", "+33 622 810716"],
        ["E-Mail-Adresse", "info@velorouge.de"],
        ["Ansprechpartner vor Ort", "Notfalltelefon erreichbar während der Aktivität: +33 622 810716"],
      ],
    },
    {
      heading: "2. Beschreibung und Hauptmerkmale des Erlebnisses",
      body: "Art der Leistung: Verleih von E-Bikes oder Segway-Rollern\n\nGeführte Touren:\n[ ] Tour X: Tourname — Route, Hauptsehenswürdigkeiten, Schwierigkeitsgrad (körperlich / technisch), Durchschnittsgeschwindigkeit / ungefähre Distanz: [●] km, Dauer\n[ ] Tour Y: Tourname — Route, Hauptsehenswürdigkeiten, Schwierigkeitsgrad (körperlich / technisch), Durchschnittsgeschwindigkeit / ungefähre Distanz: [●] km, Dauer\n[ ] Tour Z: Tourname — Route, Hauptsehenswürdigkeiten, Schwierigkeitsgrad (körperlich / technisch), Durchschnittsgeschwindigkeit / ungefähre Distanz: [●] km, Dauer\n\nFührungsart:\n[ ] über mobile App\n[ ] mit unabhängigem Reiseleiter\n\nGruppengröße für geführte Touren mit unabhängigem Reiseleiter:\n– Mindestteilnehmeranzahl: 4 Personen\n– Maximale Teilnehmeranzahl: 8 Personen\n\nSprache, in der Informationen und Erklärungen bereitgestellt werden: DE / EN / FR",
      subsections: [
        {
          heading: "Von TourDeWheel bereitgestellte Ausrüstung",
          items: [
            "E-Bike (Modell / Nennleistung: [●])",
            "Segway-Roller (Modell / Nennleistung: [●])",
            "Helm",
            "Schloss",
            "Akku und Ladegerät",
            "Warnweste",
            "Sonstige Zubehörteile",
          ],
        },
        {
          heading: "Vom Teilnehmer mitzubringende Ausrüstung und Bedingungen",
          items: [
            "Geeignete Kleidung und Schuhe für das Radfahren",
            "Tauglichkeitserklärung",
            "Mindestalter: 18 Jahre oder 16 Jahre in Begleitung eines Erwachsenen",
          ],
        },
      ],
    },
    {
      heading: "3. Preis und etwaige Zusatzkosten",
      body: "Gesamtpreis inkl. MwSt. pro Person gemäß nachstehender Tabelle.",
      table: true,
      afterTable: "Dieser Preis umfasst: Bereitstellung der Fahrräder oder Segway-Roller, aufgeführte Ausrüstung und ggf. Führung.",
    },
    {
      heading: "4. Zahlungsbedingungen",
      body: "Der vollständige Preis der touristischen Erlebnisse ist zum Zeitpunkt der Buchung zu zahlen.\n\nAkzeptierte Zahlungsmittel: Kreditkarte / Bargeld",
      subsections: [
        {
          heading: "Finanzielle Garantien",
          items: [
            "Erforderliche Kaution: 99 € pro gemietetes E-Bike oder Segway",
            "Bedingungen: Kartenabdruck, Vorautorisierung usw.",
          ],
        },
      ],
    },
    {
      heading: "5. Grenzübertritts- und administrative / gesundheitliche Formalitäten",
      body: "Das Erlebnis findet ausschließlich in Frankreich statt und beinhaltet keinen Grenzübertritt. Der Teilnehmer muss die gesetzlich vorgeschriebenen Identitätsdokumente für den Aufenthalt im Territorium mitführen (Personalausweis, Reisepass usw.).",
    },
    {
      heading: "6. Stornierungsbedingungen / Vertragsauflösung",
      body: "Das Widerrufsrecht gilt nicht für Freizeitdienstleistungen, die zu einem bestimmten Datum oder in einem bestimmten Zeitraum erbracht werden.\n\nDer Kunde kann die Buchung jedoch unter folgenden Bedingungen stornieren:",
      items: [
        "Stornierung durch den Kunden mehr als 48 Stunden im Voraus: volle Rückerstattung",
        "Stornierung zwischen 24 und 48 Stunden im Voraus: 50 % Rückerstattung",
        "Stornierung weniger als 24 Stunden im Voraus oder Nichterscheinen: keine Rückerstattung – volle Leistung fällig",
      ],
      afterItems: "Bei Stornierung durch TourDeWheel (extreme Wetterbedingungen, technischer Vorfall): volle Rückerstattung oder kostenlose Umbuchung.",
    },
    {
      heading: "7. Sicherheit, Verantwortlichkeiten und Versicherungen",
      body: "TourDeWheel informiert den Teilnehmer über:",
      items: [
        "Die mit dem Radfahren und der Teilnahme an einer geführten Tour verbundenen Risiken (öffentlicher Straßenverkehr, Gelände, Wetterbedingungen usw.)",
        "Die einzuhaltenden Sicherheitsanweisungen (Tragen des Helms, Beachten der Straßenverkehrsordnung, dem Niveau des Teilnehmers und den Streckenbedingungen angepasstes Fahren, Fahrverbot unter dem Einfluss von Alkohol oder die Aufmerksamkeit beeinträchtigender Substanzen usw.)",
      ],
      afterItems: "TourDeWheel ist für die ordnungsgemäße Erbringung der im Erlebnis enthaltenen Dienstleistungen im gesetzlich vorgesehenen Rahmen verantwortlich und erklärt, über eine geeignete Berufshaftpflichtversicherung zu verfügen.\n\nDer Teilnehmer ist für die Aufbewahrung des Fahrrads und des Zubehörs während der Mietdauer verantwortlich. Im Falle von Schäden, Verlust oder Diebstahl kann er haftbar gemacht werden.",
    },
    {
      heading: "8. Allgemeine Servicebedingungen",
      body: "Die vom Teilnehmer vorgenommene Buchung impliziert die vorbehaltlose Annahme der allgemeinen Servicebedingungen.",
    },
    {
      heading: "9. Beschwerdebearbeitung, Mediation und Streitbeilegung",
      body: "Jede Beschwerde bezüglich der Durchführung des Erlebnisses kann an TourDeWheel gerichtet werden:",
      items: [
        "Per Post: 16 avenue de la Paix – 67000 Straßburg",
        "Per E-Mail: info@velorouge.de",
        "Per Telefon: +33 622 810716",
      ],
      afterItems: "TourDeWheel verpflichtet sich, den Eingang der Beschwerde zu bestätigen und innerhalb einer angemessenen Frist zu antworten.\n\nBei anhaltenden Streitigkeiten wird der Teilnehmer auf die Möglichkeit einer kostenlosen Verbraucherschlichtung hingewiesen.\n\nStreitigkeiten können auch vor den zuständigen Gerichten ausgetragen werden.\n\nDer Teilnehmer bestätigt, die Informationen in diesem Blatt vor einer verbindlichen Buchung gelesen zu haben, die ihm in lesbarer und verständlicher Form auf einem dauerhaften Datenträger übermittelt wurden.",
    },
  ],
};

const en = {
  pageTitle: "Pre-Contractual Information Sheet",
  pageSubtitle: "Tourist experience – electric bike rental with guided tour and Segway scooters",
  pricing: pricingEN,
  pricingHeaders: ["Product", "Public price incl. VAT", "Vehicle", "Format"],
  sections: [
    {
      heading: "1. Professional's identity and contact details",
      rows: [
        ["Company name", "TourDeWheel"],
        ["Company form", "Simplified joint-stock company, with a share capital of €20,000"],
        ["RCS", "Strasbourg 100,164,706"],
        ["Registered office address", "16 avenue de la Paix – 67000 Strasbourg"],
        ["Telephone", "+33 622 810716"],
        ["Email address", "info@velorouge.de"],
        ["On-site contact person", "Emergency telephone number reachable during the activity: +33 622 810716"],
      ],
    },
    {
      heading: "2. Description and main characteristics of the experience",
      body: "Type of service: Rental of electric bikes or Segway scooters\n\nGuided tours:\n[ ] Tour X: Tour name — Route, Main points of interest visited, Difficulty level (physical / technical), Average speed / approximate distance: [●] km, duration\n[ ] Tour Y: Tour name — Route, Main points of interest visited, Difficulty level (physical / technical), Average speed / approximate distance: [●] km, duration\n[ ] Tour Z: Tour name — Route, Main points of interest visited, Difficulty level (physical / technical), Average speed / approximate distance: [●] km, duration\n\nGuidance method:\n[ ] via mobile application\n[ ] with an independent accompanying guide\n\nGroup size for guided tours with an independent guide:\n– Minimum number of participants required: 4 people\n– Maximum number of participants: 8 people\n\nLanguage in which information and explanations are provided: DE / EN / FR",
      subsections: [
        {
          heading: "Equipment provided by TourDeWheel",
          items: [
            "Electric bike (model / nominal power: [●])",
            "Segway scooters (model / nominal power: [●])",
            "Helmet",
            "Lock",
            "Battery and charger",
            "High-visibility vest",
            "Other accessories",
          ],
        },
        {
          heading: "Equipment and conditions to be provided by the participant",
          items: [
            "Suitable clothing and footwear for cycling",
            "Fitness declaration",
            "Minimum age: 18 years or 16 years accompanied by an adult",
          ],
        },
      ],
    },
    {
      heading: "3. Price and any additional fees",
      body: "Total price including VAT per person, according to the table below.",
      table: true,
      afterTable: "This price includes: provision of bikes or Segway scooters, listed equipment and guidance, where applicable.",
    },
    {
      heading: "4. Payment terms",
      body: "The full price of the Tourist Experiences is payable at the time of booking.\n\nAccepted payment methods: bank card / cash",
      subsections: [
        {
          heading: "Financial guarantees",
          items: [
            "Security deposit required: €99 per e-bike or Segway rented",
            "Terms: card imprint, pre-authorisation, etc.",
          ],
        },
      ],
    },
    {
      heading: "5. Conditions for crossing borders and administrative / health formalities",
      body: "The experience takes place exclusively in France and does not involve crossing any borders; the participant must have the identity documents legally required to travel in the territory (national identity card, etc.).",
    },
    {
      heading: "6. Cancellation / contract termination conditions",
      body: "The right of withdrawal does not apply to leisure services provided on a specific date or period.\n\nHowever, the Customer may cancel the rental under the following conditions:",
      items: [
        "Cancellation by the customer more than 48 hours in advance: full refund",
        "Cancellation between 24 and 48 hours in advance: 50% refund",
        "Cancellation less than 24 hours in advance or no-show: no refund — service fully due",
      ],
      afterItems: "In case of cancellation by TourDeWheel (extreme weather, technical incident): full refund or free postponement.",
    },
    {
      heading: "7. Safety, responsibilities and insurance",
      body: "TourDeWheel informs the participant:",
      items: [
        "Of the risks inherent in cycling and participating in a guided tour (public road traffic, terrain, weather conditions, etc.)",
        "Of the safety instructions to be followed (wearing a helmet, respecting the Highway Code, riding adapted to the participant level and the route conditions, prohibition of riding under the influence of alcohol or substances that impair vigilance, etc.)",
      ],
      afterItems: "TourDeWheel is responsible for the proper execution of the services included in the experience, within the limits provided by law, and declares to be covered by appropriate professional civil liability insurance.\n\nThe participant is responsible for the safekeeping of the bike and accessories during the rental period. In case of damage, loss or theft, their liability may be engaged.",
    },
    {
      heading: "8. General terms and conditions of service",
      body: "The booking made by the participant implies unreserved acceptance of the general terms and conditions of service.",
    },
    {
      heading: "9. Complaint handling, mediation and dispute resolution",
      body: "Any complaint relating to the execution of the experience may be sent to TourDeWheel:",
      items: [
        "By post: 16 avenue de la Paix – 67000 Strasbourg",
        "By email: info@velorouge.de",
        "By telephone: +33 622 810716",
      ],
      afterItems: "TourDeWheel undertakes to acknowledge receipt of the complaint and to respond to it within a reasonable time.\n\nIn case of persistent dispute, the participant is informed of the possibility of free recourse to a consumer mediator.\n\nDisputes may also be brought before the competent courts.\n\nThe participant acknowledges having read, before any firm booking, the information contained in this sheet, which was communicated to them in a clear and understandable manner on a durable medium.",
    },
  ],
};

type Row = [string, string];
type Subsection = { heading: string; items?: string[]; body?: string };
type Section = {
  heading: string;
  body?: string;
  rows?: Row[];
  items?: string[];
  afterItems?: string;
  table?: boolean;
  afterTable?: string;
  subsections?: Subsection[];
};
type Content = {
  pageTitle: string;
  pageSubtitle: string;
  pricing: { product: string; price: string; vehicle: string; format: string }[];
  pricingHeaders: string[];
  sections: Section[];
};

const PricingTable = ({ content }: { content: Content }) => (
  <div className="overflow-x-auto my-4">
    <table className="w-full text-sm border-collapse border border-border">
      <thead>
        <tr className="bg-muted">
          {content.pricingHeaders.map((h) => (
            <th key={h} className="border border-border px-4 py-2 text-left font-semibold">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {content.pricing.map((row, i) => (
          <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}>
            <td className="border border-border px-4 py-2">{row.product}</td>
            <td className="border border-border px-4 py-2 font-semibold text-primary">{row.price}</td>
            <td className="border border-border px-4 py-2">{row.vehicle}</td>
            <td className="border border-border px-4 py-2">{row.format}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const renderSection = (section: Section, idx: number, content: Content) => (
  <div key={idx} className="mb-10">
    <h2 className="font-display text-xl md:text-2xl font-black mb-4 text-foreground">{section.heading}</h2>

    {section.rows && (
      <div className="border border-border divide-y divide-border mb-4">
        {section.rows.map(([label, value]) => (
          <div key={label} className="grid grid-cols-1 sm:grid-cols-3 gap-2 px-4 py-3">
            <span className="text-sm font-semibold text-foreground">{label}</span>
            <span className="sm:col-span-2 text-sm text-muted-foreground">{value}</span>
          </div>
        ))}
      </div>
    )}

    {section.body && section.body.split("\n\n").map((p, i) => (
      <p key={i} className="text-muted-foreground leading-relaxed mb-3 whitespace-pre-line">{p}</p>
    ))}

    {section.table && <PricingTable content={content} />}
    {section.afterTable && (
      <p className="text-muted-foreground leading-relaxed mt-3">{section.afterTable}</p>
    )}

    {section.items && (
      <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
        {section.items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    )}
    {section.afterItems && section.afterItems.split("\n\n").map((p, i) => (
      <p key={i} className="text-muted-foreground leading-relaxed mb-3">{p}</p>
    ))}

    {section.subsections && section.subsections.map((sub, si) => (
      <div key={si} className="mt-5 ml-4 border-l-2 border-primary/20 pl-4">
        <h3 className="font-semibold text-base mb-2 text-foreground">{sub.heading}</h3>
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

const PrecontractualPage = () => {
  const { i18n } = useTranslation();
  const content: Content = i18n.language.startsWith("de") ? de : en;

  return (
    <main>
      <SEO
        title="Vorvertragliches Informationsblatt — VéloRouge"
        description="Vorvertragliches Informationsblatt für touristische Erlebnisse von VéloRouge / TourDeWheel."
        canonical="/precontractual"
      />
      <Navbar />

      <section className="pt-32 pb-16 bg-dark text-dark-foreground">
        <div className="container">
          <h1 className="font-display text-4xl md:text-5xl font-black leading-tight max-w-3xl">
            {content.pageTitle}
          </h1>
          <p className="mt-4 text-dark-foreground/60 max-w-2xl text-base italic">
            {content.pageSubtitle}
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          {content.sections.map((section, idx) => renderSection(section as Section, idx, content))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PrecontractualPage;
