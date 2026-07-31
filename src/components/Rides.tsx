import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import rideSundowner from "@/assets/Circuit Culturel.png?w=320;480;720&format=avif;webp;jpg&as=picture";
import rideMarket from "@/assets/Boucle des Canaux.png?w=320;480;720&format=avif;webp;jpg&as=picture";
import rideRiver from "@/assets/Forêt de Robertsau & Rhin.png?w=320;480;720&format=avif;webp;jpg&as=picture";
import rideLocal from "@/assets/Découverte Campagnarde.png?w=320;480;720&format=avif;webp;jpg&as=picture";
import ResponsiveImage from "@/components/ResponsiveImage";

const Rides = () => {
  const { t } = useTranslation();
  
  const rides = [
    {
      img: rideRiver,
      title: t('rides.ride1Title'),
      price: t('ridesPage.price1'),
      priceLabel: t('ridesPage.price1Label'),
      tag: t('rides.favorite'),
      duration: "2h30",
      difficulty: t('rides.easy'),
      subtitle: t('ridesPage.ride1Subtitle')
    },
    {
      img: rideMarket,
      title: t('rides.ride2Title'),
      price: t('ridesPage.price2'),
      priceLabel: t('ridesPage.price2Label'),
      tag: t('rides.popular'),
      duration: "3h",
      difficulty: t('rides.easy'),
      subtitle: t('ridesPage.ride2Subtitle')
    },
    {
      img: rideSundowner,
      title: t('rides.ride3Title'),
      price: t('ridesPage.price3'),
      priceLabel: t('ridesPage.price3Label'),
      tag: null,
      duration: "2h",
      difficulty: t('rides.moderate'),
      subtitle: t('ridesPage.ride3Subtitle')
    },
    {
      img: rideLocal,
      title: t('rides.ride4Title'),
      price: t('ridesPage.price4'),
      priceLabel: t('ridesPage.price4Label'),
      tag: null,
      duration: "3h30",
      difficulty: t('rides.moderate'),
      subtitle: t('ridesPage.ride4Subtitle')
    },
  ];

  return (
  <section id="rides" className="py-24 bg-background">
    <div className="container">
      <h2 className="font-display text-4xl md:text-5xl font-black leading-tight max-w-md mb-4">
        {t('rides.title')}
        <br />
        {t('rides.titleLine2')} <em className="text-primary">{t('rides.titleHighlight')}</em>
      </h2>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {rides.map((r) => (
          <Link key={r.title} to="/visitors" className="group cursor-pointer block">
            <div className="relative overflow-hidden aspect-[3/4]">
              <ResponsiveImage
                image={r.img}
                alt={r.title}
                className="w-full h-full object-cover object-bottom group-hover:scale-105 transition-transform duration-700"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
              
              {r.tag && (
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 tracking-wider">
                  {r.tag}
                </span>
              )}
            </div>
            
            <div className="mt-4">
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                <span>{r.difficulty}</span>
              </div>
              
              <h3 className="font-body text-2xl font-semibold mb-1 leading-tight">{r.title}</h3>
              
              <p className="text-xs text-muted-foreground italic mb-6 leading-snug">{r.subtitle}</p>

              <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-5 py-2.5 hover:bg-primary/90 transition-colors">
                {t('ridesPage.bookButton')}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Rides;
