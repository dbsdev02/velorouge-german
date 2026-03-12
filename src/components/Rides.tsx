import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import rideSundowner from "@/assets/ride-sundowner.jpg";
import rideMarket from "@/assets/Bar Hop Petite France.png";
import rideRiver from "@/assets/ride-river.jpg";
import rideLocal from "@/assets/ride-local.jpg";

const Rides = () => {
  const { t } = useTranslation();
  
  const rides = [
    { img: rideSundowner, title: t('rides.ride1'), price: "29€", tag: t('rides.favorite') },
    { img: rideMarket, title: t('rides.ride2'), price: "35€", tag: t('rides.popular') },
    { img: rideRiver, title: t('rides.ride3'), price: "24€", tag: null },
    { img: rideLocal, title: t('rides.ride4'), price: "39€", tag: null },
  ];

  return (
  <section id="rides" className="py-24 bg-background">
    <div className="container">
      <h2 className="font-display text-4xl md:text-5xl font-black leading-tight max-w-md">
        {t('rides.title')}
        <br />
        {t('rides.titleLine2')} <em className="text-primary">{t('rides.titleHighlight')}</em>
      </h2>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {rides.map((r) => (
          <Link key={r.title} to="/visitors" className="group cursor-pointer">
            <div className="relative overflow-hidden aspect-[3/4]">
              <img
                src={r.img}
                alt={r.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {r.tag && (
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1">
                  {r.tag}
                </span>
              )}
            </div>
            <h3 className="mt-4 font-display text-lg font-bold">{r.title}</h3>
            <p className="text-muted-foreground text-sm">{t('rides.from')} {r.price}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Rides;
