import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useTranslation } from "react-i18next";

/* ─── Pricing table ─── */
const pricingDE = [
  { product: "Segway-Verleih", price: "29 €", vehicle: "Segway Roller L60", format: "Selbstgeführt · App · 2h" },
  { product: "E-Bike Audio-Erlebnis + Stampz", price: "49 €", vehicle: "Premium-E-Bike", format: "Selbstgeführt · IZI Travel · 3–4h" },
  { product: "Geführte Gruppenführung", price: "59 €/Pers. · min. 4", vehicle: "Premium-E-Bike", format: "Reiseleiter · 3h · max. 8" },
];
const pricingEN = [
  { product: "Segway Rental", price: "€29", vehicle: "Segway Scooter L60", format: "Self-guided · app · 2h" },
  { product: "E-Bike Audio Experience + Stampz", price: "€49", vehicle: "Premium electric bike", format: "Self-guided · IZI Travel · 3–4h" },
  { product: "Guided group tour", price: "€59/pers · min 4", vehicle: "Premium electric bike", format: "Human guide · 3h · max 8" },
];

/* ─── Repairs table ─── */
const repairsDE = [
  { event: "Verlust des Schlosschlüssels", amount: "25 €", method: "Vom Sicherheitseinbehalt abgezogen oder in Rechnung gestellt" },
  { event: "Ersatz des vollständigen Schlosses", amount: "60 €", method: "Vom Sicherheitseinbehalt abgezogen oder in Rechnung gestellt" },
  { event: "Verlust oder Zerstörung des Helms", amount: "45 €", method: "Vom Sicherheitseinbehalt abgezogen oder in Rechnung gestellt" },
  { event: "Nicht gemeldete Reifenpanne und Folgeschäden", amount: "Tatsächliche Reparaturkosten", method: "Gegenseitige Rechnung" },
  { event: "Unfallschäden – reparierbar", amount: "Tatsächliche Reparaturkosten (vereinbartes Angebot)", method: "Sicherheitseinbehalt + SEPA-Lastschrift / Rechnung" },
  { event: "Schwere Schäden – irreparabel", amount: "Restwert des Fahrzeugs gemäß Tabelle", method: "Sicherheitseinbehalt + formelle Mahnung" },
  { event: "Diebstahl mit bereitgestelltem und genutztem Schloss", amount: "0 € – durch VéloRouge-Versicherung gedeckt", method: "Polizeiliche Anzeige innerhalb von 24h erforderlich" },
  { event: "Diebstahl ohne Nutzung des bereitgestellten Schlosses", amount: "Restwert des Fahrzeugs", method: "Polizeiliche Anzeige innerhalb von 24h + Sicherheitseinbehalt + formelle Mahnung" },
  { event: "Nichtrückgabe des Materials", amount: "Restwert + 20 % Strafzuschlag", method: "Sicherheitseinbehalt + Strafanzeige" },
  { event: "Verspätete Rückgabe (pro Überschreitungsstunde)", amount: "15 € / Stunde", method: "Vom Sicherheitseinbehalt abgezogen oder in Rechnung gestellt" },
  { event: "Festgestellte anormale oder böswillige Nutzung", amount: "Tatsächliche Kosten + Pauschalstrafe 150 €", method: "Sofortige Kündigung + Einziehung" },
];
const repairsEN = [
  { event: "Loss of padlock key", amount: "€25", method: "Deducted from pre-authorisation or invoiced" },
  { event: "Replacement of complete padlock", amount: "€60", method: "Deducted from pre-authorisation or invoiced" },
  { event: "Loss or destruction of helmet", amount: "€45", method: "Deducted from pre-authorisation or invoiced" },
  { event: "Puncture not reported and resulting damage", amount: "Actual repair cost", method: "Contradictory invoice" },
  { event: "Accidental damage — repairable", amount: "Actual repair cost (agreed quote)", method: "Capture pre-authorisation + SEPA direct debit/invoice" },
  { event: "Serious damage — irreparable", amount: "Residual value of the vehicle according to schedule", method: "Capture pre-authorisation + formal notice" },
  { event: "Theft with provided and used padlock", amount: "€0 — covered by VéloRouge insurance", method: "Police report required within 24h" },
  { event: "Theft without use of the provided padlock", amount: "Residual value of the vehicle", method: "Police report required within 24h + Capture pre-authorisation + formal notice" },
  { event: "Non-return of equipment", amount: "Residual value + 20% penalty", method: "Capture pre-authorisation + filing of complaint" },
  { event: "Late return (per hour beyond)", amount: "€15 / hour", method: "Deducted from pre-authorisation or invoiced" },
  { event: "Abnormal or malicious use detected", amount: "Actual cost + flat penalty of €150", method: "Immediate termination + recovery" },
];

