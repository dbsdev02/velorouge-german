import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const BOKUN_CHANNEL = "79fde21a-45fd-4202-b90d-bfd9333501fd";
let bokunLoaderPromise: Promise<void> | null = null;

/** Injects the Bokun widget loader script at most once, on demand. */
function loadBokunWidgets(): Promise<void> {
  if (!bokunLoaderPromise) {
    bokunLoaderPromise = new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = `https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=${BOKUN_CHANNEL}`;
      script.async = true;
      script.onload = () => resolve();
      document.body.appendChild(script);
    });
  }
  return bokunLoaderPromise;
}

const Pricing = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const [widgetReady, setWidgetReady] = useState(false);

  // Defer fetching/parsing the (heavy) Bokun booking script until the pricing
  // section is about to enter the viewport, so it never blocks first paint,
  // FCP, LCP or TBT on initial load — it only loads "when needed".
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const load = () => {
      loadBokunWidgets().then(() => setWidgetReady(true));
    };

    if (!("IntersectionObserver" in window)) {
      load();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          load();
          observer.disconnect();
        }
      },
      { rootMargin: "600px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Fallback: if the user interacts with the page (scroll/touch/click) before
  // the observer fires (e.g. very fast scroll), make sure the widget loads.
  useEffect(() => {
    if (widgetReady) return;
    const events: Array<keyof WindowEventMap> = ["scroll", "pointerdown", "keydown", "touchstart"];
    const onInteract = () => loadBokunWidgets().then(() => setWidgetReady(true));
    events.forEach((evt) => window.addEventListener(evt, onInteract, { once: true, passive: true }));
    return () => events.forEach((evt) => window.removeEventListener(evt, onInteract));
  }, [widgetReady]);

  const plans = [
    {
      id: "halfday",
      name: t('pricing.plan3Name'),
      price: "€18",
      period: t('pricing.plan3Period'),
      target: t('pricing.plan3Target'),
      bokunId: "bokun_53550c4e_1e17_4fd0_9ed8_a447403c2f21",
      bokunSrc: `https://widgets.bokun.io/online-sales/${BOKUN_CHANNEL}/experience/1238059?partialView=1`,
      features: [
        t('pricing.plan1Feature1'),
        t('pricing.plan1Feature2'),
      ],
    },
    {
      id: "discovery-exp",
      name: t('pricing.plan2Name'),
      price: "€35",
      period: t('pricing.plan2Period'),
      target: t('pricing.plan2Target'),
      popular: true,
      bokunId: null as string | null,
      bokunSrc: null as string | null,
      features: [
        t('pricing.plan1Feature1'),
        t('pricing.plan1Feature2'),
      ],
    },
    {
      id: "discovery-day",
      name: t('pricing.plan1Name'),
      price: "€25",
      period: t('pricing.plan1Period'),
      target: t('pricing.plan1Target'),
      bokunId: "bokun_6143a63c_4f4b_450f_94a7_90eeec8b1287",
      bokunSrc: `https://widgets.bokun.io/online-sales/${BOKUN_CHANNEL}/experience/1238051?partialView=1`,
      features: [
        t('pricing.plan1Feature1'),
        t('pricing.plan1Feature2'),
      ],
    },
    {
      id: "weekend",
      name: t('pricing.plan4Name'),
      price: "€42",
      period: t('pricing.plan4Period'),
      target: t('pricing.plan4Target'),
      bestValue: true,
      bokunId: "bokun_0df41703_2a01_4e5b_9c07_4b6b322dd5ad",
      bokunSrc: `https://widgets.bokun.io/online-sales/${BOKUN_CHANNEL}/experience/1238095?partialView=1`,
      features: [
        t('pricing.plan1Feature1'),
        t('pricing.plan1Feature2'),
      ],
    },
  ];

  const featuredPlan = {
    id: "3day",
    name: t('pricing.plan5Name'),
    price: "€60",
    period: t('pricing.plan5Period'),
    target: t('pricing.plan5Target'),
    bokunId: "bokun_68bea1db_2fc1_43a4_9d42_b100473905e7",
    bokunSrc: `https://widgets.bokun.io/online-sales/${BOKUN_CHANNEL}/experience/1238065?partialView=1`,
    features: [
      t('pricing.plan1Feature1'),
      t('pricing.plan1Feature2'),
    ],
  };

  return (
    <section id="pricing" ref={sectionRef} className="py-24 bg-dark text-dark-foreground">
      <div className="container">
        <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
          {t('pricing.title')}
          <br />
          {t('pricing.titleLine2')} <em className="text-primary">{t('pricing.titleHighlight')}</em>
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.filter((p) => p.id !== 'discovery-exp').map((p) => (
            <div
              key={p.id}
              className={`p-6 border flex flex-col ${
                (p as { popular?: boolean; bestValue?: boolean }).popular || (p as { popular?: boolean; bestValue?: boolean }).bestValue
                  ? "border-primary bg-dark-surface"
                  : "border-dark-surface"
              }`}
            >
              {(p as { popular?: boolean }).popular && (
                <span className="self-start mb-3 text-xs font-semibold uppercase tracking-widest text-white bg-green-500 px-2 py-0.5 rounded">
                  {t('pricing.mostPopular')}
                </span>
              )}
              {(p as { bestValue?: boolean }).bestValue && (
                <span className="self-start mb-3 text-xs font-semibold uppercase tracking-widest text-primary border border-primary px-2 py-0.5">
                  {t('pricing.bestValue')}
                </span>
              )}
              <div className="text-sm text-dark-foreground/60 mb-1">{p.name}</div>
              <span className="self-start inline-block text-xs font-semibold uppercase tracking-widest text-dark-foreground/70 border border-dark-foreground/30 px-2 py-0.5">
                {p.period.replace(/^\//, '')}
              </span>
              <div className="mt-1 text-xs text-dark-foreground/40 italic">{p.target}</div>
              <ul className="mt-5 space-y-2 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-dark-foreground/70">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              {p.bokunId ? (
                <button
                  className="bokunButton mt-6 w-full py-3 text-sm font-semibold text-white transition-colors border-none cursor-pointer bg-red-600 hover:bg-red-700"
                  id={p.bokunId}
                  data-src={p.bokunSrc}
                >
                  {t('pricing.bookNowBtn')}
                </button>
              ) : (
                <a
                  href="#contact"
                  className="mt-6 block text-center py-3 text-sm font-semibold text-white transition-colors bg-red-600 hover:bg-red-700"
                >
                  {t('pricing.bookNowBtn')}
                </a>
              )}
            </div>
          ))}

          {/* Featured plan as 4th card */}
          <div className="p-6 border border-primary bg-dark-surface flex flex-col">
            <div className="text-sm text-dark-foreground/60 mb-1">{featuredPlan.name}</div>
            <span className="self-start inline-block text-xs font-semibold uppercase tracking-widest text-dark-foreground/70 border border-dark-foreground/30 px-2 py-0.5">
              {featuredPlan.period.replace(/^\//, '')}
            </span>
            <div className="mt-1 text-xs text-dark-foreground/40 italic">{featuredPlan.target}</div>
            <ul className="mt-5 space-y-2 flex-1">
              {featuredPlan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-dark-foreground/70">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <button
              className="bokunButton mt-6 w-full py-3 text-sm font-semibold bg-red-600 text-white hover:bg-red-700 transition-colors border-none cursor-pointer"
              id={featuredPlan.bokunId}
              data-src={featuredPlan.bokunSrc}
            >
              {t('pricing.bookNowBtn')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
