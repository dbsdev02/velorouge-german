import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";

const Pricing = () => {
  const { t } = useTranslation();
  
  const plans = [
    { 
      name: t('pricing.visitors'), 
      price: "49€", 
      period: t('pricing.perRide'), 
      features: [
        t('pricing.visitorsFeature1'),
        t('pricing.visitorsFeature2'),
        t('pricing.visitorsFeature3'),
        t('pricing.visitorsFeature4')
      ],
      cta: t('pricing.bookNow')
    },
    { 
      name: t('pricing.residents'), 
      price: "15€", 
      period: t('pricing.perWeek'), 
      features: [
        t('pricing.residentsFeature1'),
        t('pricing.residentsFeature2'),
        t('pricing.residentsFeature3'),
        t('pricing.residentsFeature4')
      ],
      popular: true,
      cta: t('pricing.subscribe')
    },
    { 
      name: t('pricing.delivery'), 
      price: "99€", 
      period: t('pricing.perMonth'), 
      subtitle: t('pricing.ownerIn12'),
      features: [
        t('pricing.deliveryFeature1'),
        t('pricing.deliveryFeature2'),
        t('pricing.deliveryFeature3'),
        t('pricing.deliveryFeature4')
      ],
      cta: t('pricing.startJourney')
    },
  ];

  return (
  <section id="pricing" className="py-24 bg-dark text-dark-foreground">
    <div className="container">
      <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
        {t('pricing.title')}
        <br />
        {t('pricing.titleLine2')} <em className="text-primary">{t('pricing.titleHighlight')}</em>
      </h2>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`p-6 border ${p.popular ? "border-primary bg-dark-surface" : "border-dark-surface"} flex flex-col`}
          >
            <div className="text-sm text-dark-foreground/60 mb-2">{p.name}</div>
            <div className="font-display text-3xl font-bold">
              {p.price}
              <span className="text-sm font-body text-dark-foreground/50">{p.period}</span>
            </div>
            <ul className="mt-6 space-y-3 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-base text-dark-foreground/70">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className={`mt-6 block text-center py-3 text-sm font-semibold transition-colors ${
                p.popular
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border border-dark-foreground/20 text-dark-foreground hover:border-dark-foreground/40"
              }`}
            >
              {p.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Pricing;