/* ─── Content ─── */
const de = {
  title: "Allgemeine Servicebedingungen",
  version: "Version gültig ab XXX",
  intro: `Diese allgemeinen Servicebedingungen (nachfolgend \"ASB\") definieren die rechtlichen, technischen und kommerziellen Bedingungen, unter denen die Gesellschaft TourDeWheel, eine vereinfachte Aktiengesellschaft mit einem Stammkapital von 20.000 €, mit Sitz in 16 avenue de la Paix – 67000 Straßburg, eingetragen im Handelsregister Straßburg unter der Nummer 100 164 706, vertreten durch ihren Präsidenten Herrn Prashant KOTHARI (nachfolgend der \"Anbieter\") – Privatpersonen (nachfolgend der \"Kunde\") Elektrofahrräder (nachfolgend \"E-Bikes\") oder Segway-Roller (nachfolgend \"Segway\") unter der Handelsmarke VéloRouge (eingetragen unter INPI 5250087) bereitstellt, bei denen der Anbieter als Vermieter handelt.\n\nDer Kunde und der Anbieter werden zusammen als die \"Parteien\" bezeichnet.\n\nDer Anbieter hat als Geschäftszweck die entgeltliche Bereitstellung von einem oder mehreren E-Bikes oder Segways für den Kunden sowie die Erbringung eines touristischen Erlebnisses in Form einer geführten Tour.`,
  pricingHeaders: ["Produkt", "Öffentlicher Preis inkl. MwSt.", "Fahrzeug", "Format"],
  repairsHeaders: ["Ereignis", "Betrag zu Lasten des Kunden", "Einziehungsmodalitäten"],
  sections: [
    {
      heading: "1. Gegenstand – Anwendungsbereich",
      body: "Diese allgemeinen Bedingungen (nachfolgend \"ASB\") regeln alle Vertragsbeziehungen zwischen dem Anbieter und dem Kunden bezüglich:",
      items: [
        "Touristische Erlebnisse – per Mobil-App oder unabhängigem Reiseleiter geführte E-Bike-Touren;",
        "Vermietung von Elektrofahrrädern für kurze, mittlere und lange Zeiträume – täglich, wöchentlich, monatlich und jährlich;",
        "Vermietung von Segway-Rollern;",
      ],
      afterItems: "Diese ASB haben Vorrang vor allen anderen Dokumenten, die vom Anbieter nicht ausdrücklich schriftlich akzeptiert wurden. Jede Bestellung oder Buchung impliziert die vollständige und vorbehaltlose Zustimmung des Kunden zu diesen Bedingungen.\n\nDiese ASB gelten für jeden Kunden, der ein VéloRouge-Produkt bucht, unabhängig von der Buchungsplattform (direkt, über andere Websites, OTAs oder Hotelpartner ...).",
    },
    {
      heading: "2. Definitionen",
      definitionItems: [
        ["E-Bike", "ein pedalunterstütztes Fahrrad im Sinne der Vorschriften, ausgestattet mit elektrischer Unterstützung."],
        ["Touristisches Erlebnis", "Dienstleistung bestehend aus einer E-Bike-Route oder Tour, geleitet durch eine mobile Anwendung oder einen unabhängigen Reiseleiter, möglicherweise mit Audio-/Videoinhalten."],
        ["Langzeitverträge", "Vermietung von E-Bikes an Privatpersonen für eine Dauer von mehr als 1 Monat."],
        ["Anwendung", "mobile Anwendung, die vom Anbieter zur Führung von Touren bereitgestellt oder empfohlen wird."],
        ["Leistung", "Bereitstellung durch den Anbieter an den Kunden, für die vereinbarte Dauer, eines oder mehrerer E-Bikes oder Segways, die den aktuellen technischen Normen entsprechen, in Betriebsbereitschaft und ausgestattet mit üblicher Sicherheitsausrüstung, einschließlich der für sicheres Fahren erforderlichen Ausrüstung (Akku, Ladegerät, Schloss, Helm oder sonstiges bereitgestelltes Zubehör) mit der Option, ein touristisches Erlebnis zu buchen."],
      ],
    },
    {
      heading: "3. Kundenstatus",
      body: "Der Kunde ist eine natürliche Person, die zu nicht beruflichen Zwecken handelt.\n\nJede Person, die eine Leistung bucht, muss mindestens 18 Jahre alt sein.\n\nAb 16 Jahren können Minderjährige mit schriftlicher Zustimmung ihres gesetzlichen Vertreters und in seiner Begleitung an touristischen Erlebnissen und Segway-Roller-Ausfahrten teilnehmen. Minderjährige ohne Begleitung sind davon ausgeschlossen.",
    },
    {
      heading: "4. Geografisches Gebiet – Ort der Leistungen",
      body: "Alle E-Bike-Verleihdienstleistungen und geführten touristischen Erlebnisse werden in Frankreich erbracht.",
    },
    {
      heading: "5. Bestellung – Buchung",
      body: "5.1. Der Anbieter bietet seine E-Bike- und Segway-Vermietungsdienstleistungen und touristischen Erlebnisse über seine Website, direkt im Geschäft oder über Partner-Apps (Viator, GetYourGuide …) an.\n\nBei der Buchung einer Leistung über die Website muss der Kunde ein Online-Konto erstellen. Das Erstellen eines Online-Kontos setzt die Kenntnisnahme der vorvertraglichen Informationen und die Annahme dieser ASB sowie der Datenschutzrichtlinie voraus.\n\nDie Angebotsbedingungen (Preise, Dauer, Eigenschaften der E-Bikes, Nebenleistungen) sind in den Werbematerialien des Anbieters und auf seiner Website aufgeführt.\n\n5.2. Buchungsmodalitäten\n\nDer Kunde wählt das gewünschte touristische Erlebnis, die Mietdauer für das E-Bike oder den Segway und das Datum der Leistung. Er leistet eine Sicherheitskaution gemäß Artikel 8 dieser ASB.\n\nBei touristischen Erlebnissen und Kurzzeitvermietungen von E-Bikes und Segway-Rollern ist die Buchung nach Eingang der vollständigen Zahlung oder der Bankvorautorisierung und nach schriftlicher Bestätigung verbindlich.\n\nBei Langzeitmietverträgen kann der Anbieter die Annahme von der Vorlage von Nachweisdokumenten (Identität, Wohnsitz, Berufstätigkeit), einer Bonitätsprüfung, der Zahlung einer Sicherheitskaution und/oder der Unterzeichnung eines spezifischen Vertrags abhängig machen.",
    },
    {
      heading: "6. Laufzeit",
      body: "Die Vermietung des E-Bikes oder Segways erfolgt für eine vom Kunden bei der Buchung gewählte bestimmte Dauer.\n\nDas touristische Erlebnis wird für die Dauer der vom Kunden bei der Buchung gewählten Tour vereinbart.\n\nDie Laufzeit beginnt mit der physischen Übergabe des E-Bikes oder Segways an den Kunden und endet mit seiner tatsächlichen Rückgabe an den Anbieter an seinem Verkaufspunkt. Jede Überschreitung der Dauer führt zu einer zusätzlichen Berechnung gemäß dem geltenden Tarif.",
    },
    {
      heading: "7. Bereitstellung – Zustand der E-Bikes und Segway-Roller",
      body: "E-Bikes und Segway-Roller werden dem Kunden in einwandfreiem Betriebszustand mit dem vereinbarten Zubehör (Akku, Ladegerät, Schloss, Helm usw.) gegen Vorlage eines gültigen Ausweisdokuments übergeben (Kopien oder Fotos werden nicht akzeptiert).\n\nDer Kunde ist verpflichtet, den äußeren Zustand des E-Bikes und des Segway-Rollers zu überprüfen und etwaige Mängel sofort zu melden. Werden bei der Übernahme keine Mängel gemeldet, gilt das E-Bike oder der Segway-Roller als in einwandfreiem äußeren Zustand und wie bestellt übergeben.\n\nDer Kunde unterzeichnet ein Übergabeprotokoll mit dem Zustand des E-Bikes oder Segway-Rollers und der Abfahrtszeit. Verweigert der Kunde die Unterzeichnung des Übergabeprotokolls, kann die Leistung nicht stattfinden.\n\nE-Bikes und Segway-Roller müssen zur vereinbarten Zeit an der Abfahrtsstation zurückgegeben werden.",
    },
    {
      heading: "8. Finanzielle Bedingungen",
      body: "8.1. Die Preise sind in Euro inkl. MwSt. angegeben.\n\nDer Preis für die Vermietung des E-Bikes oder Segways und der geführten Tour ist in der Leistungsbeschreibung oder im Buchungsformular angegeben. Er umfasst die Gesamtkosten der Bereitstellung des E-Bikes oder Segways, des angegebenen Zubehörs sowie ggf. der Führungsdienstleistungen oder des Zugangs zur Anwendung.",
      pricingTable: true,
      afterPricing: "8.2. Zahlung – Zahlungsverzug\n\nDer Preis ist bei der Buchung vollständig zu entrichten.\n– Akzeptierte Zahlungsmittel: Kreditkarte (CB/Visa/Mastercard), Bargeld. Sicherheitskautionen können jedoch nicht in bar geleistet werden.\n– Bankvorautorisierung: Betrag von 99 € wird bei der Übernahme auf der Kundenkarte blockiert. Dieser Betrag wird nicht abgebucht, wenn das gemietete Material in gutem Zustand und fristgerecht zurückgegeben wird.\n– Per monatlicher Lastschrift zum 1. des Monats für Langzeitvermietungen.\n\nJeder Zahlungsverzug führt ohne vorherige Mahnung zur Anwendung von Verzugszinsen zum vereinbarten oder einem angemessenen vertraglichen Zinssatz sowie zur Möglichkeit für den Anbieter, die Leistungserbringung auszusetzen und/oder den Vertrag bei schwerwiegenden Verstößen nach erfolgloser Mahnung zu kündigen.\n\n8.3. Sicherheitskaution – Gebührenerhebung\n\nFür jede Buchung ist eine Sicherheitskaution zur Deckung des Risikos von Beschädigungen, Diebstahl oder Nichtrückgabe des E-Bikes oder Segways und des Zubehörs erforderlich. Die Sicherheitskaution stellt keine Haftungsbeschränkung dar.\n\nDie Sicherheitskaution erfolgt per Kreditkarte (Bankvorautorisierung) oder einem gleichwertigen Mechanismus. Diese Kaution ist nicht verzinslich. Im Falle einer Belastung erhält der Kunde eine detaillierte Abrechnung.\n\nDer Kunde ermächtigt den Anbieter außerdem, auf der hinterlegten Kreditkarte die vertraglich geschuldeten Beträge im Falle von Schäden, Verlust oder Diebstahl des E-Bikes zu belasten, bis zu den in Artikel 9.3 genannten Höchstbeträgen.",
    },
    {
      heading: "9. Zusatzkosten",
      body: "9.1. Verspätungsgebühren\n\nBei Nichtrückgabe des E-Bikes oder Segways zur vereinbarten Zeit werden Verspätungsgebühren in Höhe von 15 € inkl. MwSt. pro Überschreitungsstunde berechnet. Jede Verzögerung, die die Vertragsdauer überschreitet, gilt als Nichtrückgabe des Materials, was die Berechnung des Restwerts des E-Bikes oder Segways sowie eines zusätzlichen Strafzuschlags von 20 % davon rechtfertigt.\n\n9.2. Kilometerüberschreitungsgebühren\n\nBei Überschreitung des monatlich erlaubten Kilometerlimits für Langzeitmietverträge schuldet der Kunde einen Betrag pro zusätzlich gefahrenem Kilometer, basierend auf dem Kilometerstand zum Zeitpunkt der Übernahme des E-Bikes.\n\n9.3. Reparaturkosten für gemietetes Material",
      repairsTable: true,
    },
    {
      heading: "10. Nutzung der E-Bikes – Pflichten des Kunden",
      body: "Der Kunde verpflichtet sich, das E-Bike und den Segway-Roller sorgfältig und bestimmungsgemäß sowie gemäß den Anweisungen des Anbieters zu nutzen. Er verpflichtet sich insbesondere:",
      numberedItems: [
        "Das Material nur in zugelassenen Bereichen zu nutzen (Fahrradwege, reservierte Spuren) — Off-Road-Nutzung, Treppen, überflutete oder für Fahrräder verbotene Bereiche sind streng untersagt.",
        "Den bereitgestellten Helm während der gesamten motorisierten Fahrt zu tragen.",
        "Das Material nicht zu verleihen, unterzuvermieten oder an Dritte zu übertragen, auch nicht vorübergehend.",
        "Die für Elektrofahrräder und motorisierte persönliche Mobilitätsgeräte geltende Straßenverkehrsordnung zu beachten.",
        "Nicht unter dem Einfluss von Alkohol, Drogen oder Medikamenten zu fahren, die die Fahrtüchtigkeit beeinträchtigen.",
        "VéloRouge (telefonisch oder per WhatsApp) unverzüglich über jeden Vorfall, Unfall, Diebstahl oder Schaden während der Miete zu informieren.",
        "Das Material nicht zu modifizieren, zu demontieren, neu zu lackieren oder auf irgendeine Weise zu verändern.",
        "Das Fahrzeug nur in gesicherten Bereichen abzustellen und bei jedem Halt das bereitgestellte Schloss zu verwenden.",
        "Das Material zur vereinbarten Zeit und am vereinbarten Ort zurückzugeben — jede Verlängerung, die nicht mindestens 30 Minuten im Voraus gemeldet wird, wird zum Verlängerungstarif berechnet.",
        "Sich für das Fahren eines zweirädrigen Fahrzeugs (E-Bike / Segway) im städtischen Bereich als geeignet zu erklären.",
        "Das E-Bike nicht für unvorgesehene Zwecke zu nutzen (Wettkampf, Transport übermäßiger Lasten, Schleppen usw.).",
        "Die technischen Einschränkungen (Leistung, Unterstützung, Maximalgewicht usw.) zu beachten.",
      ],
      afterItems: "Jede nicht konforme, fahrlässige oder gefährliche Nutzung begründet die Haftung des Kunden und kann die Kündigung des Vertrags rechtfertigen, unbeschadet von Schadensersatzansprüchen. Die Einhaltung dieser Pflichten ist eine wesentliche Vertragsbedingung.",
    },
    {
      heading: "11. Touristische Erlebnisse – Mobile Anwendung – Sicherheit",
      body: "Das touristische Erlebnis umfasst eine vordefinierte Route, deren Hauptmerkmale (geschätzte Dauer, ungefähre Distanz, besondere Schwierigkeiten, Sehenswürdigkeiten, etwaige Zeitbeschränkungen) dem Kunden vor Vertragsabschluss mitgeteilt werden.\n\nWenn die Führung durch einen menschlichen Reiseleiter erfolgt, teilt der Anbieter dem Kunden die Identität des Reiseleiters und die Hauptmerkmale seines Einsatzes mit.\n\nWenn die Führung über die mobile Anwendung erfolgt, stellt der Anbieter dem Kunden die notwendigen Informationen für den Download und die Nutzung der Anwendung bereit. Der Kunde wird darauf hingewiesen, dass die ordnungsgemäße Funktion der Anwendung von der Netzabdeckung, dem Zustand seines Endgeräts und dessen technischer Konfiguration abhängt – Faktoren, die außerhalb der Kontrolle des Anbieters liegen.\n\nTouren mit Führung durch die mobile Anwendung stellen Routen- und Inhaltsvorschläge dar. Der Kunde behält zu jeder Zeit die Kontrolle über seine Fahrtroute und seine Fahrweise. Er muss sein Fahrverhalten den Verkehrs- und Wetterbedingungen sowie seinem körperlichen Zustand anpassen.\n\nDer Kunde darf die mobile Anwendung keinesfalls auf gefährliche Weise nutzen (längeres Betrachten beim Fahren, fehlende Aufmerksamkeit auf die Fahrbahn usw.). Der Kunde muss an einem sicheren Ort anhalten, um mit dem Bildschirm zu interagieren, wenn dies von der Fahrbahn ablenkt.\n\nDer Anbieter ist hinsichtlich der Sicherheit der touristischen Erlebnisse nur zu einer Pflicht zumutbarer Mittel verpflichtet. Der Kunde bleibt allein verantwortlich für die Art und Weise, wie er diese Informationen nutzt.",
    },
    {
      heading: "12. Wartung, Pannen und Reparaturen",
      body: "Der Kunde muss den Anbieter unverzüglich über jede Anomalie, jeden Vorfall, jede Panne oder jeden Unfall informieren, der das E-Bike oder den Segway betrifft. Es ist ihm untersagt, ohne vorherige Zustimmung des Anbieters wesentliche Reparaturen durchzuführen oder durchführen zu lassen, außer in offensichtlichen Notfällen zur Vermeidung größerer Schäden.\n\nBei Langzeitmietverträgen für E-Bikes kann der Anbieter regelmäßige Wartungstermine in den im Vertrag festgelegten Abständen vorschreiben. Die Nichtpräsentation des E-Bikes bei den Wartungsterminen kann die Übernahme bestimmter auf mangelnde Wartung zurückzuführender Schäden einschränken oder ausschließen.\n\nIm Falle einer das E-Bike immobilisierenden Panne kann der Anbieter im Rahmen seiner Verfügbarkeiten und vertraglichen Bedingungen Pannenhilfe oder ein Ersatz-E-Bike anbieten.",
    },
    {
      heading: "13. Diebstahl, Verlust und Schäden an E-Bikes",
      body: "Bei Diebstahl, versuchtem Diebstahl, Verlust oder erheblicher Beschädigung des E-Bikes oder Segway-Rollers oder ihres Zubehörs muss der Kunde:",
      items: [
        "Den Anbieter unverzüglich informieren.",
        "Im Falle eines Diebstahls Anzeige bei den zuständigen Behörden erstatten und dem Anbieter die Eingangsbestätigung übermitteln.",
        "Auf Anfrage einen detaillierten Bericht und die Kontaktdaten etwaiger Zeugen bereitstellen.",
      ],
      afterItems: "Der Kunde ist vertraglich für die Aufbewahrung des E-Bikes, des Segway-Rollers oder ihres Zubehörs während der Bereitstellungszeit verantwortlich. Bei Diebstahl oder Schäden infolge offensichtlicher Fahrlässigkeit (Nichtnutzung des Schlosses, längeres Parken an einem offensichtlich unsicheren Ort usw.) trägt der Kunde die finanziellen Folgen im Rahmen der im Vertrag festgelegten Höchstbeträge und Modalitäten.",
    },
    {
      heading: "14. Versicherung und Haftung des Anbieters",
      body: "14.1. Der Anbieter erklärt, eine Berufshaftpflichtversicherung zu besitzen, die im Rahmen der Leistung verursachte Körper-, Sach- und immaterielle Schäden des Kunden abdeckt, im Rahmen der Grenzen und Bedingungen der Versicherungspolice, von der auf Anfrage ein Auszug mitgeteilt werden kann.",
    },
    {
      heading: "15. Stornierungsrichtlinie und Erstattungsrichtlinie für Kunden",
      body: "15.1. Stornierung durch den Kunden\n\nDas Widerrufsrecht gilt nicht für Freizeitdienstleistungen, die zu einem bestimmten Datum oder in einem bestimmten Zeitraum erbracht werden.\n\nDer Kunde kann die Buchung jedoch unter folgenden Bedingungen stornieren:",
      items: [
        "Stornierung durch den Kunden mehr als 48 Stunden im Voraus: vollständige Rückerstattung.",
        "Stornierung zwischen 24 und 48 Stunden im Voraus: 50 % Rückerstattung.",
        "Stornierung weniger als 24 Stunden im Voraus oder Nichterscheinen: keine Rückerstattung – volle Leistung fällig.",
      ],
      afterItems: "15.2. Stornierung durch den Anbieter (extreme Wetterbedingungen, technischer Vorfall): vollständige Rückerstattung oder kostenlose Umbuchung.\n\n15.3. Bei Buchungen über OTAs oder andere Partner gelten die Stornierungsrichtlinien dieser Anbieter. Diese ASB regeln nur die direkte Beziehung mit dem Anbieter.",
    },
    {
      heading: "16. Geistiges Eigentum – Anwendung – Marke",
      body: "Die Marken, Handelsnamen, Logos, E-Bike- oder Segway-Bezeichnungen, grafischen Elemente, Anwendungsinhalte, Routen, digitalen Medien und dem Kunden ausgehändigten Dokumente sind durch die Rechte des geistigen Eigentums des Anbieters oder seiner Partner geschützt.",
    },
    {
      heading: "17. Personenbezogene Daten",
      body: "Der Anbieter erhebt und verarbeitet personenbezogene Daten, die für die Verwaltung von Buchungen, Verträgen, Zahlungen, Schadensfällen sowie zur Verbesserung seiner Dienstleistungen (auch über die Anwendung) erforderlich sind.\n\nDie Daten können zur Kontaktaufnahme mit dem Kunden im Rahmen der Vertragserfüllung, zur Streitbeilegung und zur Erfüllung gesetzlicher und regulatorischer Pflichten verwendet werden.\n\nDer Anbieter bewahrt die Daten für die zur Erfüllung der Verarbeitungszwecke notwendige Zeit auf und kann sie an seine an der Leistungserbringung beteiligten Vertragsdienstleister und Partner (Wartung, Zahlung, Versicherung usw.) im erforderlichen Umfang übermitteln.\n\nDer Kunde kann seine Auskunfts-, Berichtigungs- und ggf. Widerspruchs- oder Einschränkungsrechte direkt beim Anbieter gemäß den in der Datenschutzrichtlinie festgelegten Modalitäten geltend machen.",
    },
    {
      heading: "18. Höhere Gewalt",
      body: "Keine der Parteien haftet für die Nichterfüllung oder die verspätete Erfüllung ihrer Pflichten, wenn diese auf ein unvorhersehbares, unwiderstehliches und äußeres Ereignis zurückzuführen sind, das die Erfüllung unmöglich macht (z. B. extreme Wetterereignisse, Naturkatastrophen, behördliche Verkehrsbeschränkungsmaßnahmen, Streiks, die für die Vertragserfüllung wesentliche Dienste betreffen, usw.).\n\nBei Eintreten eines solchen Ereignisses wird die Erfüllung der Pflichten für die Dauer des Ereignisses ausgesetzt; wenn die Unmöglichkeit über einen angemessenen Zeitraum andauert, kann jede Partei den Vertrag ohne Entschädigung durch schriftliche Benachrichtigung kündigen.",
    },
    {
      heading: "19. Kündigung",
      body: "Neben den hier speziell vorgesehenen Fällen kann jede Partei den Vertrag von Rechts wegen kündigen, wenn die andere Partei ihre Pflichten schwerwiegend verletzt und dies innerhalb einer angemessenen Frist nach schriftlicher Mahnung nicht behebt.\n\nFür den Anbieter stellen insbesondere folgende Verstöße schwerwiegende Pflichtverletzungen dar:",
      items: [
        "Wiederholte Nichtzahlung der Mieten oder Preise.",
        "Offensichtlich gefährliche oder rechtswidrige Nutzung der E-Bikes oder Segways.",
        "Nicht autorisierte Untervermietung oder Abtretung.",
        "Vorsätzliche Beschädigung der E-Bikes oder Segways oder unbefugte Modifikation ihrer technischen Merkmale.",
      ],
      afterItems: "Die Kündigung führt zur sofortigen Rückgabe der E-Bikes, Segways und des Zubehörs, unbeschadet der noch geschuldeten Beträge für Mieten, Reparaturen, Entschädigungen und Vertragsstrafen.",
    },
    {
      heading: "20. Anwendbares Recht – Streitbeilegung",
      body: "Diese ASB und die daraus resultierenden Verträge unterliegen französischem Recht.\n\nDie Vertragssprache ist Französisch. Übersetzungen in andere Sprachen werden vom Anbieter nur zu Informationszwecken bereitgestellt.\n\nBei Streitigkeiten über die Gültigkeit, Auslegung oder Erfüllung dieses Vertrags werden sich die Parteien um eine gütliche Einigung bemühen. Gelingt keine gütliche Einigung innerhalb von 30 Tagen nach schriftlicher Benachrichtigung des Streitfalls, kann der Streit vor die zuständigen Gerichte gebracht werden.\n\nDer Kunde wird auf die Möglichkeit hingewiesen, einen Verbraucherschlichter anzurufen. Der Anbieter ist dem Centre de la médiation de la consommation des conciliateurs de justice (CM2C) beigetreten.\n\nPostadresse: 49 Rue de Ponthieu, 75008 Paris\nE-Mail-Adresse: declarer-un-litige@cm2c.net\nWebsite: https://www.cm2c.net/comment-nous-saisir.php\n\nOder MTV MEDIATION TOURISME VOYAGE — CS 30958, 75383 PARIS cedex 08 — info@mtv.travel",
    },
    {
      heading: "21. Sonstige Bestimmungen",
      body: "Die Nichtigkeit einer Klausel dieser ASB berührt nicht die Gültigkeit der anderen Bestimmungen, die weiterhin gelten.\n\nDie Tatsache, dass der Anbieter eine Klausel zu einem bestimmten Zeitpunkt nicht in Anspruch nimmt, kann nicht als Verzicht auf deren spätere Geltendmachung ausgelegt werden.\n\nDiese ASB können vom Anbieter geändert werden. Die anwendbare Fassung ist die am Tag der Buchung oder Unterzeichnung des Vertrags gültige.",
    },
  ],
};

