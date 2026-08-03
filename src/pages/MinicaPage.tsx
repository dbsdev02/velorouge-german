import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ResponsiveImage from "@/components/ResponsiveImage";
import { useLanguage } from "@/hooks/useLanguage";
import minicaHero from "@/assets/minica-hero.webp?w=640;960;1280;1920&format=avif;webp&as=picture";
import minicaAngle from "@/assets/minica-angle.webp?w=400;700;1000;1200&format=avif;webp&as=picture";
import minicaSide from "@/assets/minica-side.webp?w=400;700;1000;1200&format=avif;webp&as=picture";

const WEB3FORMS_ACCESS_KEY = "1b2e69b7-2037-4a79-9727-75b38b97c06e";

const COLORS = [
  { key: "colorWood", swatch: "#C9A66B" },
  { key: "colorTeak", swatch: "#7A5230" },
  { key: "colorBlack", swatch: "#1A1A1A" },
  { key: "colorPink", swatch: "#E8A9BB" },
  { key: "colorDenim", swatch: "#3B5B7C" },
  { key: "colorForest", swatch: "#2F5233" },
] as const;

type Lang = "en" | "de";

interface ComparisonRow {
  labelKey: string;
  minica: string;
  competitors: string[];
}

const COMPETITOR_NAMES = ["Douze V3", "Douze Héra", "Gaya Original Long", "Gaya Incroyable Long", "Urban Arrow Family", "Babboe City"];

function getComparisonRows(lang: Lang): ComparisonRow[] {
  const t = (en: string, de: string) => (lang === "de" ? de : en);
  return [
    {
      labelKey: "tablePrice",
      minica: "€3,999",
      competitors: ["≈ €4,900–6,000", "≈ €5,000–7,300", "≈ €5,800", "≈ €5,400", "≈ €5,900–8,900", "≈ €3,300+"],
    },
    {
      labelKey: "tableType",
      minica: t("Front-box tricycle", "Frontbox-Dreirad"),
      competitors: [
        t("Front-box bike (2-wheel)", "Frontbox-Lastenrad (2-Rad)"),
        t("Front-box bike (2-wheel)", "Frontbox-Lastenrad (2-Rad)"),
        t("Longtail", "Longtail"),
        t("Longtail", "Longtail"),
        t("Front-box bike (2-wheel)", "Frontbox-Lastenrad (2-Rad)"),
        t("Front-box tricycle", "Frontbox-Dreirad"),
      ],
    },
    {
      labelKey: "tableMotor",
      minica: "80–100 N·m",
      competitors: [
        "Shimano EP8, 85 N·m",
        "Shimano EP8/EP801, 85 N·m",
        t("Rear hub, ~40 N·m", "Heckmotor, ~40 N·m"),
        t("Rear hub, ~40 N·m", "Heckmotor, ~40 N·m"),
        t("Bosch, 75–85 N·m (optional)", "Bosch, 75–85 N·m (optional)"),
        t("Rear hub, ~40 N·m", "Heckmotor, ~40 N·m"),
      ],
    },
    {
      labelKey: "tableBattery",
      minica: "800 Wh",
      competitors: ["504 Wh", "504–630 Wh", "461 Wh", t("461–715 Wh (optional)", "461–715 Wh (optional)"), "400–500 Wh", "≈ 500 Wh"],
    },
    {
      labelKey: "tableRange",
      minica: "60–80 km",
      competitors: ["≈ 60 km", "≈ 60 km", "40–60 km", "40–70 km", "40–60 km", "≈ 50 km"],
    },
    {
      labelKey: "tableLoad",
      minica: "300 kg",
      competitors: ["≈ 180 kg", "≈ 200 kg", "175 kg", "180 kg", "225–275 kg", "≈ 175 kg"],
    },
    {
      labelKey: "tableTransmission",
      minica: t("Automatic, 2-speed", "Automatik, 2-Gang"),
      competitors: [
        t("Derailleur / Enviolo (optional)", "Kettenschaltung / Enviolo (optional)"),
        t("Derailleur / Enviolo (optional)", "Kettenschaltung / Enviolo (optional)"),
        t("7-speed derailleur", "7-Gang-Kettenschaltung"),
        t("7-speed derailleur", "7-Gang-Kettenschaltung"),
        "Enviolo CVT",
        t("7-speed derailleur", "7-Gang-Kettenschaltung"),
      ],
    },
    {
      labelKey: "tableFrame",
      minica: t("Aluminum", "Aluminium"),
      competitors: [
        t("Aluminum", "Aluminium"),
        t("Aluminum", "Aluminium"),
        t("Aluminum", "Aluminium"),
        t("Aluminum", "Aluminium"),
        t("Aluminum", "Aluminium"),
        t("Steel", "Stahl"),
      ],
    },
    {
      labelKey: "tableWheels",
      minica: `20 ${t("in", "Zoll")}`,
      competitors: [
        `20 / 26 ${t("in", "Zoll")}`,
        `20 / 26 ${t("in", "Zoll")}`,
        `20 ${t("in", "Zoll")}`,
        `20 ${t("in", "Zoll")}`,
        `20 / 26 ${t("in", "Zoll")}`,
        `20 ${t("in", "Zoll")}`,
      ],
    },
    {
      labelKey: "tableFamily",
      minica: t("2 children, or 1 child + 1 pet", "2 Kinder, oder 1 Kind + 1 Haustier"),
      competitors: [
        t("1–2 children", "1–2 Kinder"),
        t("up to 4 children", "bis zu 4 Kinder"),
        t("1–2 children", "1–2 Kinder"),
        t("1–2 children", "1–2 Kinder"),
        t("up to 3 children", "bis zu 3 Kinder"),
        t("2 children", "2 Kinder"),
      ],
    },
  ];
}

