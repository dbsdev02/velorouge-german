import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import sundowner from "@/assets/sundower.jpg";
import cathedrale from "@/assets/Cathédrale.jpg";
import neustadt from "@/assets/Neustadt.jpg";
import marcheNoel from "@/assets/marché-de-noël.jpg";
import barrageVauban from "@/assets/barrage-vauban.jpg";
import rhineBorder from "@/assets/rhine-bridge.jpg";

const Showcase = () => {
  const { t } = useTranslation();

  const locations = [
    {
      image: sundowner,
      title: t('showcase.location1Title'),
      subtitle: t('showcase.location1Subtitle'),
      description: t('showcase.location1Desc')
    },
    {
      image: cathedrale,
      title: t('showcase.location2Title'),
      subtitle: t('showcase.location2Subtitle'),
      description: t('showcase.location2Desc')
    },
    {
      image: neustadt,
      title: t('showcase.location3Title'),
      subtitle: t('showcase.location3Subtitle'),
      description: t('showcase.location3Desc')
    },
    {
      image: marcheNoel,
      title: t('showcase.location4Title'),
      subtitle: t('showcase.location4Subtitle'),
      description: t('showcase.location4Desc')
    },
    {
      image: barrageVauban,
      title: t('showcase.location5Title'),
      subtitle: t('showcase.location5Subtitle'),
      description: t('showcase.location5Desc')
    },
    {
      image: rhineBorder,
      title: t('showcase.location6Title'),
      subtitle: t('showcase.location6Subtitle'),
      description: t('showcase.location6Desc')
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-16 text-center">
          {t('showcase.titlePart1')} <em className="text-primary">{t('showcase.titleHighlight')}</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {locations.map((location, index) => (
            <div key={index} className="border-2 border-border rounded-lg overflow-hidden hover:border-primary transition-colors">
              <div className="h-64 overflow-hidden">
                <img 
                  src={location.image} 
                  alt={location.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display text-xl font-bold mb-2">
                  {location.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {location.description}
                </p>
                <Link 
                  to="/" 
                  className="block w-full bg-dark text-dark-foreground text-center py-3 text-sm font-semibold hover:bg-dark/90 transition-colors"
                >
                  {t('showcase.exploreNow')}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