const en = {
  title: "General Terms and Conditions",
  version: "Version in effect from XXX",
  intro: `These general terms and conditions (hereinafter the "GTC") define the legal, technical, and commercial conditions under which the company TourDeWheel, a simplified joint-stock company with a share capital of €20,000, whose registered office is located 16 avenue de la Paix – 67000 Strasbourg, registered with the Trade and Companies Register of Strasbourg under number 100 164 706, represented by its President, Mr. Prashant KOTHARI (hereinafter the "Provider") – provides to individuals (hereinafter the "Client") electric-assist bicycles (hereinafter "E-bikes") or Segway Scooters (hereinafter "Segways") under the commercial brand VéloRouge (registered with INPI 5250087) and for which the Provider acts as lessor.\n\nThe Client and the Provider are collectively referred to as the "Parties".\n\nThe Provider's business is the provision, for a fee, to the Client, of one or more E-bikes or Segways, as well as the provision of a tourist experience consisting of a guided tour.`,
  pricingHeaders: ["Product", "Public price incl. VAT", "Vehicle", "Format"],
  repairsHeaders: ["Event", "Amount charged to customer", "Recovery method"],
  sections: [
    {
      heading: "1. Subject – Scope of application",
      body: "These general terms and conditions (hereinafter \"GTC\") govern all contractual relations between the Provider and the Client relating to:",
      items: [
        "Tourist experiences — guided E-bike tours via mobile application or independent guide;",
        "Rental of electric-assist bicycles for short, medium, and long term — daily, weekly, monthly, and yearly;",
        "Rental of Segway Scooters;",
      ],
      afterItems: "These GTC take precedence over any other document not expressly accepted in writing by the Provider. Any order or booking implies the Client's full and complete acceptance of these terms.\n\nThese GTC apply to any Client booking a VéloRouge product, regardless of the booking platform (direct, via other websites, OTAs, or hotel partners...).",
    },
    {
      heading: "2. Definitions",
      definitionItems: [
        ["E-bike", "a pedal-assisted cycle within the meaning of the regulations, equipped with electric assistance."],
        ["Tourist experience", "service consisting of an E-bike route or tour, guided by mobile application or independent guide, possibly with audio/visual content."],
        ["Long-term contracts", "rental of E-bikes from individuals for a duration exceeding 1 month."],
        ["Application", "mobile application provided or recommended by the Provider for guiding tours."],
        ["Service", "provision by the Provider to the Client, for the agreed duration, of one or more E-bikes or Segways, compliant with current technical standards, in working order and equipped with usual safety equipment, including equipment necessary for safe travel (battery, charger, lock, helmet, or any other equipment provided) with the option to subscribe to a Tourist Experience."],
      ],
    },
    {
      heading: "3. Client Status",
      body: "The Client is a natural person acting for non-professional purposes.\n\nAnyone booking a service must be at least 18 years old.\n\nFrom the age of 16, minors may, with the written consent of their legal guardian and their participation, take part in Tourist Experiences and Segway Scooter rides. Minors not accompanied are excluded.",
    },
    {
      heading: "4. Geographical area – Location of services",
      body: "All E-bike rental services and guided tourist experiences are materially carried out in France.",
    },
    {
      heading: "5. Order – Booking",
      body: "5.1. The Provider offers its E-bike and Segway rental services and Tourist Experiences via its website, directly in the shop, or via partner applications (Viator, GetYourGuide…).\n\nWhen booking a service via the website, the Client must create an online account. Creating an online account requires reviewing the pre-contractual information and accepting these GTC and the privacy policy.\n\nThe offer conditions (prices, duration, characteristics of E-bikes, ancillary services) are detailed on the Provider's commercial materials and its website.\n\n5.2. Subscription methods\n\nThe Client chooses the Tourist Experience, the rental duration for the E-bike or Segway, and the date of the service. They provide a security deposit in accordance with Article 8.\n\nFor Tourist Experiences and short-term E-bike and Segway scooter rentals, the booking is final upon receipt of full payment or bank pre-authorisation and after confirmation by email.\n\nFor Long-term rental contracts, the Provider may make acceptance conditional on the provision of supporting documents (identity, address, professional activity), a solvency check, the payment of a security deposit, and/or the signing of a specific contract.",
    },
    {
      heading: "6. Duration",
      body: "The rental of the E-bike or Segway is granted for a fixed duration chosen by the Client at the time of booking.\n\nThe Tourist Experience is granted for the duration of the tour chosen by the Client at the time of booking.\n\nThe duration runs from the physical handover of the E-bike or Segway to the Client until its effective return to the Provider at its point of sale. Any extension of the duration will incur additional charges according to the applicable rate.",
    },
    {
      heading: "7. Provision – Condition of E-bikes and Segway scooters",
      body: "E-bikes and Segway scooters are handed over to the Client in good working order, with the agreed accessories (battery, charger, lock, helmet, etc.), upon presentation of a valid identity document (copies or photos refused).\n\nThe Client is required to check the apparent condition of the E-bike and Segway scooter and to immediately report any reservations. In the absence of reservations upon collection, the E-bike or Segway scooter is deemed to have been handed over in good apparent condition and as ordered.\n\nThe Client signs a handover form noting the condition of the E-bike or Segway scooter and the departure time. If the Client refuses to sign the handover form, the service cannot take place.\n\nE-bikes and Segway scooters must be returned to the departure station at the agreed time.",
    },
    {
      heading: "8. Financial conditions",
      body: "8.1. Prices are expressed in euros, including VAT.\n\nThe price for renting the E-bike or Segway and the guided tour is indicated in the service description or on the booking form. It includes the overall cost of providing the E-bike or Segway, specified accessories, as well as guiding services or access to the application.",
      pricingTable: true,
      afterPricing: "8.2. Payment – Late fees\n\nPayment is due in full upon booking.\n– Payment accepted: bank card (CB/Visa/Mastercard), cash. However, security deposits cannot be made in cash.\n– Bank pre-authorisation: an amount of €99 is blocked on the Customer's card at the time of collection. This sum will not be debited if the rented equipment is returned in good condition and on time.\n– By direct debit on the 1st of the month for long-term rentals.\n\nAny late payment will result, without prior notice, in the application of late interest at the agreed rate or a reasonable contractual rate, as well as the possibility for the Provider to suspend the performance of services and/or terminate the contract for breach after unsuccessful formal notice.\n\n8.3. Security deposit – Fee charges\n\nA security deposit, intended to cover the risk of damage, theft or non-return of the E-bike or Segway and accessories, is required for all bookings. The security deposit does not constitute a limit of liability.\n\nThe security deposit is made by bank card (bank pre-authorisation) or other equivalent mechanism. This deposit does not earn interest. In the event of a charge, a detailed statement will be provided to the Customer.\n\nThe Customer also authorises the Provider to charge, to the registered bank card, amounts corresponding to sums contractually owed in the event of damage, loss or theft of the E-bike, within the limits of the ceilings indicated in Article 9.3.",
    },
    {
      heading: "9. Additional fees",
      body: "9.1. Late fees\n\nLate fees will be charged for failure to return the E-bike or Segway at the agreed time, at a rate of €15 incl. VAT per hour of delay. Any delay exceeding the contractual duration is considered a non-return of the equipment, justifying the invoicing of the residual value of the E-bike or Segway plus an additional penalty of 20% of this value.\n\n9.2. Mileage overage fees\n\nIn case of exceeding the authorised km limit per month for long-term rental agreements, the Customer owes an amount per additional kilometre travelled, based on the number of km shown on the odometer at the time the E-bike is collected.\n\n9.3. Cost of repairs for rented equipment",
      repairsTable: true,
    },
    {
      heading: "10. Use of E-bikes – Customer obligations",
      body: "The Customer undertakes to use the E-bike and the Segway scooter in a prudent manner, in accordance with their intended purpose and the instructions provided by the Provider. To this end, they undertake to:",
      numberedItems: [
        "Use the equipment only in authorised areas (cycle paths, dedicated lanes) — off-road use, stairs, flooded areas or areas prohibited to bicycles are strictly forbidden.",
        "Wear the provided helmet at all times during motorised travel.",
        "Not lend, sublet or transfer the equipment to a third party, even temporarily.",
        "Comply with road traffic regulations applicable to electric-assist bicycles and motorised personal mobility devices.",
        "Not drive under the influence of alcohol, drugs or any medication that impairs driving ability.",
        "Immediately report to VéloRouge (by phone or WhatsApp) any incident, accident, theft or damage occurring during the rental.",
        "Not modify, dismantle, repaint or alter the equipment in any way.",
        "Park the vehicle only in secure areas, using the provided padlock at each stop.",
        "Return the equipment at the agreed time and place — any extension not reported at least 30 minutes in advance will be charged at the extension rate.",
        "Declare oneself fit to ride a two-wheeled vehicle (E-bike / Segway) in urban areas.",
        "Not use the E-bike for unintended purposes (competition, transport of excessive loads, towing, etc.).",
        "Respect technical limitations (power, assistance, maximum weight, etc.).",
      ],
      afterItems: "Any non-compliant, negligent, or dangerous use engages the Client's responsibility and may justify termination of the contract, without prejudice to damages. Compliance with these obligations constitutes an essential condition of the contract.",
    },
    {
      heading: "11. Tourist experiences – Mobile application – Safety",
      body: "The tourist experience includes a predefined route whose main characteristics (estimated duration, approximate distance, particular difficulties, points of interest, any time constraints) are communicated to the Client before the contract is concluded.\n\nWhen guidance is provided by a human guide, the Provider communicates the guide's identity and the main characteristics of their intervention to the Client.\n\nWhen guidance is provided via the mobile application, the Provider provides the Client with the necessary information for downloading and using the said application. The Client is informed that the proper functioning of the application depends on network coverage, the condition of their device and its technical configuration, elements which are beyond the Provider's control.\n\nMobile application guided tours constitute suggestions for routes and content. The Client retains control of their route and driving at all times. They must adapt their driving to traffic conditions, weather, and their physical condition.\n\nThe Client must under no circumstances handle the mobile application in a dangerous manner (prolonged consultation while riding, lack of attention to the road, etc.). The Client must stop in a safe place for any interaction with the screen.\n\nThe Provider is only bound by an obligation of reasonable means regarding the safety of tourist experiences. The Client remains solely responsible for how they use this information.",
    },
    {
      heading: "12. Maintenance, breakdowns and repairs",
      body: "The Client must immediately inform the Provider of any anomaly, incident, breakdown, or accident affecting the E-bike or Segway. They are prohibited from carrying out or having substantial repairs made without prior agreement from the Provider, except in clear emergencies to prevent more serious damage.\n\nFor long-term E-bike rentals, the Provider may require periodic maintenance checks. Failure to present the E-bike for checks may limit or exclude coverage for certain damages attributable to a lack of maintenance.\n\nIn the event of a breakdown rendering the E-bike immobile, the Provider may offer assistance or a replacement E-bike, subject to availability and contractual conditions.",
    },
    {
      heading: "13. Theft, loss and damage to E-bikes",
      body: "In case of theft, attempted theft, loss, or significant damage to the E-bike or Segway scooter or their accessories, the Client must:",
      items: [
        "Immediately inform the Provider.",
        "File a report with the competent authorities in case of theft and send the receipt to the Provider.",
        "Provide, upon request, a detailed account and contact details of any witnesses.",
      ],
      afterItems: "The Client is contractually responsible for the safekeeping of the E-bike, Segway scooter, or their accessories during the period of use. In case of theft or damage resulting from manifest negligence (failure to use the anti-theft device, prolonged parking in a clearly unsecured location, etc.), the Client bears the financial consequences within the limits and according to the terms set out in the contract.",
    },
    {
      heading: "14. Service Provider's Insurance and Liability",
      body: "14.1. The Provider declares to hold professional civil liability insurance covering bodily injury, material, and immaterial damage caused to the Client within the scope of the service, within the limits and conditions of the insurance policy, an extract of which may be provided upon request.",
    },
    {
      heading: "15. Cancellation and refund policy for Clients",
      body: "15.1. Cancellation by the Client\n\nThe right of withdrawal does not apply to leisure services provided on a specific date or period.\n\nHowever, the Client may cancel the rental under the following conditions:",
      items: [
        "Cancellation by the client more than 48h before: full refund.",
        "Cancellation between 24h and 48h before: 50% refund.",
        "Cancellation less than 24h before or no-show: no refund — service due in full.",
      ],
      afterItems: "15.2. Cancellation by the Provider (extreme weather, technical incident): full refund or free postponement.\n\n15.3. For bookings made via OTAs or other partners, please refer to the cancellation policy of those organisations. These GTC only govern the direct relationship with the Provider.",
    },
    {
      heading: "16. Intellectual property – Application – Brand",
      body: "The brands, trade names, logos, E-bike or Segway designations, graphic elements, application content, routes, digital media, and documents provided to the Client are protected by the intellectual property rights of the Provider or its partners.",
    },
    {
      heading: "17. Personal data",
      body: "The Provider collects and processes personal data necessary for managing bookings, contracts, payments, claims, and for improving its services (including via the Application).\n\nData may be used to contact the Client in the context of contract execution, for dispute management, and to comply with legal and regulatory obligations.\n\nThe Provider retains data for the duration necessary for the purposes of processing and may transmit it to its contractual service providers and partners involved in the execution of services, to the extent necessary.\n\nThe Client may exercise their rights of access, rectification and, where applicable, objection or limitation directly with the Provider, according to the terms specified in the privacy policy.",
    },
    {
      heading: "18. Force majeure",
      body: "Neither party shall be liable for non-performance or delay in performance of its obligations when they result from an unforeseeable, irresistible and external event making performance impossible (e.g. extreme weather events, natural disasters, administrative traffic restriction measures, strikes affecting services essential for contract performance, etc.).\n\nIn the event of such an occurrence, the performance of obligations shall be suspended for the duration of the event; if the impediment continues beyond a reasonable period, each party may terminate the contract without compensation, by written notification.",
    },
    {
      heading: "19. Termination",
      body: "In addition to the specific cases provided for herein, each party may terminate the contract by right in the event of a serious breach by the other party of its obligations, not remedied within a reasonable period after written notice.\n\nFor the Provider, serious breaches include in particular:",
      items: [
        "Repeated non-payment of rent or fees.",
        "Obviously dangerous or unlawful use of the E-bikes or Segways.",
        "Unauthorised subletting or assignment.",
        "Wilful damage to the E-bikes or Segways or unauthorised modification of their technical characteristics.",
      ],
      afterItems: "Termination shall result in the immediate return of the E-bikes, Segways and accessories, subject to the sums remaining due for rent, repairs, compensation and penalties provided for in the contract.",
    },
    {
      heading: "20. Applicable law – Dispute resolution",
      body: "These GTC and the resulting contracts are subject to French law.\n\nThe language of the contract is French. Translations into foreign languages are provided by the Provider for information purposes only.\n\nIn the event of a dispute relating to the validity, interpretation or execution of this contract, the parties shall endeavour to reach an amicable settlement. Failing an amicable settlement within 30 days of written notification of the dispute, the dispute may be brought before the competent courts.\n\nThe Client is informed of the possibility to use a consumer mediator. The Provider has joined the Centre de la médiation de la consommation des conciliateurs de justice (CM2C)\n\nPostal address: 49 Rue de Ponthieu, 75008 Paris\nEmail address: declarer-un-litige@cm2c.net\nWebsite: https://www.cm2c.net/comment-nous-saisir.php\n\nOr MTV MEDIATION TOURISME VOYAGE — CS 30958, 75383 PARIS cedex 08 — info@mtv.travel",
    },
    {
      heading: "21. Miscellaneous provisions",
      body: "The nullity of a clause in these GTC shall not affect the validity of the other provisions, which shall remain applicable.\n\nThe fact that the Provider does not invoke any of the clauses at a given time cannot be interpreted as a waiver of its right to invoke them later.\n\nThese GTC may be modified by the Provider. The applicable version is the one in force on the day of booking or signing the contract.",
    },
  ],
};