const MinicaPage = () => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  const lang: Lang = currentLanguage?.startsWith("de") ? "de" : "en";
  const comparisonRows = getComparisonRows(lang);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    model: "minica",
    color: "colorWood",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formDataObj = new FormData();
      formDataObj.append("access_key", WEB3FORMS_ACCESS_KEY);
      formDataObj.append("name", formData.fullName);
      formDataObj.append("email", formData.email);
      formDataObj.append("subject", "VéloRouge Minica Preorder");
      formDataObj.append(
        "message",
        `Minica preorder request\nModel: ${t(`minica.${formData.model === "minica" ? "formModelMinica" : "formModelMinicaPet"}`)}\nBox color: ${t(`minica.${formData.color}`)}`
      );
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj,
      });
      const data = await response.json();
      if (data.success) setSubmitted(true);
    } catch (error) {
      console.error("Minica preorder submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <SEO
        title={t("minica.metaTitle")}
        description={t("minica.metaDescription")}
        canonical="/minica"
        lang={lang}
      />
      <Navbar />

      {/* Announcement bar */}
      <div className="pt-20 bg-primary text-primary-foreground">
        <div className="container py-2.5 text-center text-xs sm:text-sm font-semibold tracking-wide">
          {t("minica.announcementBar")}
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#F6EEE1] py-16 md:py-20">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">{t("minica.tag")}</p>
            <h1 className="font-display text-5xl md:text-6xl font-black leading-[0.95]">
              {t("minica.title1")}
              <br />
              {t("minica.title2")}
            </h1>
            <p className="mt-6 text-muted-foreground max-w-md italic leading-relaxed">{t("minica.description")}</p>

            <div className="mt-8 inline-block bg-background border border-border p-6 max-w-xs">
              <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-2">{t("minica.offerLabel")}</p>
              <div className="font-display text-4xl font-black text-primary">€3,999</div>
              <p className="text-xs text-muted-foreground mt-1">{t("minica.offerValidity")}</p>
              <p className="text-sm text-muted-foreground line-through mt-2">{t("minica.regularPrice")}</p>
              <p className="text-sm font-semibold text-emerald-700 mt-0.5">{t("minica.youSave")}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#preorder"
                className="inline-flex items-center bg-primary text-primary-foreground px-8 py-3.5 font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                {t("minica.ctaPreorder")}
              </a>
              <a
                href="#specifications"
                className="inline-flex items-center border border-border text-foreground px-8 py-3.5 font-semibold text-sm hover:border-foreground/40 transition-colors"
              >
                {t("minica.ctaSpecs")}
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg">
            <ResponsiveImage
              image={minicaHero}
              alt={t("minica.heroImageAlt")}
              className="w-full h-full object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Two ways to carry the essentials */}
      <section className="py-24 bg-background">
        <div className="container">
          <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">{t("minica.waysTag")}</p>
          <h2 className="font-display text-4xl md:text-5xl font-black leading-tight max-w-lg">{t("minica.waysTitle")}</h2>
          <p className="mt-4 text-muted-foreground max-w-xl">{t("minica.waysSubtitle")}</p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-border overflow-hidden">
              <div className="aspect-[3/2] bg-muted overflow-hidden">
                <ResponsiveImage
                  image={minicaAngle}
                  alt={t("minica.minicaAngleAlt")}
                  className="w-full h-full object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <div className="font-display font-bold">{t("minica.minicaName")}</div>
                  <div className="text-sm text-muted-foreground">{t("minica.minicaDesc")}</div>
                </div>
                <div className="text-sm text-muted-foreground line-through">{t("minica.fromPrice")}</div>
              </div>
            </div>

            <div className="border border-border overflow-hidden">
              <div className="aspect-[3/2] bg-muted overflow-hidden">
                <ResponsiveImage
                  image={minicaSide}
                  alt={t("minica.minicaSideAlt")}
                  className="w-full h-full object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <div className="font-display font-bold">{t("minica.minicaPetName")}</div>
                  <div className="text-sm text-muted-foreground">{t("minica.minicaPetDesc")}</div>
                </div>
                <div className="text-sm text-muted-foreground line-through">{t("minica.fromPrice")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section id="specifications" className="py-24 bg-[#F6EEE1] scroll-mt-20">
        <div className="container">
          <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">{t("minica.specsTag")}</p>
          <h2 className="font-display text-4xl md:text-5xl font-black leading-tight max-w-lg mb-12">{t("minica.specsTitle")}</h2>

          <div className="bg-background border border-border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-border">
            {[
              ["specMotorLabel", "specMotorValue"],
              ["specBatteryLabel", "specBatteryValue"],
              ["specRangeLabel", "specRangeValue"],
              ["specAssistLabel", "specAssistValue"],
              ["specBrakesLabel", "specBrakesValue"],
              ["specHubLabel", "specHubValue"],
              ["specFrameLabel", "specFrameValue"],
              ["specWheelsLabel", "specWheelsValue"],
            ].map(([labelKey, valueKey]) => (
              <div key={labelKey} className="p-6 sm:border-r sm:border-border last:border-r-0">
                <div className="text-[11px] font-semibold text-muted-foreground tracking-widest uppercase mb-1.5">
                  {t(`minica.${labelKey}`)}
                </div>
                <div className="font-semibold">{t(`minica.${valueKey}`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-black leading-tight">{t("minica.comparisonTitle")}</h2>
            <p className="mt-3 text-muted-foreground">{t("minica.comparisonSubtitle")}</p>
          </div>

          <div className="overflow-x-auto border border-border">
            <table className="w-full min-w-[900px] text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-3 bg-dark text-dark-foreground font-semibold whitespace-nowrap">
                    {t("minica.tableCharacteristic")}
                  </th>
                  <th className="text-left p-3 bg-primary text-primary-foreground font-semibold whitespace-nowrap">
                    Minica / Minica Pet
                  </th>
                  {COMPETITOR_NAMES.map((name) => (
                    <th key={name} className="text-left p-3 bg-dark text-dark-foreground font-semibold whitespace-nowrap">
                      {name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.labelKey} className={i % 2 === 1 ? "bg-muted/40" : undefined}>
                    <td className="p-3 font-medium text-muted-foreground whitespace-nowrap">{t(`minica.${row.labelKey}`)}</td>
                    <td className="p-3 font-semibold bg-primary/10 whitespace-nowrap">{row.minica}</td>
                    {row.competitors.map((value, idx) => (
                      <td key={idx} className="p-3 text-muted-foreground whitespace-nowrap">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-muted-foreground max-w-3xl mx-auto text-center">{t("minica.comparisonNote")}</p>

          <div className="mt-16 text-center">
            <h3 className="font-display text-2xl font-black">{t("minica.takeawayTitle")}</h3>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              ["takeaway1Title", "takeaway1Desc"],
              ["takeaway2Title", "takeaway2Desc"],
              ["takeaway3Title", "takeaway3Desc"],
            ].map(([titleKey, descKey]) => (
              <div key={titleKey} className="border border-border p-6">
                <h4 className="font-display font-bold mb-2">{t(`minica.${titleKey}`)}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(`minica.${descKey}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Colorways */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container text-center">
          <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">{t("minica.colorTag")}</p>
          <h2 className="font-display text-3xl md:text-4xl font-black leading-tight mb-10">{t("minica.colorTitle")}</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {COLORS.map((c) => (
              <div key={c.key} className="flex flex-col items-center gap-2">
                <span
                  className="w-9 h-9 rounded-full border border-border/60 shadow-sm"
                  style={{ backgroundColor: c.swatch }}
                  aria-hidden="true"
                />
                <span className="text-xs text-muted-foreground">{t(`minica.${c.key}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Limited offer + preorder form */}
      <section id="preorder" className="py-24 bg-[#F6EEE1] scroll-mt-20">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">{t("minica.offerTag")}</p>
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">{t("minica.offerTitle")}</h2>
            <p className="mt-6 text-muted-foreground max-w-md">{t("minica.offerDesc")}</p>
            <ul className="mt-8 space-y-3">
              {["offerFeature1", "offerFeature2", "offerFeature3"].map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{t(`minica.${key}`)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-background border border-border p-8">
            {submitted ? (
              <div className="py-8 text-center">
                <h3 className="font-display text-2xl font-bold text-primary">{t("minica.formThankYouTitle")}</h3>
                <p className="mt-2 text-muted-foreground">{t("minica.formThankYouDesc")}</p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-3xl font-black text-primary">€3,999</span>
                    <span className="text-sm text-muted-foreground line-through">{t("minica.formPriceNote")}</span>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">{t("minica.formFullName")}</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder={t("minica.formFullNamePlaceholder")}
                      className="w-full border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{t("minica.formEmail")}</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t("minica.formEmailPlaceholder")}
                      className="w-full border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{t("minica.formModel")}</label>
                    <select
                      value={formData.model}
                      onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                      className="w-full border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="minica">{t("minica.formModelMinica")}</option>
                      <option value="minicaPet">{t("minica.formModelMinicaPet")}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{t("minica.formColor")}</label>
                    <select
                      value={formData.color}
                      onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                      className="w-full border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      {COLORS.map((c) => (
                        <option key={c.key} value={c.key}>
                          {t(`minica.${c.key}`)}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary text-primary-foreground px-8 py-3.5 font-semibold text-sm hover:bg-primary/90 transition-colors disabled:opacity-60"
                  >
                    {loading ? t("minica.formSubmitting") : t("minica.formSubmit")}
                  </button>
                  <p className="text-xs text-muted-foreground text-center">{t("minica.formFootnote")}</p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default MinicaPage;