/* ─── Types ─── */
type DefItem = [string, string];
type Section = {
  heading: string;
  body?: string;
  items?: string[];
  numberedItems?: string[];
  afterItems?: string;
  definitionItems?: DefItem[];
  pricingTable?: boolean;
  afterPricing?: string;
  repairsTable?: boolean;
};
type Content = typeof de;

/* ─── Sub-components ─── */
const PricingTable = ({ content }: { content: Content }) => (
  <div className="overflow-x-auto my-4">
    <table className="w-full text-sm border-collapse border border-border">
      <thead>
        <tr className="bg-muted">
          {content.pricingHeaders.map((h) => (
            <th key={h} className="border border-border px-3 py-2 text-left font-semibold">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {(content === de ? pricingDE : pricingEN).map((row, i) => (
          <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}>
            <td className="border border-border px-3 py-2">{row.product}</td>
            <td className="border border-border px-3 py-2 font-semibold text-primary">{row.price}</td>
            <td className="border border-border px-3 py-2">{row.vehicle}</td>
            <td className="border border-border px-3 py-2">{row.format}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const RepairsTable = ({ content }: { content: Content }) => (
  <div className="overflow-x-auto my-4">
    <table className="w-full text-sm border-collapse border border-border">
      <thead>
        <tr className="bg-muted">
          {content.repairsHeaders.map((h) => (
            <th key={h} className="border border-border px-3 py-2 text-left font-semibold">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {(content === de ? repairsDE : repairsEN).map((row, i) => (
          <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}>
            <td className="border border-border px-3 py-2">{row.event}</td>
            <td className="border border-border px-3 py-2 font-semibold">{row.amount}</td>
            <td className="border border-border px-3 py-2 text-muted-foreground">{row.method}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const renderSection = (section: Section, idx: number, content: Content) => (
  <div key={idx} className="mb-10">
    <h2 className="font-display text-xl md:text-2xl font-black mb-4">{section.heading}</h2>

    {section.definitionItems && (
      <dl className="space-y-3 mb-4">
        {section.definitionItems.map(([term, def]) => (
          <div key={term} className="grid grid-cols-1 sm:grid-cols-4 gap-1">
            <dt className="font-semibold text-sm col-span-1">{term}</dt>
            <dd className="text-sm text-muted-foreground sm:col-span-3">{def}</dd>
          </div>
        ))}
      </dl>
    )}

    {section.body && section.body.split("\n\n").map((p, i) => (
      <p key={i} className="text-muted-foreground leading-relaxed mb-3 whitespace-pre-line">{p}</p>
    ))}

    {section.pricingTable && <PricingTable content={content} />}
    {section.afterPricing && section.afterPricing.split("\n\n").map((p, i) => (
      <p key={i} className="text-muted-foreground leading-relaxed mb-3 whitespace-pre-line">{p}</p>
    ))}

    {section.repairsTable && <RepairsTable content={content} />}

    {section.items && (
      <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
        {section.items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    )}

    {section.numberedItems && (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-muted-foreground">
        {section.numberedItems.map((item, i) => <li key={i}>{item}</li>)}
      </ol>
    )}

    {section.afterItems && section.afterItems.split("\n\n").map((p, i) => (
      <p key={i} className="text-muted-foreground leading-relaxed mb-3 whitespace-pre-line">{p}</p>
    ))}
  </div>
);

/* ─── Page ─── */
const CGSPage = () => {
  const { i18n } = useTranslation();
  const content: Content = i18n.language.startsWith("de") ? de : en;

  return (
    <main>
      <SEO
        title="Allgemeine Servicebedingungen — VéloRouge"
        description="Allgemeine Servicebedingungen von VéloRouge / TourDeWheel."
        canonical="/cgs"
      />
      <Navbar />

      <section className="pt-32 pb-16 bg-dark text-dark-foreground">
        <div className="container">
          <h1 className="font-display text-4xl md:text-5xl font-black leading-tight max-w-3xl">
            {content.title}
          </h1>
          <p className="mt-3 text-dark-foreground/50 text-sm tracking-wide">{content.version}</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          {content.intro.split("\n\n").map((p, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
          ))}
          <hr className="my-10 border-border" />
          {content.sections.map((section, idx) => renderSection(section as Section, idx, content))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CGSPage;
